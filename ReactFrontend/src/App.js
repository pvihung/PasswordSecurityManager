import './App.css';
import Button from './Buttons/Buttons.js';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
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

      <ul>
        <li>Test1</li>
        <li>Test2</li>
      </ul>

      <Button />
    </div>
  );
}

export default App;
