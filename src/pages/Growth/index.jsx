import React, { useEffect, useState } from "react";
import {
    getCurrentWalletConnected,
    getSplit,
    _depositBySplit,
    _transferBySplit,
} from "../../components/interact";

const LockUSDTPage = () => {
    const [walletAddress, setWallet] = useState("");
    const [split, setSplit] = useState(0);
    const [amount, setAmount] = useState(50);
    const [receiver, setReceiver] = useState("");

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
            let _split = await getSplit(walletAddress);
            setSplit(parseInt(_split));
        } else {
            setSplit(0);
        }
    }

    const depositBySplit = async () => {
        let result = await _depositBySplit(amount);
    }

    const transferBySplit = async () => {
        let result = await _transferBySplit(receiver, amount);
    }

    return (
        <div className="mt-14 p-4 mx-2 text-gray-600 bg-gray-100 rounded-md border-t border-gray-400">
            <p className="text-xl"> Lock USDT</p>
            <p className="py-2 font-semibold">Locked USDT</p>
            <input className="bg-white py-1 px-2 w-full" type={"number"} value={parseFloat(split) / 1e6} disabled></input>
            <p className="py-2 font-semibold">Amount</p>
            <input type={"number"} onChange={(ev) => setAmount(parseInt(ev.target.value))} defaultValue={50} min={0} max={parseFloat(split) / 1e6} step={50} className="bg-white py-1 px-2 w-full" ></input>
            <p className="text-xs">The ratio of 50% for Deposit and The ratio of $10 for Transfer</p>
            <p className="py-2 font-semibold">Receiver address</p>
            <input type="text" onChange={(ev)=>setReceiver(ev.target.value)} className="py-1 px-2 w-full" placeholder="Please type receiver address"></input>
            <div className="d-flex flex-col sm:flex-row">
                <button onClick={()=>depositBySplit()} className="bg-green-400 p-2 my-4 sm:mr-4 rounded-md text-white">Deposit</button>
                <button onClick={()=>transferBySplit()} className="bg-green-400 p-2 my-4 rounded-md text-white">Transfer</button>
            </div>
        </div>
    )
}

export default LockUSDTPage;