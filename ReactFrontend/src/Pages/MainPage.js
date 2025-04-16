import Button from "../Buttons/Buttons.js";
import { useState } from 'react';

export default function MainPage() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
    <>
        <div className="App">
              <h1 className="text-center">Hello bootybutthead!</h1>
              <p>Aint noway I working on frontend right now :sob:.</p>

              <div className="AddingAccount">
                <h2 className="Text">Welcome</h2>

                <input
                  type="text"
                  placeholder="Your Username"
                  className="text-center"
                  onChange={(event) => setUsername(event.target.value)}
                />

                <input
                  type="password"
                  placeholder="Your Password"
                  className="text-center"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button>Add Account</button>
                <button>Forget Password?</button>
              </div>
            </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', flexDirection: 'column', gap: '25px'}}>
            <Button
                idleText="Press me to be cool!"
            />
            <Button
                idleText="Second Page!"
            />
            <Button
                idleText="Third Option!"
            />
        </div>
    </>
    );
}