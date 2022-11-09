import React, { useState, useEffect } from 'react';
import images from '../constants/images';
import { ThemeContext } from "../utils/theme/ThemeContext";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import web3 from "../ethereum/web3";
import AppContract from "../abi/BSG.json";
import USDTContract from "../abi/USDT.json";
import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT } from "../config";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const DashboardHeader = ({ themeToggling, setThemeToggling, menuToggling, setMenuToggling, children }) => {
    const [instance, setInstance] = useState();
    const [instance_usdt, setInstance_usdt] = useState();
    const [isConnect, setConnect] = useState(false);

    const connect = () => {
    }

    const register = () => {

    }

    const beautify = (addr) => {
        return addr;
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

            setInstance(instance);
            setInstance_usdt(usdt);
        };
        // init();
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
                                !isConnect && <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => connect()}>Connect</button>
                            }
                            {/* {
                                isConnect && !isRegister &&
                                <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white' onClick={() => register()}>Register</button>
                            } */}
                            {/* {
                                isConnect && isRegister &&
                                <button className='border border-sky-400 bg-transparent rounded-md py-1 px-4 hover:bg-white'>Deposit</button>
                            } */}
                            {/* {
                                isConnect && <a href={'https://mumbai.polygonscan.com/address/' + walletAddress} target="_blank">{beautify(walletAddress)}</a>
                            } */}
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