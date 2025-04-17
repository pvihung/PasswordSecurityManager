import Button from "../Buttons/Buttons.js";
import { useState } from 'react';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
    <>
        <div className="AddingAccount">
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h2 className="Heading" style={{ textAlign: 'center' }}>Enter your Username and Password</h2>

            <input
              type="text"
              placeholder="Your Username"
              className="text-center"
              style={{ padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}
              onChange={(event) => setUsername(event.target.value)}
            />

            <input
              type="password"
              placeholder="Your Password"
              className="text-center"
              style={{ padding: '10px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px'
            }}>
              <Button idleText="Login" />
              <Button idleText="Forgot Password?" />
            </div>
          </div>
        </div>

    </>
    );
}