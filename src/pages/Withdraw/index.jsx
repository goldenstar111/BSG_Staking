import React, { useEffect, useState } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
    getRegistered,
    _withdraw,
    getClaimable,
    getRewardInfo,
    getActiveDirectReward,
    getReferralReward,
    _calCurStaticRewards,
    getDiamondReward,
    checkDiamondMembership
} from "../../components/interact";

const WithdrawPage = () => {
    const [walletAddress, setWallet] = useState("");
    const [isRegister, setRegister] = useState(false);
    const [claimable, setClaimable] = useState(false);
    const [reward, setReward] = useState(null);
    const [activeTeamReward, setActiveTeamReward] = useState(0);
    const [cycleReward, setCycleReward] = useState(0);
    const [membership, setMembership] = useState(0);
    const [level25Reward, setLevel25Reward] = useState(0);
    const [level612Reward, setLevel612Reward] = useState(0);

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
            let _status = await getRegistered();
            setRegister(_status);
            let _claimable = await getClaimable(walletAddress);
            setClaimable(_claimable);
            let _reward = await getRewardInfo(walletAddress);
            setReward(_reward);
            let _activeTeamReward = await getReferralReward(walletAddress);
            setActiveTeamReward(_activeTeamReward);
            let _cycleReward = await _calCurStaticRewards(walletAddress);
            setCycleReward(_cycleReward);
            let _membership = await checkDiamondMembership(walletAddress);
            setMembership(_membership);
            await level2to5Reward();
            await level6to12Reward();
        } else {
            setRegister(false);
            setClaimable(false);
            setReward(null);
            setActiveTeamReward(0);
            setCycleReward(0);
            setMembership(0);
            setLevel25Reward(0);
            setLevel612Reward(0);
        }
    }

    const withdraw = async () => {
        let result = await _withdraw();
        if(result){
            setClaimable(false)
            setReward(null);
            setCycleReward(0);
            setActiveTeamReward(0);
            setLevel25Reward(0);
            setLevel612Reward(0);
        }
    }

    const level2to5Reward = async () =>{
        let _reward = 0;
        if(membership >= 2 && walletAddress){
            if(membership == 4){
                _reward = await getDiamondReward(walletAddress);
                _reward = parseInt(reward)/2;
            }else if(membership == 2){
                _reward = await getDiamondReward(walletAddress);
            }
            setLevel25Reward(parseInt(_reward));
        } else {
            setLevel25Reward(0);
        }
    }

    const level6to12Reward = async () =>{
        let _reward = 0;
        if(membership >= 3 && walletAddress){
            if(membership == 4){
                _reward = await getDiamondReward(walletAddress);
                _reward = parseInt(reward)/2;
            }else if(membership == 3){
                _reward = await getDiamondReward(walletAddress);
            }
            setLevel612Reward(parseInt(_reward));
        } else {
            setLevel612Reward(0);
        }
    }

    return (
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
            <div className="bg-gray-100 rounded border-t border-gray-400">
                <div className="d-flex flex-col justify-center items-center p-4">
                    <p className="text-2xl py-2">Withdraw</p>
                    <div className="border p-4 w-full text-sm">
                        <div className="grid grid-cols-2 px-1">
                            <p className="text-lg">Income</p>
                            <p className="text-lg text-right">Amount</p>
                            <p className="py-1">Deposit Amount</p>
                            <p className="text-right py-1">${reward?.capitals/1e6 || 0} USDT</p>
                            <p className="py-1">Cycle Reward</p>
                            <p className="text-right py-1">${cycleReward/1e6 || 0} USDT</p>
                            <p className="py-1">1st Level Reward</p>
                            <p className="text-right py-1">${activeTeamReward/1e6 || 0} USDT</p>
                            <p className="py-1">2-5 Level Reward</p>
                            <p className="text-right py-1">${level25Reward/1e6 || 0} USDT</p>
                            <p className="py-1">6-12 Level Reward</p>
                            <p className="text-right py-1">${level612Reward/1e6 || 0} USDT</p>
                            <p className="py-1">Luck Reward for 1k</p>
                            <p className="text-right py-1">${reward?.more1k/1e6 || 0} USDT</p>
                            <p className="py-1">Withdraw</p>
                            <p className="text-right py-1">70%</p>
                            <p className="py-1">Lock</p>
                            <p className="text-right py-1">30%</p>
                            <p className="py-1">Available withdrawal</p>
                            <p className="text-right py-1">
                                ${(reward?.capitals/1e6 + cycleReward/1e6 + activeTeamReward/1e6 + level25Reward/1e6
                                + level612Reward/1e6 + reward?.more1k/1e6)|| 0} USDT</p>
                        </div>
                        {
                            (walletAddress.length === 0 || !isRegister) &&
                            <button className="bg-green-300 text-white w-full text-lg py-1 rounded-md cursor-not-allowed" disabled>Please Register</button>
                        }
                        {
                            walletAddress.length > 0 && isRegister && claimable &&
                            <button onClick={() => withdraw()} className="bg-green-400 text-white w-full text-lg py-1 rounded-md">Claim</button>
                        }
                        {
                            walletAddress.length > 0 && isRegister && !claimable &&
                            <button className="bg-green-400 text-white w-full text-lg py-1 rounded-md cursor-not-allowed" disabled>Please deposit and Claim</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WithdrawPage;