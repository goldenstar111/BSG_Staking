import React, { useContext, useState } from "react";

const WithdrawPage = () => {
    return(
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
            <div className="bg-gray-100 rounded border-t border-gray-400">
                <div className="d-flex flex-col justify-center items-center p-4">
                    <p className="text-2xl py-2">Withdraw</p>
                    <div className="border p-4 w-full text-sm">
                        <div className="grid grid-cols-2 px-1">
                            <p className="text-lg">Income</p>
                            <p className="text-lg text-right">Amount</p>
                            <p className="py-1">Unlock Principal</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Cycle Reward</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Direct Income</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Leader Income</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Manager Income</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Co-ordinator Income Freeze</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Co-ordinator Income Release</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Manager Royalty</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Global Co-Ordinator Royalty</p>
                            <p className="text-right py-1">$100 USDT</p>
                            <p className="py-1">Available withdrawal</p>
                            <p className="text-right py-1">$1000 USDT</p>
                        </div>
                        <button className="bg-green-400 text-white w-full text-lg py-1 rounded-md">Confirm</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WithdrawPage;