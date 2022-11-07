import { useState } from 'react';
import images from '../constants/images';
import { ThemeContext } from "../utils/theme/ThemeContext";

import { Link } from "react-router-dom";

const Header = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling }) => {

  return (
    <ThemeContext.Consumer>
      {({ isToggle, toggleTheme }) => (
        <header className='px-1 sm:px-4 lg:px-24 py-1 md:py-6 flex 
              items-center justify-between flex-wrap dark:bg-[#2B1867] text-gray-700 dark:text-gray-200 z-40'>

          <Link to="/">
            <div className='flex items-center gap-4 sm:gap-1 xs:gap-1 justify-center z-50'>
              <img src={images.Logo} alt="" className='w-12 sm:w-10 xs:w-8 mr-3 ' />
              <div>
                <h1 className='lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl sm:text-lg xs:text-xs md:text-2xl font-bold dark:text-white tracking-widest'>GSC</h1>
                <p className='text-xs md:text-sm text-gray-400'>International</p>
              </div>
            </div>
          </Link>

          <div className='hidden lg:block h-8 z-50'></div>

          {/* 🟨🟨🟨 UI For ==> Menu */}
          <nav className='hidden space-x-6 ml-auto lg:flex'>
            {/* <Link to="/home">Home</Link> */}
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Faq</Link>
            <Link to="/">Contacts</Link>
          </nav>

          {/* 🟨🟨🟨 UI For ==> Theme Toggling */}
          <div className='flex items-center gap-4 ml-auto mr-9 xs:mr-3'>
            
          </div>

          <Link to={"/home"} className="">Connect</Link>

        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header