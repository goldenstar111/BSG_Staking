import React, { useContext, useState } from "react";

const DepositPage = () => {
    return (
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
            <div className="bg-gray-100 rounded border-t border-gray-400">
                <div className="d-flex flex-col justify-center items-center p-4">
                    <p className="text-2xl py-2">Deposit</p>
                    <div className="bg-white d-flex flex-row p-2 items-center border m-2">
                        <img src="/assets/tether.png" width={50}></img>
                        <div className="px-5 justify-center text-center">
                            <p className="font-semibold">USDT Balance</p>
                            <p className="text-sm text-green-400">1200</p>
                        </div>
                    </div>
                    <div className="bg-white d-flex flex-row p-2 items-center border m-2">
                        <img src="/assets/matic.png" width={50}></img>
                        <div className="px-4 justify-center text-center">
                            <p className="font-semibold">MATIC Balance</p>
                            <p className="text-sm text-green-400">1200</p>
                        </div>
                    </div>
                    <input type="text" className="border"></input>
                    <p>Minimum deposit $100. A ratio of $100 max 2000</p>
                    <div className="border p-4 w-full text-sm">
                        <div className="grid grid-cols-6 py-1">
                            <p>50 DAI<br />Deposit</p>
                            <p>+</p>
                            <p>17%<br />Each Cycle</p>
                            <p>=</p>
                            <p className="colspan-2">58.3 DAI<br />Deposit and Interest</p>
                        </div>
                        <p className="py-1">10 Day per cycle. 17% per cycle</p>
                        <p className="py-1">You will have to redeposit every time after each cycle.
                            It will have to be either the same amount or bigger amount.
                            Every 1 cycle you deposit 1 extra Day will be added without interest. Maximum 40 Days.
                        </p>
                        <button className="bg-green-400 text-white w-full text-lg py-1 rounded-md">Confirm</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DepositPage;