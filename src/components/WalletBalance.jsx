import { useEffect, useState } from "react";
import { walletdata } from "../pages/Dashboard/HomePage/data";

const WalletBalance = ({ walletData }) => {
    // console.log("walletData", walletData);
    const [color, setColor] = useState("text-green-500");
    const [bgColor, setBgColor] = useState("bg-[#FBFCFD] dark:bg-[#4A3834]");
    const [strIncrease, setStrIncrease] = useState("Increase");
    useEffect(() => {
        if (walletData) {
            if (walletData.isIncrease) {
                setColor("text-green-500")
                setStrIncrease("Increase");
            } else {
                setColor("text-red-500")
                setStrIncrease("Decrease");
            }
            if (walletData.symbol == "BTC") {
                setBgColor("bg-[#FFFDFB] dark:bg-[#4A3834]");
            } else {
                setBgColor("bg-[#FBFCFD] dark:bg-[#3F435A]")
            }
        }
    }, [walletData]);
    return (
        <div className={`flex p-4 justify-between  ${bgColor}`}>
            <div className="flex">
                <div className="p-2">
                    <img src={walletData.img} width="40rem" />
                </div>
                <div className=" p-2">
                    <h4 className="text-black dark:text-white">{walletData.symbol}</h4>
                    <h5 className="text-gray-400 text-xs">{walletData.name}</h5>
                </div>
            </div>
            <div className="flex flex-col justify-center" >
                <h4 className="text-black dark:text-white">$ {walletData.balance} {walletData.symbol}</h4>
                <h5 className={`${color} text-sm`}>{walletData.rate}% {strIncrease}</h5>
            </div>
        </div>
    )
}
export default WalletBalance;