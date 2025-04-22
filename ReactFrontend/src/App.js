import './App.css';
import Button from './Buttons/Buttons.js';
import ErrorPage from './Pages/Error404.js';
import MainPage from './Pages/MainPage.js';
import SecondPage from './Pages/SecondPage.js'; 
import { Route, Routes } from 'react-router-dom';
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
                
                {/* Catch-all route for ErrorPage */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>

            
        </div>
    </>
  );
}

export default App;