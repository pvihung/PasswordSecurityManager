import './App.css';
import Button from './Buttons/Buttons.js';
import ErrorPage from './Pages/Error404.js';
import MainPage from './Pages/MainPage.js';
import DashboardPage from './Pages/DashboardPage.js'; // ✅ fixed

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
