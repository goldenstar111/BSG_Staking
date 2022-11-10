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
    getMyTeams
} from "../../components/interact";
import { CHAIN_ID, CONTRACT_ADDRESS, CONTRACT_ADDRESS_USDT, DEFAULT_REFERRAL } from "../../config";

const TeamPage = () => {
    const [walletAddress, setWallet] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [rewardInfo, setRewardInfo] = useState(null);
    const [curday, setCurday] = useState(1);
    const [teamList, setTeamList] = useState([]);

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
            let _teamlist = await getMyTeams(walletAddress);
            setTeamList(_teamlist);
        } else {
            setUserInfo(null);
            setRewardInfo(null);
            setCurday(1);
            setTeamList([]);
        }
    }

    const beautify = (addr) => {
        var value, length;
        length = addr.length;
        value = addr.slice(0, 8) + '...' + addr.slice(length - 6, length);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-100 border-t border-gray-400 p-4 rounded-md mb-4">
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Total Revenue</span>
                        <span>$ {userInfo?.totalRevenue / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-green-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-users text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Team Numbers</span>
                        <span>{userInfo?.teamNum || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-fuchsia-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-medal text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Team Total Deposit</span>
                        <span>$ {userInfo?.teamTotalDeposit / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-cloud text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Team Total Volume</span>
                        <span>$ {userInfo?.teamTotalVolume / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-nurse text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Last Deposit</span>
                        <span>$ {userInfo?.maxDeposit / 1e6 || 0}</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-doctor text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Membership</span>
                        <span>{userInfo?.membership > 0 ? "Booster" : "Normal"}</span>
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-400 rounded-md">
                <p className="text-lg py-2">My Team</p>
                <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-2">Address</div>
                    <div>Max Deposit</div>
                    <div>Total Deposit</div>
                    <div>Total Revenue</div>
                    <div>Membership</div>
                    {
                        teamList && teamList?.length > 0 &&
                        (
                            teamList.map((item, index) => (
                                <>
                                    <div className="col-span-2">{item.address ? beautify(item.address) : "..."}</div>
                                    <div>$ {item.maxDeposit/1e6 || 0}</div>
                                    <div>$ {item.totalDeposit/1e6 || 0}</div>
                                    <div>$ {item.totalRevenue/1e6 || 0}</div>
                                    <div>{getMembership(item.membership || 0)}</div>
                                </>
                            ))
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default TeamPage;