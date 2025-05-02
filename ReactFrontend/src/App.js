import './App.css';
import ErrorPage from './Pages/Error404.js';
import MainPage from './Pages/MainPage.js';
import Login from './Pages/Login.js';
import {Route, Routes} from 'react-router-dom';
import SecondPage from './Pages/SecondPage.js';
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
            </Routes>
        </div>
    </>
  );
}

export default App;
