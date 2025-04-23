import React, { useState } from 'react';
import Button from '../Buttons/Buttons';
import Popup from 'reactjs-popup';

export default function SecondPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [siteName, setSiteName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const accounts = [
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
    { siteName: 'League of Legends', username: 'Noah', password: 'lol123', createdAt: '2025-04-08' },
  ];

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
        }}
      >
        Password Manager
      </h1>
      {/*Making it suitable for all screen*/}
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
              minWidth: '300px',
            }}
          >
            {/*Display siteName*/}
            <h2
              style={{
                borderBottom: '2.2px solid #eaeaea', // Add a line below the title ~ just make it look cooler lmao
                paddingBottom: '5px',
                marginBottom: '10px',
                color: '#555',
                fontSize: '1.8em',
                fontFamily: 'Inria Serif, serif',
                fontStyle: 'italic',
                fontWeight: 'bold',
                textAlign: 'left',
                textSizeAdjust: 'auto',
              }}
            >
                {/* Dislay variables inside Site*/}
              {siteName}
            </h2>
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
                }}
              > 
                {/* Display username with asterisks */}
                <p style={{ margin: '0 0 5px', color: '#666' }}>
                  <strong>Username:</strong> {user.username}
                </p>
                {/* Display password with asterisks */}
                <p style={{ margin: '0 0 5px', color: '#666' }}>
                  <strong>Password:</strong> {user.password}
                </p> 
                {/* Display creation date */}
                <p style={{ margin:'0 0 5px', color: '#666' }}>
                  <strong>Created At:</strong> {user.createdAt}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Button with Popup */}
      <Popup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)} // Close the popup
        modal
        overlayStyle={{
            background: 'rgba(0, 0, 0, 0.5)', // Dark overlay
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

        {/* Popup Content */}
        <div style={{ padding: '20px',
             textAlign: 'center',
             fontFamily: 'Inria Serif, serif'}}>
          <h2>Add New Account</h2>
          <p>Please enter your new account here.</p>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Site Name"
            className="text-center"
            style={{
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
            }}
            onChange={(event) => setSiteName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="text-center"
            style={{
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
            }}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="text-center"
            style={{
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
            }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-center"
            style={{
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
            }}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Button idleText="Save Account" />
        </div>
      </Popup>

      {/* Trigger Button */}
      <Button
        idleText="Add New Account"
        onClick={() => setIsPopupOpen(true)} // Open the popup
      />
    </div>
  );
}