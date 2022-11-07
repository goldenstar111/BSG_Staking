import { useState } from 'react';
import MenuBar from '../../../../assets/MenuBar';

import images from '../../../../constants/images';
import { AuthContext, ThemeContext } from "../../../../utils/theme/ThemeContext";

import { Link } from "react-router-dom";

const NFTHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling }) => {

  return (
    <ThemeContext.Consumer>
      {({ isToggle, toggleTheme }) => (
        <AuthContext.Consumer>
          {({ isAuthStatus, setLogin, setLouout }) => (
            <header className='px-1 sm:px-4 lg:px-24 py-1 md:py-6 flex 
            items-center justify-between flex-wrap dark:bg-[#200A4C] text-gray-700 dark:text-gray-200 z-40'>

              {!isAuthStatus ? (
                <Link to="/">
                  <div className='flex items-center gap-4 sm:gap-1 xs:gap-1 justify-center z-50'>
                    <img src={images.Logo} alt="" className='w-12 sm:w-10 xs:w-8 mr-3 ' />
                    <div>
                      <h1 className='lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl sm:text-lg xs:text-xs md:text-2xl font-bold dark:text-white tracking-widest'>SLIDEGER</h1>
                      <p className='text-xs md:text-sm text-gray-400'>Decentralized Payment Network</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <></>
              )}

              <div className='hidden lg:block h-8 z-50'></div>

              {/* 🟨🟨🟨 UI For ==> Menu */}
              {!isAuthStatus ? (
                <nav className='hidden lg:space-x-2 xl:space-x-6 ml-auto lg:flex'>
                  {/* <Link to="/home">Home</Link> */}
                  <Link to="/trade">Exchange</Link>
                  <Link to="/market">Market</Link>
                  <Link to="/nft">NFT</Link>
                  <Link to="/#">Downloads</Link>
                </nav>
              ) : (
                <></>
              )}

              {/* 🟨🟨🟨 UI For ==> Theme Toggling */}
              <div className='flex items-center gap-4 ml-auto mr-9 xs:mr-3'>
                <div className='bg-gray-300 rounded-2xl w-14 h-8 relative p-1 cursor-pointer dark:bg-[#4D398A]'
                  onClick={toggleTheme}>
                  <i className={`fas ${isToggle ? 'fa-sun right-1 rotate-[360deg] text-white bg-gray-400' : 'fa-moon bg-black text-white'} rounded-full px-1 text-base absolute transform ease-out duration-1000`}>
                  </i>
                </div>

                <div className='block lg:hidden dark:brightness-200 w-4 xl:mr-1 lg:mr-1 md:mr-1 sm:mr-0 xs:mr-0 z-50'
                  onClick={() => setMenuToggling(pre => !pre)}
                >
                  {
                    !menuToggling
                      ? !isToggle
                        ? <MenuBar color='#fff' />
                        : <MenuBar color='#000' />
                      : <i className="fa-solid fa-xmark pl-1 text-2xl"></i>
                  }
                </div>

                <div className='hidden lg:block border-[5px] border-gray-200 dark:border-[#4B3982] rounded-full'>
                  <img src={images.USA_Logo} alt="" className='w-8 ' />
                </div>
              </div>

              <div className='hidden lg:block border-r border-gray-500 h-8 z-50'></div>

              {
                !isAuthStatus ? (
                  <div className='hidden lg:flex items-center gap-4 cursor-pointer ml-9 mr-0'>
                    <i className='fas fa-user-alt'></i>
                    <Link to={"/auth/login"}><button onClick={setLogin}>Login</button></Link>
                    <span>/</span>
                    <Link to={"/auth/register"}>Signup</Link>
                  </div>
                ) : (
                  <div className='hidden lg:flex items-center gap-4 cursor-pointer ml-9 mr-0'>
                    <img src={images.LoginedAvatar} alt="Avatar" className='inline-block h-12 w-12 rounded-full' />
                    <span>Khalid Saied</span>
                  </div>
                )
              }

              {
                menuToggling &&
                <nav className='bg-gray-300 dark:bg-black dark:text-white fixed top-0 left-0 bottom-0 flex flex-col gap-4  p-4 z-50 duration-200 ease-in xs:w-4/5 sm:w-4/5 md:w-4/5 lg:hidden xl:hidden' >
                  {/* Account Section */}
                  <div className='dark:text-white mt-12 flex p-2 pb-4 border-b justify-between'>
                    <div className='flex items-center gap-4'>
                      <img src={images.LoginedAvatar} alt="" className='rounded-full w-12 h-12' />
                      <h3 className='sm:text-sm xs:text-sm md:text-md lg:text-md font-bold'>Khalid Saied</h3>
                    </div>
                    <div className='flex items-center'>
                      <i className='fas fa-angle-down dark:text-white'></i>
                    </div>
                  </div>
                  {/* Menu Section */}
                  <div className='mt-3 p-2 flex flex-col gap-4 '>
                    {/* <Link to="/home"  onClick={() => setMenuToggling(false)} className="text-2xl" >Home</Link> */}
                    <Link to="/trade" onClick={() => setMenuToggling(false)} className="text-2xl">Exchange</Link>
                    <Link to="/market" onClick={() => setMenuToggling(false)} className="text-2xl">Market</Link>
                    <Link to="/nft" onClick={() => setMenuToggling(false)} className="text-2xl">NFT</Link>
                    <Link to="/#" onClick={() => setMenuToggling(false)} className="text-2xl">Downloads</Link>
                  </div>
                  {/* Theme Section */}
                  <div className='flex pb-3 border-b border-gray-500 justify-between'>
                    <h3>Theme</h3>
                    <div>
                      <div className='bg-white rounded-2xl w-14 h-8 relative p-1 cursor-pointer dark:bg-[#4D398A]'
                        onClick={toggleTheme}>
                        <i className={`fas ${isToggle ? 'fa-sun right-1 rotate-[360deg] text-white bg-gray-400' : 'fa-moon bg-black text-white'} rounded-full px-1 text-base absolute transform ease-out duration-1000`}>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Language Section */}
                  <div className='flex justify-between p-2'>
                    <div className='flex items-center gap-4'>
                      <div className='lg:block  rounded-full'>
                        <img src={images.USA_Logo} alt="" className='w-8 ' />
                      </div>
                      <h3 className='min-w-[50px]'>English | US</h3>
                    </div>
                    <div className='flex items-center'>
                      <i className='fas fa-angle-down dark:text-white'></i>
                    </div>
                  </div>
                </nav>
              }
            </header>
          )}
        </AuthContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

export default NFTHeader