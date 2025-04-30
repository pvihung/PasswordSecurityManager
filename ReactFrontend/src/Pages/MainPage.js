import Button from "../Buttons/Buttons.js";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate();
    const verifyUser = async (e) => {
        try {
            console.log(username);
            console.log(password);
            const response = await fetch("http://localhost:8080/api/verifylogin", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            const validation = await response.text();
            console.log(response.type);
            console.log(response.ok);
            console.log(response.status);
            if (response.ok) {
                console.log(validation);
                navigate('/manager');
            } else {
                console.error(validation);
            }
        } catch (error) {
            console.error("Something went wrong here: ", error);
        }
    }

    return (
        <>
            {/* Page name */}
            <div className="AddingAccount">
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
                        className="text-center"
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Your Password"
                        className="text-center"
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
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
                        <Button idleText="Forgot Password?" onClick={() => setIsPopupOpen(true)} />
                    </div>
                </div>
            </div>

            {/* Popup Window */}
            {isPopupOpen && (
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
                            onClick={() => setIsPopupOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Popup Content */}
                        <h2>Forgot Password</h2>
                        <p>Answer this question to verify yourself:</p>
                        <input
                            type="text"
                            placeholder="Your Security Question"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Your Answer"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%',
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%',
                            }}
                        />
                        <div style={{ marginTop: '10px' }}>
                            <Button
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                }}
                                onClick={() => setIsPopupOpen(false)}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}