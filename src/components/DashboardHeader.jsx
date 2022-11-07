import { useState } from 'react';
import MenuBar from '../assets/MenuBar';
import images from '../constants/images';
import { ThemeContext } from "../utils/theme/ThemeContext";
import { Link } from "react-router-dom";
import NewPaymentModal from './modal/NewPaymentModal';
import ReceiveTokenModal from './modal/ReceiveTokenModal';
import RequestMoneyModal from './modal/RequestModal';

const DashboardHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling, children }) => {

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <header className='px-4 xs:px-3 lg:px-8 sm:py-2 xs:py-2 md:py-3  py-6 flex items-center justify-between flex-wrap dark:bg-bg-header-dark text-gray-700 dark:text-gray-200 z-40'>
                    <div className='flex flex-row'>
                        <div className='lg:invisible flex items-center gap-4 xs:gap-1 justify-center z-50'>
                            <img src={images.Logo} alt="" className='w-12 ' />
                            <div>
                                <h1 className='text-xl md:text-2xl font-bold dark:text-white tracking-widest'>GSC</h1>
                                <p className='text-xs md:text-sm text-gray-400'>Decentralized Payment Network</p>
                            </div>
                        </div>

                        <nav className='hidden space-x-6 lg:flex items-center pl-4'>
                            <Link to="/">Account 0x6E8903fAD5298aFA3E595702c616459A73Bc7e1C</Link>
                        </nav>
                    </div>

                    <div className='hidden lg:block h-8 z-50'></div>
                    <div className='flex'>
                        {/* 🟨🟨🟨 UI For ==> Theme Toggling */}
                        <div className='flex items-center gap-4 lg:mr-9 sm:mr-3 xs:mr-1 md:mr-9'>
                            <div className='bg-gray-300 rounded-2xl w-14 h-8 relative p-1 cursor-pointer dark:bg-[#4D398A]'
                                onClick={toggleTheme}>
                                <i className={`fas ${isToggle ? 'fa-sun right-1 rotate-[360deg] text-white bg-gray-400' : 'fa-moon bg-black text-white'} rounded-full px-1 text-base absolute transform ease-out duration-1000`}>
                                </i>
                            </div>

                            <div className='block lg:hidden dark:brightness-200 w-4 mr-1 z-50'
                                onClick={() => setMenuToggling(pre => !pre)}
                            >
                                {
                                    !menuToggling
                                        ? (isToggle
                                            ? <MenuBar color='#000' />
                                            : <MenuBar color='#fff' />)
                                        : <i className="fa-solid fa-xmark pl-1 text-2xl"></i>
                                }
                            </div>
                        </div>
                    </div>
                </header>
            )
            }
        </ThemeContext.Consumer >
    )
}

export default DashboardHeader