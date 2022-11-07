import React, { useContext, useState } from "react";

const BuyLicensePage = () => {
    return(
        <div className="mt-14 p-4 mx-2 text-gray-600 bg-gray-100 rounded-md border-t border-gray-400">
            <p className="text-xl"> Growth Account</p>
            <p className="py-2 font-semibold">DAI</p>
            <input className="bg-white py-1 px-2 w-full" type={"number"} value={50} disabled></input>
            <p className="py-2 font-semibold">Amount</p>
            <input className="bg-white py-1 px-2 w-full" type={"number"} value={50}></input>
            <p className="text-xs">The ratio of 50 for Deposit and The ratio of 10 for Transfer</p>
            <p className="py-2 font-semibold">Receiver address</p>
            <input type="text" className="py-1 px-2 w-full"></input>
            <div className="d-flex flex-row">
                <button className="bg-green-400 p-2 my-4 mr-4 rounded-md text-white">Deposit</button>
                <button className="bg-green-400 p-2 my-4 rounded-md text-white">Transfer</button>
            </div>
        </div>
    )
}

export default BuyLicensePage;