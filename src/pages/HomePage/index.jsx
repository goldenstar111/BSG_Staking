import { Link } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { DashboardImageWith } from "../../components";

const HomePage = () => {

    return (
        <main className="gap-5 bg-white dark:bg-[#1C203B] p-3" id="home-page">
            <div className="mt-3 mb-3">
                <DashboardImageWith />
            </div>
            <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-md'>
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

            <div className='grid grid-cols-4 gap-2 py-2'>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Contract Buyer</span>
                        <span>0</span>
                    </p>
                </div>
                <div className='d-flex border border-green-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-users text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>My Team</span>
                        <span>0</span>
                    </p>
                </div>
                <div className='d-flex border border-fuchsia-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-medal text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Manager Pool</span>
                        <span>$ 0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-cloud text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Global Pool</span>
                        <span>$ 0.00</span>
                    </p>
                </div>
                <div className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-nurse text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Manager</span>
                        <span>0</span>
                    </p>
                </div>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-user-doctor text-4xl"></i>
                    <p className='d-flex flex-col px-4'>
                        <span>Global Co-Ordinator</span>
                        <span>0</span>
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-2 py-2'>
                <div className='d-flex border border-purple-400 py-4 px-6 items-center'>
                    <i class="fa-solid fa-filter-circle-dollar text-4xl"></i>
                    <p className='px-4'>Deposit</p>
                </div>
                <div className='d-flex border border-pink-400 py-4 px-6 items-center'>
                    <i class="fa-sharp fa-solid fa-hand-holding-dollar text-4xl"></i>
                    <p className='px-4'>Withdraw</p>
                </div>
                <div className='d-flex border border-sky-400 py-4 px-6 items-center'>
                    <i className="fa-solid fa-dollar-sign text-4xl"></i>
                    <p className='px-4'>Growth Account</p>
                </div>
            </div>
            <div className='p-2 bg-gray-100 dark:bg-gray-700 '>
                <p>My Rank</p>
                <p>ID Status</p>
                <p>Income</p>
                <p>Matic Balance</p>
                <p>USDT Balance</p>
                <p>Referral</p>
                <p>My address</p>
            </div>
            <div className='p-2 bg-gray-100 dark:bg-gray-700 '>
                <p>Lastest Transactions</p>
            </div>

            <div className='border-t border-sky-400 p-2 mb-4'>
                <p className='text-sky-400'>
                    <i className="fa-solid fa-stopwatch"></i>
                    Manager Reward Time Remaining
                </p>
                <p>Hours Minutes Seconds</p>
                <p>00: 00: 00</p>
            </div>

            <div className='border-t border-pink-400 p-2 mb-4'>
                <p className='text-sky-400'>
                    <i className="fa-solid fa-stopwatch"></i>
                    Global Co-Ordinator Pool Reward Time Remaning
                </p>
                <p>Hours Minutes Seconds</p>
                <p>00: 00: 00</p>
            </div>
        </main>
    )
}

export default HomePage;