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
    const [resetEmail, setResetEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [emailRegistered, setEmailRegistered] = useState(true);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [twoFactorPopup, setTwoFactorPopup] = useState(false);
    const [secCode, setSecCode] = useState('');
    const [wrongCode, setWrongCode] = useState(false);
    const [confirmed2FA, setConfirmed2FA] = useState(false);
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
        setValidEmail(true);
            try {
                setEmailRegistered(true);
                const response = await fetch("http://localhost:8080/api/verify-email", {
                    method: 'POST',
                    body: resetEmail
                });
                console.log (response);
                if (response.ok) {
                    setEmailRegistered(true);
                    const code = await response.text();
                    const emailSender =
                        await fetch(`http://localhost:8080/api/sendMail/${resetEmail}/${code}`, {
                            method: 'GET'
                    });
                    setIsForgotPopupOpen(false);
                    setTwoFactorPopup(true);
                } else {
                    setEmailRegistered(false);
                }
            } catch (error) {
                console.error("Forgot request not saved: ", error);
            }
        }
    }

    // Check if the correct code is provided; offer password reset for login
    const verifyResetCode = async () => {
        try {
            const response =
                await fetch(`http://localhost:8080/api/verify-code/${secCode}/${resetEmail}`, {
                    method: 'GET'
            });
            if (response) {
                setWrongCode(false);
                setConfirmed2FA(true);
            } else {
                setWrongCode(true);
                setConfirmed2FA(false);
            }
        } catch (error) {
            console.error("Could not obtain proper reset token: ", error);
        }
    }

    // Edit the account details by changing to the new password
    const modifyMasterPass = async () => {
        if (password === confirmPass) {
            setPassEqual(true);
            try {
                const response =
                    await fetch(`http://localhost:8080/api/modify-password/${password}/${resetEmail}`, {
                        method: 'PUT'
                });
                console.log(response);
                setTwoFactorPopup(false);
            } catch (error) {
                console.log("Failed to change master password: ", error);
            }
        } else {
            setPassEqual(false);
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
                <div className="popup-window-outside">

                    {/* Inside Popup Window */}
                    <div className="popup-window-inside">

                        {/* Close Button */}
                        <button
                            className="popup-close-button"
                            style={{fontSize: '30px'}}
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
                            {!emailRegistered && (
                                <p style={{color: 'red'}}><br />Email not registered</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Password Code Reset Window */}
            {twoFactorPopup && (
                <div className="popup-window-outside">

                    {/* Inside Popup Window */}
                    <div className="popup-window-inside">

                        {/* Close Button */}
                        <button
                            className="popup-close-button"
                            style={{fontSize: '30px'}}
                            onClick={() => {setTwoFactorPopup(false)}}
                        >
                            &times;
                        </button>

                        {/* Popup Content */}
                        <h2>Forgot Password</h2>
                        <p>Enter the 6 digit security code sent to your email:</p>
                        <input
                            type="text"
                            placeholder="Security Code"
                            className="inputBlock"
                            onChange={(event) => setSecCode(event.target.value)}
                        />
                        <div style={{ marginTop: '10px' }}>
                            <Button onClick={verifyResetCode} />
                            {wrongCode && (
                                <p style={{color: 'red'}}><br />Incorrect code</p>
                            )}
                            {confirmed2FA && (<>
                                <p>Success! Enter your new password here:</p>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="inputBlock"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="inputBlock"
                                    onChange={(event) => setConfirmPass(event.target.value)}
                                />
                                <Button idleText="Save New Password" onClick={modifyMasterPass} />
                                {!passEqual && (
                                    <p style={{color: 'red'}}><br />Passwords don't match</p>
                                )}
                            </>)}
                        </div>
                    </div>
                </div>
            )}

            {/* Login Failed Popup Window */}
            {showErrorPopup && (
                <div className="popup-window-outside">
                    <div className="popup-window-inside">
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
                        className="popup-close-button"
                        style={{fontSize: '40px'}}
                        onClick={() => {setPassEqual(true); setIsPopupOpen(false)}}
                    >
                        &times;
                    </button>
                </div>
            </Popup>
        </>
    );
}