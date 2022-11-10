import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { DashboardImageWith } from "../../components";
import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../../config";
import {
    connectWallet,
    getCurrentWalletConnected,
    getUSDTBalance,
    handleWalletBalance,
    getReferral,
    getUserInfo,
    getRewardInfo,
    getCurDay
} from "../../components/interact";

const HomePage = () => {
    const [bal_usdt, setBal_usdt] = useState(0);
    const [bal_matic, setBal_matic] = useState(0);
    const [referral, setReferral] = useState("");
    const [walletAddress, setWallet] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [rewardInfo, setRewardInfo] = useState(null);
    const [curday, setCurday] = useState(1);

    useEffect(() => {
        const getExistingWallet = async () => {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
        }
        getExistingWallet();
    }, []);

    useEffect(() => {
        updateInfor()
    }, [walletAddress])

    const updateInfor = async () => {
        if (walletAddress.length > 0) {
            let _matic = await handleWalletBalance();
            setBal_matic(_matic);
            let _usdt = await getUSDTBalance()
            setBal_usdt(_usdt);
            let _referral = await getReferral();
            setReferral(_referral);
            let _userInfo = await getUserInfo(walletAddress);
            setUserInfo(_userInfo);
            let _reward = await getRewardInfo(walletAddress);
            setRewardInfo(_reward);
            let _curday = await getCurDay();
            setCurday(_curday + 1);
        } else {
            setBal_matic(0);
            setBal_usdt(0);
            setReferral("");
            setUserInfo(null);
            setRewardInfo(null);
            setCurday(1);
        }
    }

    const beautify = (addr) => {
        var value, length;
        length = addr.length;
        value = addr.slice(0, 5) + '...' + addr.slice(length - 3, length);
        return value;
    }
    
    const getMembership = (member) => {
        if(member == 0){
            return "Normal"
        }else if(member == 1){
            return "Booster"
        }else if(member == 2){
            return "Diamond"
        }else if(member == 3){
            return "Blue Diamond"
        }else if(member == 4){
            return "Crown Diamond"
        }
    }

    return (
        <main className="gap-5 bg-white dark:bg-[#1C203B] p-3" id="home-page">
            <div className="mt-3 mb-3">
                <DashboardImageWith />
            </div>
            <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4'>
                <a href={'https://mumbai.polygonscan.com/address/' + CONTRACT_ADDRESS}
                    target={"_blank"}
                    className="text-sky-400 py-1"
                >
                    <i className="fa-solid fa-location-dot"></i>
                    <span className='px-2'>Contract address: {beautify(CONTRACT_ADDRESS)}</span>
                </a>
                <p className='py-1'>
                    <i className="fa-sharp fa-solid fa-clock"></i>
                    <span className='px-2'>Platform Running time: {curday} Days</span>
                </p>
                <p className='py-1'>
                    <i className="fa-solid fa-recycle"></i>
                    <span className='px-2'>Income: more than 15 Day Per Cycle. 15%</span>
                </p>
                <p className='py-1'>
                    <i className="fa-solid fa-stopwatch"></i>
                    <span className='px-2'>Deposit time: ...</span>
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-2 mb-4'>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Total Revenue</span>
                        <span>$ {userInfo?.totalRevenue / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-green-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-users text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Team</span>
                        <span>{userInfo?.teamNum || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-fuchsia-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-medal text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Total Deposit</span>
                        <span>$ {userInfo?.totalDeposit / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-cloud text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Last Deposit Amount</span>
                        <span>$ {userInfo?.maxDeposit / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-nurse text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Membership</span>
                        <span>{getMembership(userInfo?.membership || 0)}</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-doctor text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Current Cycle Number</span>
                        <span>{rewardInfo?.cycleNumber - 1}</span>
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 py-2 mb-4'>
                <Link to={'/deposit'} className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-filter-circle-dollar text-4xl"></i>
                    <p className='px-4'>Deposit</p>
                </Link>
                <Link to={'/withdraw'} className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i className="fa-sharp fa-solid fa-hand-holding-dollar text-4xl"></i>
                    <p className='px-4'>Withdraw</p>
                </Link>
                <Link to={'/growth'} className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-dollar-sign text-4xl"></i>
                    <p className='px-4'>Growth Account</p>
                </Link>
            </div>
            <div className='p-2 bg-gray-100 dark:bg-gray-700 mb-4'>
                <p>My Rank</p>
                <p>ID Status</p>
                <p>Income : ... USDT</p>
                <p>Matic Balance : {parseFloat(bal_matic).toFixed(4)} Matic</p>
                <p className=''>USDT Balance: {bal_usdt} USDT</p>
                <p>Referral : {referral}</p>
                <p>My address : {walletAddress}</p>
            </div>
            {/* <div className='p-2 bg-gray-100 dark:bg-gray-700 mb-4'>
                <p>Lastest Transactions</p>
            </div> */}

            <div className='border-t border-sky-400 p-2 mb-4'>
                <p className='text-sky-400'>
                    <i className="fa-solid fa-stopwatch"></i>
                    Manager Reward Time Remaining
                </p>
                <p>Hours Minutes Seconds</p>
                <p>00: 00: 00</p>
            </div>

            {/* <div className='border-t border-pink-400 p-2 mb-4'>
                <p className='text-sky-400'>
                    <i className="fa-solid fa-stopwatch"></i>
                    Global Co-Ordinator Pool Reward Time Remaning
                </p>
                <p>Hours Minutes Seconds</p>
                <p>00: 00: 00</p>
            </div> */}
        </main>
    )
}

export default HomePage;