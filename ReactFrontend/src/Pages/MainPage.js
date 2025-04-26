import Button,{Button2} from "../Buttons/Buttons.js";
import { useState } from 'react';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false); 

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
                      <Button idleText="Login" />
                      <Button idleText="Forgot Password?" onClick={() => setIsPopupOpen(true)} />
                    </div>
                </div>
            </div>

            {/* Popup Window */}
            {isPopupOpen && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                    {/* Inside Popup Window*/}
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
                        textAlign: 'center'}}
                    >
                        {/* Close Button */}
                        < Button2
                            className="close-button"
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
                        </ Button2>

                        {/*Window name, row*/}
                        <h2>Forgot Password</h2>
                        <p>Answer this question to verify yourself mf</p>
                        <input
                            type="text"
                            placeholder="Your Security Question"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%'}}
                        />
                        <input
                            type="text"
                            placeholder="Your Answer"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%'}}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                width: '100%'}}
                        />
                        <div style={{ marginTop: '10px' }}>
                            < Button
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    backgroundColor: '#007BFF',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    marginRight: '10px'}}
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