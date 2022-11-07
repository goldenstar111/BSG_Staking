import React, { useContext, useState } from "react";

const BuyLicensePage = () => {
    return (
        <div className="mt-12 p-2 text-gray-600 dark:text-gray-300">
            <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-md mb-4'>
                <a href='https://polygonscan.com/address/0xFDc94C07A6aF83eb98AD6d0452B7e80540b7C507'
                    target={"_blank"}
                    className="text-sky-400 py-1"
                >
                    <i className="fa-solid fa-location-dot"></i>
                    <span className='px-2'>Contract address: 0xFDc9...C507</span>
                </a>
                <p className='py-1'>
                    <i className="fa-sharp fa-solid fa-clock"></i>
                    <span className='px-2'>Platform Running time: ...</span>
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
                <p className="text-lg">Deposti Details</p>
                <div className="grid grid-cols-5">
                    <div>Amount</div>
                    <div>Deposit Date</div>
                    <div>Unlock Time</div>
                    <div>Reward</div>
                    <div>Order Status</div>
                </div>
            </div>
        </div>)
}

export default BuyLicensePage;