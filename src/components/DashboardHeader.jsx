import React, { useState, useEffect } from 'react';
import images from '../constants/images';
import { ThemeContext } from "../utils/theme/ThemeContext";
import { Link } from "react-router-dom";
// import { useWeb3React } from "@web3-react/core";
import web3 from "../ethereum/web3";
import AppContract from "../abi/BSG.json";
import USDTContract from "../abi/USDT.json";

import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../config";
import {
    connectWallet,
    getCurrentWalletConnected,
} from "./interact";

const DashboardHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling, children }) => {
    const [instance, setInstance] = useState();
    const [instance_usdt, setInstance_usdt] = useState();
    const [isRegister, setRegister] = useState(false);
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    const connect = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    }

    const register = () => {
        setRegister(!isRegister);
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
        if (instance) {
            // getSupply();
        }
    }, [instance, instance_usdt]);

    useEffect(() => {
        const init = async () => {
            const instance = new web3.eth.Contract(
                // @ts-ignore
                AppContract.abi,
                CONTRACT_ADDRESS
            );
            const usdt = new web3.eth.Contract(
                // @ts-ignore
                USDTContract.abi,
                CONTRACT_ADDRESS_USDT
            );

            // instance.register("0x6E8903fAD5298aFA3E595702c616459A73Bc7e1C");

            setInstance(instance);
            setInstance_usdt(usdt);
        };
        const getExistingWallet = async () => {
            const { address, status } = await getCurrentWalletConnected();

            setWallet(address);
            setStatus(status);

            addWalletListener();
        }

        getExistingWallet();
        init();
    }, []);


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
                            {
                                walletAddress.length === 0 && <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => connect()}>Connect</button>
                            }
                            {
                                walletAddress.length > 0 && !isRegister &&
                                <>
                                    <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => register()}>Register</button>
                                    <input placeholder='Referral' type={"text"}
                                        className="py-1 rounded-md px-2 border"
                                        defaultValue={"0x6E8903fAD5298aFA3E595702c616459A73Bc7e1C"}>
                                    </input>
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
                    </div>

                    <div className='hidden lg:block h-8 z-50'></div>
                </header>
            )
            }
        </ThemeContext.Consumer >
    )
}

export default DashboardHeader