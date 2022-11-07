// import Link from "./Link";
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from "../constants/images";
import './sidebar.scss';

const SidebarComponent = ({ MenuToggling, setMenuToggling }) => {
    const location = useLocation();
    const activedPage = location.pathname;

    return (
        <div id="sidebar">
            <div className="relative z-40 hidden  " role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                <div className="fixed inset-0  z-40 ">
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto dark:bg-bg-sidebar-dark dark: text-white">
                            <Link to="/">
                                <div className="flex items-center flex-shrink-0 px-8 space-x-4">
                                    <img className="h-12 w-auto" src={images.Logo} alt="logo" />
                                    <div>
                                        <h1 className='text-xl md:text-lg font-medium tracking-[.1em]'>GSC</h1>
                                        <p className='text-[0.6rem] md:text-[0.6rem] '>International</p>
                                    </div>
                                </div>
                            </Link>
                            <nav className="mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark dark:text-white">
                                {/* <Link info="/home" classset={"mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark dark: text-white"} url="home_icon_sidebar" value="Home" /> */}
                                <Link to="/home" className="text-gray-900 dark:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                    <div className={'home menu ' + (activedPage == "/home" ? 'active' : '')}>Dashboard</div>
                                </Link>
                                {/* <Link to="/receive" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5"> */}
                                <div className={'receive menu ' + (activedPage == "/receive" ? 'active' : '')}>Deposit</div>
                                {/* </Link> */}
                                {/* <Link to="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5"> */}
                                <div className={'send menu ' + (activedPage == "/send" ? 'active' : '')}>Withdraw</div>
                                {/* </Link> */}
                                <Link to="/growth" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                    <div className={'buy menu ' + (activedPage == "/growth" ? 'active' : '')}>Growth Account</div>
                                </Link>
                                <Link to="/access-history" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                    <div className={'access menu ' + (activedPage == "/access-history" ? 'active' : '')}>Deposit History</div>
                                </Link>
                                <Link to="/contacts" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                    <div className={'contacts menu ' + (activedPage == "/contacts" ? 'active' : '')}>My team</div>
                                </Link>
                                <Link to="/setting" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                    <div className={'setting menu ' + (activedPage == "/setting" ? 'active' : '')}>White Paper</div>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14">
                    </div>
                </div>
            </div>
            {
                MenuToggling ? (
                    <div className={`w-[290px] fixed lg:flex lg:w-[290px] lg:flex-col lg:fixed sm:inset-y-0 lg:inset-y-0 md:inset-y-0 z-30 `}>
                        <div className="flex-1 flex flex-col min-h-0 bg-white justify-between h-full">
                            <div className="flex-1 flex flex-col pt-6 pb-4  dark:bg-bg-sidebar-dark dark: text-white">
                                <Link to="/">
                                    <div className="flex items-center flex-shrink-0 px-8 space-x-4 text-black dark:text-white">
                                        <img className="h-12 w-auto" src={images.Logo} alt="logo" />
                                        <div>
                                            <h1 className='text-xl md:text-xl font-medium tracking-[.1em]'>GSC</h1>
                                            <p className='text-[0.6rem] md:text-[0.6rem] '>International</p>
                                        </div>
                                    </div>
                                </Link>
                                <nav className="mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark text-white font-light">
                                    <Link to="/home" onClick={() => { setMenuToggling(pre => !pre) }} className="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'home menu ' + (activedPage == "/home" ? 'active' : '')}>Dashboard</div>
                                    </Link>
                                    {/* <Link onClick={()=>{setMenuToggling(pre=>!pre)}} to="/receive" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5"> */}
                                    <div className='text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5'>
                                        <div className={'receive menu ' + (activedPage == "/receive" ? 'active' : '')}>Deposit</div>
                                    </div>
                                    {/* </Link> */}
                                    <Link onClick={() => { setMenuToggling(pre => !pre) }} to="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'send menu ' + (activedPage == "/send" ? 'active' : '')}>Withdraw</div>
                                    </Link>
                                    <Link onClick={() => { setMenuToggling(pre => !pre) }} to="/growth" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'buy menu ' + (activedPage == "/growth" ? 'active' : '')}>Growth Account</div>
                                    </Link>
                                    <Link onClick={() => { setMenuToggling(pre => !pre) }} to="/access-history" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'access menu ' + (activedPage == "/access-history" ? 'active' : '')}>Deposit History</div>
                                    </Link>
                                    <Link onClick={() => { setMenuToggling(pre => !pre) }} to="/contacts" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'contacts menu ' + (activedPage == "/contacts" ? 'active' : '')}>My team</div>
                                    </Link>
                                    <Link onClick={() => { setMenuToggling(pre => !pre) }} to="/setting" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'setting menu ' + (activedPage == "/setting" ? 'active' : '')}>White Paper</div>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`hidden lg:flex lg:w-[290px] lg:flex-col lg:fixed lg:inset-y-0 sm:inset-y-0 md:inset-y-0 xs:inset-y-0  z-30 `}>
                        <div className="flex-1 flex flex-col min-h-0 bg-white">
                            <div className="flex-1 flex flex-col pt-6 pb-4  dark:bg-bg-sidebar-dark dark: text-white">
                                <Link to="/">
                                    <div className="flex items-center flex-shrink-0 px-8 space-x-4 text-black dark:text-white">
                                        <img className="h-12 w-auto" src={images.Logo} alt="logo" />
                                        <div>
                                            <h1 className='text-xl md:text-xl font-medium tracking-[.1em]'>GSC</h1>
                                            <p className='text-[0.6rem] md:text-[0.6rem] dark:text-gray-400'>International</p>
                                        </div>
                                    </div>
                                </Link>
                                <nav className="mt-5 flex-1 px-2 bg-white space-y-1 dark:bg-bg-sidebar-dark text-white font-light">
                                    <Link to="/home" className="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'home menu ' + (activedPage == "/home" ? 'active' : '')}>Dashboard</div>
                                    </Link>
                                    <Link to="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'receive menu ' + (activedPage == "/receive" ? 'active' : '')}>Deposit</div>
                                    </Link>
                                    <Link to="#" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'send menu ' + (activedPage == "/send" ? 'active' : '')}>Withdraw</div>
                                    </Link>
                                    <Link to="/growth" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'buy menu ' + (activedPage == "/growth" ? 'active' : '')}>Growth Account</div>
                                    </Link>
                                    <Link to="/access-history" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'access menu ' + (activedPage == "/access-history" ? 'active' : '')}>Deposit History</div>
                                    </Link>
                                    <Link to="/contacts" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'contacts menu ' + (activedPage == "/contacts" ? 'active' : '')}>My team</div>
                                    </Link>
                                    <Link to="/setting" className="text-gray-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md pl-5">
                                        <div className={'setting menu ' + (activedPage == "/setting" ? 'active' : '')}>White Paper</div>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SidebarComponent;