import Button from "../Buttons/Buttons.js";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./PageClasses.css";
import Popup from 'reactjs-popup';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isForgotPopupOpen, setIsForgotPopupOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newAccUser, setNewAccUser] = useState('');
    const [newAccEmail, setNewAccEmail] = useState('');
    const [newAccPass, setNewAccPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passEqual, setPassEqual] = useState(true);
    const navigate = useNavigate();

    // Make sure that the account exists; log in to account if it does
    const verifyUser = async (e) => {
        try {
            console.log(username);
            console.log(password);
            const response = await fetch("http://localhost:8080/api/verifylogin", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            const userID = await response.text();
            if (response.ok) {
                navigate('/manager', {state: {data: userID}});
                const ipRequest = await fetch('https://api.ipify.org');
                const ip = await ipRequest.text();
                console.log(ip);
                const loginRequest = await fetch("http://localhost:8080/api/save-login", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({"userid": userID, "ipadd": ip})
                })
            } else {
                console.error(userID);
                // show error message
                setShowErrorPopup(true);
                setTimeout(() => {
                    setShowErrorPopup(false);
                }, 1500);
                console.log("Login failed: ", response.status);
            }
        } catch (error) {
            console.error("Something went wrong here: ", error);
        }
    }

    // Save a new user account if the email and username are unique
    const saveUserInfo = async () => {
        if (newAccPass === confirmPass) {
            setPassEqual(true);
            try {
                const postData = {username: newAccUser, masterPass: newAccPass, email: newAccEmail}
                const response = await fetch("http://localhost:8080/api/user", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(postData)
                })
                console.log(response);
            } catch (error) {
                console.error("New account not created: ", error);
            }
        } else {
            setPassEqual(false);
        }
    }

    // Send a forgot password code for 2 factor authentication
    const sendForgotEmail = async () => {
        if (!(resetEmail.match(/^\S+@\S+\.\S+$/))) {
            setValidEmail(false);
        } else {

        }
    }

    return (
        <>
            {/* Page name */}
            <div className="MiddlePageSetUp">
                <h1
                    className="Title"
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Georgia',
                        fontWeight: 'bold',
                        fontSize: '35px',
                        height: '45px',
                        fontStyle: 'italic',
                    }}
                >
                    Password Manager
                </h1>
                {/* Login Form */}
                <div
                    style={{
                        backgroundColor: '#f9f9f9',
                        padding: '50px',
                        borderRadius: '12px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        fontFamily: 'Georgia',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #ddd',
                    }}
                >
                    {/* Form Title */}
                    <h2 className="Heading" style={{ textAlign: 'center', fontSize: '24px', height: '50px' }}>
                        Enter your Username and Password
                    </h2>
                    {/* Username Input */}
                    <input
                        type="text"
                        placeholder="Your Username"
                        className="inputBlock"
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="inputBlock"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {/* Login Button and Forgot Password*/}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '10px',
                            marginTop: '20px',
                        }}
                    >
                        <Button idleText="Login" onClick={verifyUser}/>
                        <Button idleText="Forgot Password?" onClick={() => setIsForgotPopupOpen(true)} />
                        <Button idleText="Create New Account"  onClick={() => setIsPopupOpen(true)}/>
                    </div>
                </div>
            </div>

            {/* Forgot Password Popup Window */}
            {isForgotPopupOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* Inside Popup Window */}
                    <div
                        style={{
                            position: 'relative',
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            fontFamily: 'Georgia',
                            fontSize: '16px',
                            maxWidth: '500px',
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            className="close-button"
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: 'red',
                            }}
                            onClick={() => {setValidEmail(true); setIsForgotPopupOpen(false)}}
                        >
                            &times;
                        </button>

                        {/* Popup Content */}
                        <h2>Forgot Password</h2>
                        <p>Enter your email to receive a security code:</p>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="inputBlock"
                            onChange={(event) => setResetEmail(event.target.value)}
                        />
                        <div style={{ marginTop: '10px' }}>
                            <Button onClick={sendForgotEmail} />
                            {!validEmail && (
                                <p style={{color: 'red'}}><br />Invalid email</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            {/* Login Failed Popup Window */}
            {showErrorPopup && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            fontFamily: 'Georgia',
                            fontSize: '16px',
                            maxWidth: '500px',
                            width: '100%',
                            textAlign: 'center',
                            
                        }}
                    >
                        
                        <h2 style={{color: 'red'}}>Login Failed</h2>
                        <p>Invalid username or password.</p>
                    </div>
                </div>
            )}
            
            {/* Create Account Popup Window */}
            <Popup
                open={isPopupOpen}
                closeOnDocumentClick={false}
                onClose={() => setIsPopupOpen(false)} // Close the popup
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)', // Dimmed background
                }}
                contentStyle={{
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '50%',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    maxWidth: '600px',
                    margin: 'auto',
                }}
            >
                {/* Popup content */}
                <div
                    style={{
                        padding: '20px',
                        textAlign: 'center',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                    }}
                >
                    <h2>Add New Account</h2>
                    <p>Please enter your new account here.</p>

                    {/* Input fields */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="inputBlock2"
                        onChange={(event) => setNewAccUser(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="inputBlock2"
                        onChange={(event) => setNewAccEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="inputBlock2"
                        onChange={(event) => setNewAccPass(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="inputBlock2"
                        onChange={(event) => setConfirmPass(event.target.value)}
                    />

                    {/* Save account button */}
                    <Button idleText="Save Account" onClick={saveUserInfo} />

                    {!passEqual && (
                        <p style={{color: 'red'}}><br />Passwords don't match</p>
                    )}

                    {/* Close button */}
                    <button
                        className="close-button"
                        style={{
                            position: 'absolute',
                            top: '0px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            fontSize: '40px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            color: 'red',
                        }}
                        onClick={() => {setPassEqual(true); setIsPopupOpen(false)}}
                    >
                        &times;
                    </button>
                </div>
            </Popup>
        </>
    );
}