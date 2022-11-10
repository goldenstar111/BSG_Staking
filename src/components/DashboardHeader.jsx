import React, { useState, useEffect } from 'react';
import images from '../constants/images';
import { ThemeContext } from "../utils/theme/ThemeContext";
import { Link } from "react-router-dom";
import { DEFAULT_REFERRAL } from "../config";
import {
    connectWallet,
    getCurrentWalletConnected,
    _register,
    getRegistered,
} from "./interact";

const DashboardHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling, children }) => {
    const [isRegister, setRegister] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [referral, setReferral] = useState(DEFAULT_REFERRAL);

    const connect = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    }

    const register = async () => {
        let _status = await _register(referral);
        setRegister(_status);
    }

    const beautify = (addr) => {
        var value, length;
        length = addr.length;
        value = addr.slice(0, 5) + '...' + addr.slice(length - 3, length);
        return value;
    }

    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    // setStatus("Fill in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }

    useEffect(() => {
        const getExistingWallet = async () => {
            const { address, status } = await getCurrentWalletConnected();

            setWallet(address);
            setStatus(status);

            addWalletListener();
        }

        getExistingWallet();
    }, []);

    useEffect(() => {
        const checkRegistered = async () => {
            let status = false, _usdt = 0;
            if (walletAddress.length > 0) {
                status = await getRegistered(walletAddress);
            }
            setRegister(status);
        }

        checkRegistered();
    }, [walletAddress]);

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <header className='px-4 xs:px-3 lg:px-8 sm:py-2 xs:py-2 md:py-3  py-6 flex items-center justify-between flex-wrap dark:bg-bg-header-dark text-gray-700 dark:text-gray-200 z-40'>
                    <div className='flex flex-row justify-between w-full lg:justify-start'>
                        <Link to={'/'} className='lg:invisible flex items-center gap-4 xs:gap-1 justify-center z-50'>
                            <img src={images.Logo} alt="" className='w-12 ' />
                            <div>
                                <h1 className='text-xl md:text-2xl font-bold dark:text-white tracking-widest'>GSC</h1>
                                <p className='text-xs md:text-sm text-gray-400'>Decentralized Payment Network</p>
                            </div>
                        </Link>

                        <nav className='space-x-6 flex items-center pl-4'>
                            {
                                walletAddress.length === 0 && <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => connect()}>Connect</button>
                            }
                            {
                                walletAddress.length > 0 && !isRegister &&
                                <>
                                    <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => register()}>Register</button>
                                    <input placeholder='Referral' type={"text"}
                                        className="py-1 rounded-md px-2 border"
                                        defaultValue={referral}
                                        onChange={(e) => setReferral(e.target.value)}
                                    />
                                </>
                            }
                            {
                                walletAddress.length > 0 && isRegister &&
                                <Link to="/deposit" className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white'>Deposit</Link>
                            }
                            {
                                walletAddress.length > 0 && <a href={'https://mumbai.polygonscan.com/address/' + walletAddress} target="_blank">{beautify(walletAddress)}</a>
                            }
                        </nav>
                        <button onClick={() => setMenuToggling(!menuToggling)} className='border border-sky-400 bg-transparent rounded-full p-3 hover:bg-white mr-4 lg:hidden'>
                            <i className="fa-solid fa-list text-sky-400"></i>
                        </button>
                    </div>

                    <div className='hidden lg:block h-8 z-50'></div>
                </header>
            )
            }
        </ThemeContext.Consumer >
    )
}

export default DashboardHeader