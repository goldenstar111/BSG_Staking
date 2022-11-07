import { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, AuthContext } from './utils/theme/ThemeContext';


import "react-multi-carousel/lib/styles.css";
import "react-month-picker/css/month-picker.css";
import LandPages from './pages';
import './css/custom.css';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import HomePage from './pages/Dashboard/HomePage';
import Growth from './pages/Dashboard/Growth';
import ErrorPage from './pages/Error';

const App = () => {
  const [theme, setTheme] = useState(true);
  const [hambugerMenu, setHambugerMenu] = useState(false);
  const [isAuth, setAuth] = useState(false);
  //nftExplore page price hook

  useEffect(() =>
    !theme
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark'),
    [theme]
  )

  const themeParam = {
    toggleTheme: () => setTheme(!theme),
    isToggle: theme,
    toggleHambugerMenu: () => setHambugerMenu(!hambugerMenu),
    isToggleMenu: hambugerMenu
  }

  const authParam = {
    setLogin: () => setAuth(true),
    setLouout: () => setAuth(false),
    isAuthStatus: isAuth
  }

  return (
    <ThemeContext.Provider value={themeParam}>
      <AuthContext.Provider value={authParam}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandPages />} />
            <Route exact path="/error" element={<ErrorPage />} />
            <Route exact path="/home" element={<DashboardLayout>
              <HomePage></HomePage>
            </DashboardLayout>} />
            <Route exact path="/growth" element={<DashboardLayout>
              <Growth></Growth>
            </DashboardLayout>} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App