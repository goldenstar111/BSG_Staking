import { useEffect, useState } from "react";
import upBg from "../assets/transaction/arrow1.svg";
import dBg from "../assets/transaction/downarrow-react.svg";
const TransactionHistory = ({ tranData, onClick }) => {
    const [ibg, setIbg] = useState(upBg);
    useEffect(() => {
        if (tranData.isIncrease) {
            setIbg(upBg);
        } else {
            setIbg(dBg)
        }
    }, [tranData]);
    return (
        <div onClick={onClick} className="self-start flex p-4 justify-between border-b-2 border-gray-300 dark:border-gray-700 bg-transparent dark:bg-[#1C203B]">
            <div className="flex items-stretch">
                <div className="p-2 self-center" >
                    <img src={ibg} width="40rem" />
                </div>
                <div className=" p-2 self-center flex items-strech">
                    <h4 className="text-black dark:text-white self-center xs:text-xs">Transaction to Charmeine</h4>
                    <h5 className="text-gray-400 text-xs self-center xs:text-xs">Today {tranData.date}</h5>
                </div>
            </div>
            <div className="flex flex-col justify-center" >
                <h4 className="text-black dark:text-white xs:text-xs">$ {tranData.balance} XLM</h4>
                <h5 className={`text-[#81E4C7] text-sm xs:text-xs`}>Approved</h5>
            </div>
        </div>
    )
}
export default TransactionHistory;