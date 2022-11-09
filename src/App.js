import { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, AuthContext } from './utils/theme/ThemeContext';

import "react-multi-carousel/lib/styles.css";
import "react-month-picker/css/month-picker.css";
import LandPages from './pages';
import './css/custom.css';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import HomePage from './pages/HomePage';
import Growth from './pages/Growth';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import History from './pages/History';
import Team from './pages/Team';
import ErrorPage from './pages/Error';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [hambugerMenu, setHambugerMenu] = useState(false);
  const [isAuth, setAuth] = useState(false);
  //nftExplore page price hook

  const getLibrary = (provider) => {
    console.log(provider, "Provider");
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  }

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
        <Web3ReactProvider getLibrary={getLibrary}>
          <BrowserRouter>
            <Routes>
              <Route index element={<LandPages />} />
              <Route exact path="/error" element={<ErrorPage />} />
              <Route exact path="/home" element={<DashboardLayout>
                <HomePage></HomePage>
              </DashboardLayout>} />
              <Route exact path="/deposit" element={<DashboardLayout>
                <Deposit></Deposit>
              </DashboardLayout>} />
              <Route exact path="/withdraw" element={<DashboardLayout>
                <Withdraw></Withdraw>
              </DashboardLayout>} />
              <Route exact path="/growth" element={<DashboardLayout>
                <Growth></Growth>
              </DashboardLayout>} />
              <Route exact path="/history" element={<DashboardLayout>
                <History></History>
              </DashboardLayout>} />
              <Route exact path="/team" element={<DashboardLayout>
                <Team></Team>
              </DashboardLayout>} />
              <Route exact path="/*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </Web3ReactProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App