import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { DashboardImageWith } from "../../components";
import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../../config";
import {
    connectWallet,
    getCurrentWalletConnected,
    getIncomePoolforDiamond,
    getIncomePoolforBooster,
    getActiveDirectNumbers,
    checkDiamondMembership,
    handleWalletBalance,
    getIncomePoolfor1k,
    getUSDTBalance,
    getFinalOrder,
    getRewardInfo,
    getUserInfo,
    getReferral,
    getCurDay,
    getMember,
} from "../../components/interact";

const HomePage = () => {
    const [bal_usdt, setBal_usdt] = useState(0);
    const [bal_matic, setBal_matic] = useState(0);
    const [referral, setReferral] = useState("");
    const [walletAddress, setWallet] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [rewardInfo, setRewardInfo] = useState(null);
    const [curday, setCurday] = useState(1);
    const [finalOrder, setFinalOrder] = useState(null);
    const [remaining, setRemaining] = useState(0);
    const [income4diamond, setIncome4diamond] = useState(0);
    const [income41k, setIncome41k] = useState(0);
    const [income4booster, setIncome4booster] = useState(0);
    const [membership, setMembership] = useState(0);
    const [activeDirectNum, setActiveDirectNum] = useState(0);

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
            let _finalOrder = await getFinalOrder(walletAddress);
            setFinalOrder(_finalOrder);
            let _4diamond  =await getIncomePoolforDiamond();
            setIncome4diamond(_4diamond);
            let _41k  =await getIncomePoolfor1k();
            setIncome41k(_41k);
            let _4booster  =await getIncomePoolforBooster();
            setIncome4booster(_4booster);
            let _membership = await getMember(walletAddress);
            let _diamondmembership = await checkDiamondMembership(walletAddress);
            setMembership(_diamondmembership > 1 ? _diamondmembership : _membership);
            let _directNum = await getActiveDirectNumbers(walletAddress);
            setActiveDirectNum(_directNum);
            let _curday = await getCurDay();
            setCurday(_curday + 1);
            
            let _now = new Date();
            let _end = _finalOrder ? _finalOrder.unfreeze : 0;
            if (_end > 0) {
                _now = parseInt(_now / 1e3);
                _end = parseInt(_end);
                if (_now < _end) {
                    setRemaining(_end - _now);
                }
            }
        } else {
            setBal_matic(0);
            setBal_usdt(0);
            setReferral("");
            setUserInfo(null);
            setRewardInfo(null);
            setFinalOrder(null);
            setCurday(1);
            setIncome4diamond(0);
            setIncome41k(0);
            setIncome4diamond(0);
            setMembership(0);
            setActiveDirectNum(0);
        }
    }

    const beautify = (addr) => {
        var value, length;
        length = addr.length;
        value = addr.slice(0, 5) + '...' + addr.slice(length - 3, length);
        return value;
    }

    const getMembership = (_membership) => {
        if (_membership == 0) {
            return "Normal"
        } else if (_membership == 1) {
            return "Booster"
        } else if (_membership == 2) {
            return "Diamond"
        } else if (_membership == 3) {
            return "Blue Diamond"
        } else if (_membership == 4) {
            return "Crown Diamond"
        }
    }

    const calDate = (_date) => {
        let b = new Date((_date) * 1000);
        return b.toLocaleString();
    }

    const calCycleStatus = (_date) => {
        let _now = new Date;
        let _enddate = new Date((_date) * 1000);
        if (_now < _enddate) {
            return _enddate.toLocaleString() + " Available";
        } else {
            return "Cycle Completed"
        }
    }

    const beautifyTime = (_date) => {
        let day, hour, min, sec;
        day = parseInt((_date) / (60 * 60 * 24));
        hour = parseInt((_date % (60 * 60 * 24)) / (60 * 60));
        min = parseInt((_date % (60 * 60)) / 60);
        sec = _date % 60;
        return `${day} : ${hour} : ${min} : ${sec}`
    }

    setTimeout(() => {
        if (remaining > 0) {
            setRemaining(remaining - 1);
        }
    }, 1000)

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
                    <span className='px-2'>Platform Running time: {curday || 0} Days</span>
                </p>
                <p className='py-1'>
                    <i className="fa-solid fa-recycle"></i>
                    <span className='px-2'>Income: more than 15 Day Per Cycle. 15%</span>
                </p>
                <p className='py-1'>
                    <i className="fa-solid fa-stopwatch"></i>
                    <span className='px-2'>Deposit time: {finalOrder?.start > 0 ? calDate(finalOrder?.start) : "..."}</span>
                </p>
                <p className='py-1'>
                    <i className="fa-solid fa-stopwatch"></i>
                    <span className='px-2'>Cycle Status: {remaining ? "Active" : "InActive"}</span>
                </p>
            </div>

            <div className='border-t border-sky-400 p-2 mb-4'>
                <p className='text-sky-400'>
                    <i className="fa-solid fa-stopwatch"></i>
                    Manager Reward Time Remaining
                </p>
                <p>D : H : M : S</p>
                <p>{beautifyTime(remaining)}</p>
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
                        <span>{activeDirectNum || 0}</span>
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
                        <span>{getMembership(membership || 0)}</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-sack-dollar text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Income Pool for diamond</span>
                        <span>{income4diamond/1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-sack-dollar text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Income Pool for 1k depositors</span>
                        <span>{income41k/1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-sack-dollar text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Income Pool for booster</span>
                        <span>{income4booster/1e6 || 0}</span>
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
                    <p className='px-4'>Lock USDT</p>
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
        </main>
    )
}

export default HomePage;