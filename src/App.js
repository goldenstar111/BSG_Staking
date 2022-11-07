import { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, AuthContext } from './utils/theme/ThemeContext';


import "react-multi-carousel/lib/styles.css";
import "react-month-picker/css/month-picker.css";
import LandPages from './pages';
import './css/custom.css';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import CryptoTokenInfoPage from './pages/Dashboard/CryptoTokenInfoPage';
import ReceivePage from './pages/Dashboard/Receive';
import HomePage from './pages/Dashboard/HomePage';
import SendPage from './pages/Dashboard/SendPage';
import BuyLicensePage from './pages/Dashboard/BuyLicensePage';
import TradePage from './pages/Dashboard/TradePage';
import TransPage from './pages/Dashboard/TransPage';
import AccessHistoryPage from './pages/Dashboard/AccessHistoryPage';
import ContactsPage from './pages/Dashboard/ContactsPage';
import SettingPage from './pages/Dashboard/SettingPage';
import CreateToken from './pages/Dashboard/CreateTokenPage';
import ErrorPage from './pages/Error';
import StellerLedgerMarket from './pages/Dashboard/TradePage/extraTrade';

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
            <Route exact path="/crypto-token-info" element={<DashboardLayout>
              <CryptoTokenInfoPage></CryptoTokenInfoPage>
            </DashboardLayout>} />
            <Route exact path="/receive" element={<DashboardLayout>
              <ReceivePage></ReceivePage>
            </DashboardLayout>} />
            <Route exact path="/send" element={<DashboardLayout>
              <SendPage></SendPage>
            </DashboardLayout>} />
            <Route exact path="/buy-license" element={<DashboardLayout>
              <BuyLicensePage></BuyLicensePage>
            </DashboardLayout>} />
            <Route exact path="/trade" element={<DashboardLayout>
              <TradePage></TradePage>
            </DashboardLayout>} />
            <Route exact path="/transactions" element={<DashboardLayout>
              <TransPage></TransPage>
            </DashboardLayout>} />
            <Route exact path="/access-history" element={<DashboardLayout>
              <AccessHistoryPage></AccessHistoryPage>
            </DashboardLayout>} />
            <Route exact path="/contacts" element={<DashboardLayout>
              <ContactsPage></ContactsPage>
            </DashboardLayout>} />
            <Route exact path="/setting" element={<DashboardLayout>
              <SettingPage></SettingPage>
            </DashboardLayout>} />
            <Route exact path="/createToken" element={<DashboardLayout>
              <CreateToken></CreateToken>
            </DashboardLayout>} />
            <Route exact path="/market" element={<DashboardLayout>
              <StellerLedgerMarket></StellerLedgerMarket>
            </DashboardLayout>} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App