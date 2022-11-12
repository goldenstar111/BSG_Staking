import React, { useEffect, useState } from "react";
import {
    connectWallet,
    getCurrentWalletConnected,
    handleWalletBalance,
    getUSDTBalance,
    getLastDeposit,
    getFinalOrder,
    getRegistered,
    getAllowance,
    _deposit,
    _approve,
} from "../../components/interact";

const DepositPage = () => {
    const [bal_usdt, setBal_usdt] = useState(0);
    const [bal_matic, setBal_matic] = useState(0);
    const [walletAddress, setWallet] = useState("");
    const [isRegister, setRegister] = useState(false);
    const [allowance, setAllowance] = useState(0);
    const [depositAmount, setDepositAmount] = useState(100);
    const [finalAmount, setFinalAmount] = useState(0);
    const [finalOrder, setFinalOrder] = useState(null);

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

    const deposit = async () => {
        let result = await _deposit(depositAmount);
        window.location.href = "/home";
    }

    const approve = async () => {
        let result = await _approve(depositAmount * 1e6);
        if (result) {
            setAllowance(depositAmount * 1e6);
        }
    }

    const updateInfor = async () => {
        if (walletAddress.length > 0) {
            let _matic = await handleWalletBalance();
            setBal_matic(_matic);
            let _usdt = await getUSDTBalance()
            setBal_usdt(_usdt);
            let _status = await getRegistered();
            setRegister(_status);
            let _allowance = await getAllowance();
            setAllowance(_allowance);
            let _final = await getLastDeposit(walletAddress);
            setFinalAmount(_final);
            let _finalOrder = await getFinalOrder(walletAddress);
            setFinalOrder(_finalOrder);
        } else {
            setBal_matic(0);
            setBal_usdt(0);
            setRegister(false);
            setAllowance(0);
            setFinalAmount(0);
            setFinalOrder(null);
        }
    }

    const calDate = (_date) => {
        let b = new Date((_date) * 1000);
        return b.toLocaleString();
    }

    return (
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
            <div className="bg-gray-100 rounded border-t border-gray-400">
                <div className="d-flex flex-col justify-center items-center p-4">
                    <p className="text-2xl py-2">Deposit</p>
                    <div className="bg-white d-flex flex-row p-2 items-center border m-2">
                        <img src="/assets/tether.png" width={50}></img>
                        <div className="px-5 justify-center text-center">
                            <p className="font-semibold">USDT Balance</p>
                            <p className="text-sm text-green-400">{bal_usdt}</p>
                        </div>
                    </div>
                    <div className="bg-white d-flex flex-row p-2 items-center border m-2">
                        <img src="/assets/matic.png" width={50}></img>
                        <div className="px-4 justify-center text-center">
                            <p className="font-semibold">MATIC Balance</p>
                            <p className="text-sm text-green-400">{parseFloat(bal_matic).toFixed(6)}</p>
                        </div>
                    </div>
                    <input type="number" className="border py-1 px-2 m-2"
                        defaultValue={100} step={100} min={100} max={2500}
                        onChange={(ev) => setDepositAmount(parseInt(ev.target.value))} />
                    <p>The Lastest deposit unlock date is {finalOrder ? calDate(finalOrder.unfreeze) : "..."}</p>
                    <p>The Lastest deposit amount is ${finalAmount || 0}</p>
                    <p>Current Time is {(new Date).toLocaleString()}</p>
                    <p>Minimum deposit $100. A ratio of $100 max $2500</p>
                    <div className="border p-4 w-full text-sm">
                        <div className="grid grid-cols-6 py-1">
                            <p>{depositAmount} USDT<br />Deposit</p>
                            <p>+</p>
                            <p>15%<br />Each Cycle</p>
                            <p>=</p>
                            <p className="col-span-2">{Math.round(depositAmount * 1.15)} USDT<br />Deposit and Interest</p>
                        </div>
                        <p className="py-1">more than 15 Day per cycle. 15% per cycle</p>
                        <p className="py-1">You will have to redeposit every time after each cycle.
                            It will have to be either the same amount or bigger amount.
                            Every 1 cycle you deposit 1 extra Day will be added without interest. Maximum 50 Days.
                        </p>
                        {
                            (walletAddress.length === 0 || !isRegister) &&
                            <button className="bg-green-300 text-white w-full text-lg py-1 rounded-md cursor-not-allowed" disabled>Please Register</button>
                        }
                        {
                            walletAddress.length > 0 && isRegister && (depositAmount * 1e6 > allowance) &&
                            <button onClick={() => approve()} className="bg-green-400 text-white w-full text-lg py-1 rounded-md">Approve</button>
                        }
                        {
                            walletAddress.length > 0 && isRegister && (depositAmount * 1e6 <= allowance) &&
                            <button onClick={() => deposit()} className="bg-green-400 text-white w-full text-lg py-1 rounded-md">Deposit</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DepositPage;