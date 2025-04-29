import './App.css';
import Button from './Buttons/Buttons.js';
import ErrorPage from './Pages/Error404.js';
import MainPage from './Pages/MainPage.js';
import MenuPage from './Pages/MenuPage.js';
import Login from './Pages/Login.js';
import {Route, Routes} from 'react-router-dom';
import SecondPage from './Pages/SecondPage.js';
import Popup from 'reactjs-popup';
function App() {
  return (
    <>
        <div>
            <Routes>
                {/* Route for MainPage */}
                <Route path='' element={<MainPage />} />

                {/* Route for SecondPage */}
                <Route path='/manager' element={<SecondPage />} />

                {/* Route for Login */}
                <Route path='/login' element={< Login />} />

                {/* Catch-all route for ErrorPage */}
                <Route path='*' element={<ErrorPage />} />
                <Route path='/menu' element={<MenuPage />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
