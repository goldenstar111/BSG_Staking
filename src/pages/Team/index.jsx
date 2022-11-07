import React, { useContext, useState } from "react";

const BuyLicensePage = () => {
    return(
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
            <div className="grid grid-cols-3 gap-2 bg-gray-100 border-t border-gray-400 p-4 rounded-md mb-4">
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Contract Sales</span>
                        <span>$0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-green-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-users text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Referals</span>
                        <span>$0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-fuchsia-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-medal text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Referals Deposit</span>
                        <span>$ 0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-cloud text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Contract Buyers Team</span>
                        <span>$ 0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-nurse text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Strong Leg</span>
                        <span>0</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-doctor text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Rest Leg</span>
                        <span>0</span>
                    </p>
                </div>
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-400 rounded-md">
                <p className="text-lg">My Team</p>
                <div className="grid grid-cols-6">
                    <div className="colspan-2">Address</div>
                    <div>Level</div>
                    <div>Layer</div>
                    <div>Status</div>
                    <div>Time</div>
                </div>
            </div>
        </div>
    )
}

export default BuyLicensePage;