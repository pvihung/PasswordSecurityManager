import React, {useState, useEffect} from 'react';
import Button from '../Buttons/Buttons';
import Popup from 'reactjs-popup';
import './PageClasses.css';
import {useNavigate, useLocation} from 'react-router-dom';

export default function SecondPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passEqual, setPassEqual] = useState(true);
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [duplicateError, setDuplicateError] = useState(false);
    const receivedID = location.state?.data;
    console.log(receivedID);

    // Grab the user's account data from database and store in array
    useEffect(() => {
        async function loadAccounts() {
            try {
                const accountsFetch = await fetch(`http://localhost:8080/api/vault/${receivedID}`, {
                    method: 'GET'
                });
                console.log(accountsFetch);
                if (!accountsFetch.ok) {
                    console.error("Accounts fetch failed");
                } else {
                    const accountsData = await accountsFetch.json();
                    setAccounts(accountsData);
                    console.log(accounts);
                }
            } catch (error) {
                console.error("Accounts fetch failed: ", error);
            }
        };
        loadAccounts();
    }, [receivedID]);

    // Add new account details to the vault
    const sendAccountInfo = async () => {
        if (password !== confirmPass) {
            setPassEqual(false);
            // set timer to close the popup after 2 seconds
            setTimeout(() => {
                setPassEqual(true);
            }, 2000);
            return;
        }

        // Check for duplicate accounts
        const existingAccounts = groupedAccounts[siteName] || [];
        const isDuplicate = existingAccounts.some(account => account.username === username);
    
        if (isDuplicate) {
            setDuplicateError(true);
            setTimeout(() => {
                setDuplicateError(false);
        }, 3000);
            return;
        }

        console.log(siteName, username, password, confirmPass);
        try {
            const postData = {userid: receivedID, appName: siteName, "username": username, "password": password};
            const response = await fetch("http://localhost:8080/api/vaultentry", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(postData)
            });
            const jsonData = await response.json();
            console.log("The vaultentry creation worked: ", jsonData);
            accounts.push(postData);
        } catch (exception) {
            console.error("It didn't work: ", exception.message);
        }
    };

    const deleteAccountInfo = async (siteName, username) => {
        try {
            const deleteTarget = {userid: receivedID, appName: siteName, "username": username};
            const response = await fetch("http://localhost:8080/api/vaultentry", {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(deleteTarget)
            });
            console.log("Delete worked: ", response);
        } catch (exception) {
            console.error("Delete failed because: ", exception.message);
        }
    }

    // Add the entered credentials into the accounts array
    const groupedAccounts = accounts.reduce((acc, account) => {
        if (!acc[account.appName]) {
          acc[account.appName] = [];
        }
        acc[account.appName].push(account);
        return acc;
    }, {});

    // Remove a specified account from the accounts array
    const removeAccount = (siteName, username) => {
        console.log(siteName, username);
        deleteAccountInfo(siteName, username);
        const updatedAccounts = accounts.filter(
            (account) => !(account.appName === siteName && account.username === username)
        );
        setAccounts(updatedAccounts);
        console.log(`Removed account for ${username} on ${siteName}`);
    };

    return (
        <div
            style={{
                padding: '100px',
                backgroundColor: '#f6f6f6',
                minHeight: '200vh',
                maxHeight: '200vh',
                overflowY: 'auto',
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
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                }}
            >
                  Password Manager
            </h1>

                {/* Use to sum of columns + Set up for scroll bar */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    overflowY: 'auto',
                    whiteSpace: 'nowrap',
                }}
            >
                {/* Map through the grouped accounts and display them */}
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
                        {/* Display site name */}
                        <h2
                            style={{
                                borderBottom: '2.2px solid #eaeaea',
                                paddingBottom: '5px',
                                marginBottom: '10px',
                                color: '#555',
                                fontSize: '1.8em',
                                fontFamily: 'Inria Serif, serif',
                                fontWeight: 'bold',
                                textAlign: 'left',
                            }}
                        >
                            {siteName}
                        </h2>

                        {/* Display users for the site */}
                        {users.map((user, userIndex) => (
                            <div
                                key={userIndex}
                                style={{
                                    marginBottom: '15px',
                                    padding: '10px',
                                    border: '1px solid #ddd',
                                    borderRadius: '5px',
                                    backgroundColor: '#f9f9f9',
                                    fontSize: '1.05em',
                                    position: 'relative',
                                }}
                            >
                                {/* Display username */}
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Username:</strong> {user.username}
                                </p>

                                {/* Display password */}
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Password:</strong> {user.password}
                                </p>

                                {/* Display creation date */}
                                <p style={{ margin: '0 0 5px', color: '#666' }}>
                                    <strong>Created At: </strong>
                                        {new Date(user.lastModified).toLocaleString()}
                                </p>

                                {/* Delete account button */}
                                <button
                                    className="deleteButton"
                                    style={{
                                        position: 'absolute',
                                        top: '0px',
                                        right: '5px',
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '40px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        color: 'red',
                                    }}
                                    onClick={() => removeAccount(user.appName, user.username)}
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Popup for adding a new account */}
            <Popup
                open={isPopupOpen}
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
                        placeholder="Site Name"
                        className="inputBlock2"
                        onChange={(event) => setSiteName(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className="inputBlock2"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="inputBlock2"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="inputBlock2"
                        onChange={(event) => setConfirmPass(event.target.value)}
                    />

                    {!passEqual && (
                        <p style={{color: 'red'}}><br />Passwords don't match</p>
                    )}

                    {duplicateError && (
                        <p style={{color: 'red'}}><br />Account already exists</p>
                    )}

                    {/* Save account button */}
                    <Button idleText="Save Account" onClick={sendAccountInfo} />

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
                          onClick={() => setIsPopupOpen(false)}
                    >
                        &times;
                    </button>
                </div>
            </Popup>
            
            <div style={{display: 'flex', gap: '30px'}}>
                {/* Button to open the popup */}
                <Button
                    idleText="Add New Account"
                    onClick={() => setIsPopupOpen(true)}
                />

                {/* Button to go to login history table */}
                <Button
                    idleText="View Login History"
                    onClick={() => {navigate('/login', {state: {data: receivedID}});}}
                />
            </div>
        </div>
    );
}