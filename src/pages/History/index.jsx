import React, { useEffect, useState } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
    getUSDTBalance,
    handleWalletBalance,
    getReferral,
    getUserInfo,
    getRewardInfo,
    getCurDay,
    getOrders
} from "../../components/interact";
import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../../config";

const HistoryPage = () => {
    const [walletAddress, setWallet] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [rewardInfo, setRewardInfo] = useState(null);
    const [curday, setCurday] = useState(1);
    const [orderlist, setOrderList] = useState([]);

    useEffect(() => {
        const getExistingWallet = async () => {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
        }
        getExistingWallet();
    }, []);

    useEffect(() => {
        updateInfor()
    }, [walletAddress]);

    const updateInfor = async () => {
        if (walletAddress.length > 0) {
            let _userInfo = await getUserInfo(walletAddress);
            setUserInfo(_userInfo);
            let _reward = await getRewardInfo(walletAddress);
            setRewardInfo(_reward);
            let _curday = await getCurDay();
            setCurday(_curday + 1);
            let _orders = await getOrders(walletAddress);
            setOrderList(_orders);
        } else {
            setUserInfo(null);
            setRewardInfo(null);
            setCurday(1);
            setOrderList([]);
        }
    }

    const beautify = (addr) => {
        var value, length;
        length = addr.length;
        value = addr.slice(0, 5) + '...' + addr.slice(length - 3, length);
        return value;
    }

    const calDate = (_date) =>{
        let _tmp = _date * 1000;
        let b = new Date(_tmp);
        return b.toLocaleString();
    }

    return (
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
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

            <div className="bg-gray-100 p-4 border-t border-gray-400 rounded-md">
                <p className="text-lg pb-2">Deposit Details</p>
                <div className="grid grid-cols-5 gap-2">
                    <div>Cycle</div>
                    <div>Amount</div>
                    <div>Deposit Time</div>
                    <div>Unlock Time</div>
                    <div>Order Status</div>
                    {
                        orderlist && orderlist.length > 0 &&
                        (
                            orderlist.map((item, index) => (
                                <>
                                    <div>{item.cycle || 0}</div>
                                    <div>$ {item.amount/1e6 || 0}</div>
                                    <div>{item.start ? calDate(item.start) : "No Information"}</div>
                                    <div>{item.unfreeze ? calDate(item.unfreeze) : "No Information"}</div>
                                    <div>{item.isClaimed? "true":"false"}</div>
                                </>
                            ))
                        )
                    }
                </div>
            </div>
        </div>)
}

export default HistoryPage;