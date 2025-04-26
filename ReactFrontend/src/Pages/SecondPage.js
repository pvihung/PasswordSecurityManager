import React, { useState } from 'react';
import Button, { Button2 } from '../Buttons/Buttons';
import Popup from 'reactjs-popup';
import './SecondPage.css';

export default function SecondPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accounts, setAccounts] = useState([
        { siteName: 'Google', username: 'Andrew', password: 'sfsafna', createdAt: '2025-04-20' },
        { siteName: 'Facebook', username: 'John', password: 'pass123', createdAt: '2025-04-19' },
        { siteName: 'Twitter', username: 'Jane', password: ' qwerty', createdAt: '2025-04-18' },
        { siteName: 'LinkedIn', username: 'Alice', password: 'abc123', createdAt: '2025-04-17' },
        { siteName: 'Instagram', username: 'Bob', password: 'password', createdAt: '2025-04-16' },
        { siteName: 'Snapchat', username: 'Charlie', password: '123456', createdAt: '2025-04-15' },
        { siteName: 'Reddit', username: 'Dave', password: 'qwerty123', createdAt: '2025-04-14' },
        { siteName: 'Pinterest', username: 'Eve', password: 'mypassword', createdAt: '2025-04-13' },
        { siteName: 'Tumblr', username: 'Frank', password: 'letmein', createdAt: '2025-04-12' },
        { siteName: 'YouTube', username: 'Grace', password: 'iloveyou', createdAt: '2025-04-11' },
        { siteName: 'WhatsApp', username: 'Heidi', password: '12345678', createdAt: '2025-04-10' },
        { siteName: 'Spotify', username: 'Ivan', password: 'password1', createdAt: '2025-04-09' },
        { siteName: 'Netflix', username: 'Judy', password: 'qwertyuiop', createdAt: '2025-04-08' },
        { siteName: 'Amazon', username: 'Kevin', password: 'asdfghjkl', createdAt: '2025-04-07' },
        { siteName: 'eBay', username: 'Laura', password: 'zxcvbnm', createdAt: '2025-04-06' },
        { siteName: 'PayPal', username: 'Mallory', password: '123qwe', createdAt: '2025-04-05' },
    ]);

    const sendAccountInfo = async () => {
        console.log(siteName, username, password, confirmPassword);
        try {
            const postData = { appName: siteName, username, password };
            const response = await fetch("http://localhost:8080/api/vaultentry", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
            const jsonData = await response.json();
            console.log("The vaultentry creation worked: ", jsonData);
        } catch (exception) {
            console.error("It didn't work: ", exception.message);
        }
    };

    const removeAccount = (siteName, username) => {
        const updatedAccounts = accounts.filter(
            (account) => !(account.siteName === siteName && account.username === username)
        );
        setAccounts(updatedAccounts);
        console.log(`Removed account for ${username} on ${siteName}`);
    };

    const groupedAccounts = accounts.reduce((acc, account) => {
        if (!acc[account.siteName]) {
            acc[account.siteName] = [];
        }
        acc[account.siteName].push(account);
        return acc;
    }, {});

    return (
        <div
            style={{
                padding: '100px',
                backgroundColor: '#f6f6f6',
                minHeight: '200vh',
                fontFamily: 'Inria Serif, serif',
                color: '#333',
            }}
        >
            {/* Title of the page */}
            <h1
                style={{
                    textAlign: 'center',
                    color: '#333',
                    marginBottom: '30px',
                    fontSize: '2.5em',
                    fontWeight: 'bold',
                }}
            >
                Password Manager
            </h1>

            {/* Display grouped accounts */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                }}
            >
                {Object.entries(groupedAccounts).map(([siteName, users], index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#fff',
                            border: '1px solid #eaeaea',
                            borderRadius: '10px',
                            padding: '20px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        }}
                    >
                        <h2
                            style={{
                                borderBottom: '2.2px solid #eaeaea',
                                paddingBottom: '5px',
                                marginBottom: '10px',
                                color: '#555',
                                fontSize: '1.8em',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                            }}
                        >
                            {siteName}
                        </h2>
                        {users.map((user, userIndex) => (
                            <div
                                key={userIndex}
                                style={{
                                    position: 'relative',
                                    marginBottom: '15px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    backgroundColor: '#f9f9f9',
                                    fontSize: '1.05em',
                                }}
                            >
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Username:</strong> {user.username}
                                </p>
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Password:</strong> {user.password}
                                </p>
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Created At:</strong> {user.createdAt}
                                </p>
                                {/* Remove account with -*/}
                                <Button2
                                    idleText="-"
                                    onClick={() => removeAccount(siteName, user.username)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Popup for adding new account */}
            <Popup
                open={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                modal
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)',
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
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h2>Add New Account</h2>
                    <p>Please enter your new account here.</p>
                    <input
                        type="text"
                        placeholder="Site Name"
                        className="inputBlock"
                        onChange={(event) => setSiteName(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="inputBlock"
                        onChange={(event) => setUsername(event.target.value)}
                    />
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
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    {/* Close Button */}
                    <button
                            style={{
                                position: 'absolute',
                                top: '0px',
                                right: '5px',
                                background: 'none',
                                border: 'none',
                                fontSize: '40px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: 'red'
                            }}
                            onClick={() => setIsPopupOpen(false)}
                        >
                            &times;
                        </button>
                    <Button idleText="Save Account" onClick={sendAccountInfo} />
                </div>
            </Popup>

            {/* Trigger Button */}
            <Button idleText="Add New Account" onClick={() => setIsPopupOpen(true)} />
        </div>
    );
}