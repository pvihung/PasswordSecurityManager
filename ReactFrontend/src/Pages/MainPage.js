import Button from "../Buttons/Buttons.js";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
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
            const userID = await response.text();

            console.log(response.type);
            console.log(response.ok);
            console.log(response.status);
            if (response.ok) {
                navigate('/manager', {state: {data: userID}});
            } else {
                console.error(userID);
            }
        } catch (error) {
            console.error("Something went wrong here: ", error);
        }
    };

    return (
        <>
            <div className="AddingAccount">
                <h1 className='Title'
                    style={{
                        textAlign: 'center',
                        height: '30px',
                        fontFamily: 'Myriad Pro',
                        fontWeight: 'bold',
                        fontSize: '40px'}}
                >
                PASSWORD MANAGER
                </h1>
                <div style={{
                    backgroundColor: '#f9f9f9',
                    padding: '50px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    maxWidth: '5000px',
                    margin: '0 auto',
                    fontFamily: 'Georgia'}}
                >
                    <h2 className="Heading" style={{ textAlign: 'center'}}>
                        Enter your Username and Password
                    </h2>

                    <input
                      type="text"
                      placeholder="Your Username"
                      className="text-center"
                      style={{ padding: '10px', margin: '10px 0', borderRadius: '8px',
                          border: '1px solid #ccc', width: '100%' }}
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />

                    <input
                      type="password"
                      placeholder="Your Password"
                      className="text-center"
                      style={{ padding: '10px', margin: '10px 0', borderRadius: '8px',
                          border: '1px solid #ccc', width: '100%' }}
                      onChange={(event) => setPassword(event.target.value)}
                    />

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '20px'}}
                    >
                      <Button idleText="Login" onClick={verifyUser}/>
                      <Button idleText="Forgot Password?" />
                      <Button idleText="Create New Account" />
                    </div>
                </div>
            </div>
        </>
    );
}