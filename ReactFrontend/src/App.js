import './App.css';
import Button from './Buttons/Buttons.js';
import ErrorPage from './Pages/Error404.js';
import MainPage from './Pages/MainPage.js';
import MenuPage from './Pages/MenuPage.js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/menu' element={<MenuPage />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
