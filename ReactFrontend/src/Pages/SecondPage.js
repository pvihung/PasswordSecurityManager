import React, { useState } from 'react';
import Button from '../Buttons/Buttons';
import Popup from 'reactjs-popup';
import './SecondPage.css';
import {useLocation} from 'react-router-dom';

export default function SecondPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [accounts, setAccounts] = useState([
      { siteName: 'Google', username: 'Andrew', password: 'sfsafna', createdAt: '2025-04-20' },
        { siteName: 'Google', username: 'Sarah', password: 'sfsafna', createdAt: '2025-04-20' },
        { siteName: 'Google', username: 'David', password: 'sfsafna', createdAt: '2025-04-20' },
        { siteName: 'Facebook', username: 'John', password: 'pass123', createdAt: '2025-04-19' },
        { siteName: 'Facebook', username: 'Mike', password: 'pass123', createdAt: '2025-04-19' },
        { siteName: 'Facebook', username: 'Justin', password: 'pass456', createdAt: '2025-04-19' },
        { siteName: 'Twitter', username: 'Jane', password: 'mypassword', createdAt: '2025-04-18' },
        { siteName: 'Twitter', username: 'Emily', password: 'mypassword', createdAt: '2025-04-18' },
        { siteName: 'Twitter', username: 'Tony', password: 'mypassword789', createdAt: '2025-04-18' },
        { siteName: 'LinkedIn', username: 'Alice', password: 'alice123', createdAt: '2025-04-17' },
        { siteName: 'LinkedIn', username: 'Bob', password: 'bob123', createdAt: '2025-04-17' },
        { siteName: 'LinkedIn', username: 'Charlie', password: 'charlie123', createdAt: '2025-04-17' },
        { siteName: 'Instagram', username: 'Sophia', password: 'sophia123', createdAt: '2025-04-16' },
        { siteName: 'Instagram', username: 'Liam', password: 'liam123', createdAt: '2025-04-16' },
        { siteName: 'Reddit', username: 'Emma', password: 'reddit123', createdAt: '2025-04-15' },
        { siteName: 'Reddit', username: 'Noah', password: 'reddit456', createdAt: '2025-04-15' },
        { siteName: 'Pinterest', username: 'Olivia', password: 'pinterest123', createdAt: '2025-04-14' },
        { siteName: 'Pinterest', username: 'James', password: 'pinterest456', createdAt: '2025-04-14' },
        { siteName: 'Snapchat', username: 'Ava', password: 'snapchat123', createdAt: '2025-04-13' },
        { siteName: 'Bank of America', username: 'William', password: 'bank123', createdAt: '2025-04-12' },
        { siteName: 'Bank of America', username: 'Mia', password: 'bank456', createdAt: '2025-04-12' },
        { siteName: 'Chase', username: 'Lucas', password: 'chase123', createdAt: '2025-04-11' },
        { siteName: 'Cornhub', username: 'Sophia', password: 'corn123', createdAt: '2025-04-10' },
        { siteName: 'Cornhub', username: 'Liam', password: 'corn456', createdAt: '2025-04-10' },
        { siteName: 'MySJSU', username: 'Emma', password: 'sjsu123', createdAt: '2025-04-09' },
        { siteName: 'League of Legends', username: 'Noah', password: 'lol123', createdAt: '2025-04-08' }
    ]);

    const sendAccountInfo = async () => {
        console.log(siteName, username, password, confirmPassword);
        try {
            const postData = {appName: siteName, "username": username, "password": password};
            const response = await fetch("http://localhost:8080/api/vaultentry", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });
            const jsonData = await response.json();
            console.log("The vaultentry creation worked: ", jsonData);
            accounts.push(postData);
        } catch (exception) {
            console.error("It didn't work: ", exception.message);
        }
      }
      
  const groupedAccounts = accounts.reduce((acc, account) => {
    if (!acc[account.siteName]) {
      acc[account.siteName] = [];
    }
    acc[account.siteName].push(account);
    return acc;
  }, {});

  const removeAccount = (siteName, username) => {
    const updatedAccounts = accounts.filter(
        (account) => !(account.siteName === siteName && account.username === username)
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
              fontFamily: 'Inria Serif, serif',
              fontStyle: 'italic',
          }}
      >
          Password Manager
      </h1>

      {/* Accounts grid */}
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
                          fontStyle: 'italic',
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
                              <strong>Created At:</strong> {user.createdAt}
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
                              onClick={() => removeAccount(siteName, user.username)}
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
                  fontFamily: 'Inria Serif, serif',
              }}
          >
              <h2>Add New Account</h2>
              <p>Please enter your new account here.</p>

              {/* Input fields */}
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

              {/* Save account button */}
              <Button idleText="Save Account" onClick={sendAccountInfo} />

              {/* Close button */}
              <button
                  style={{
                      marginTop: '20px',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'red',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '16px',
                  }}
                  onClick={() => setIsPopupOpen(false)} 
              >
                  Close
              </button>
          </div>
      </Popup>

      {/* Button to open the popup */}
      <Button idleText="Add New Account" onClick={() => setIsPopupOpen(true)} />
  </div>
  );
}