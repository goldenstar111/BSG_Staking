import { Link } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { DashboardImageWith } from "../../../components";
import images from "../../../constants/images";
import whiteEllipse from '../../../assets/svgs/white/ellipse.svg';
import darkEllipse from '../../../assets/svgs/dark/ellipse.svg';
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import DatePicker from "react-datepicker";
import { CryptoTypeBtn } from "../../../components";
import { receiveData, walletdata, coinChartData } from "./data";
import MonthPicker from "../../../components/MMonthPicker";
import CoinCharts from "../../../components/CoinCharts";
import WalletBalance from "../../../components/WalletBalance";
import ZoomableChart from '../../../components/zoomableChart';

const HomePage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [accountSummaryDate, setAccountSummaryDate] = useState(new Date());
    const { accountData } = useState([
        { title: "This Week", qty: "$3,312,00", pnl: 5.15 },
        { title: "This Month", qty: "$3,312,00", pnl: -3.12 },
        { title: "XLM Price", qty: "$110,312,00", pnl: 5.15 }
    ])
    const [wdata, setWdata] = useState(walletdata);
    const [coinData] = useState(receiveData);
    const [view_calendar1, setView1] = useState(false);
    const [view_calendar2, setView2] = useState(false);
    const [view_calendar3, setView3] = useState(false);

    return (
        <main className="gap-5 bg-white dark:bg-[#1C203B] p-3" id="home-page">
            <div className="mt-3 mb-3">
                <DashboardImageWith />
            </div>
            <div className="flex text-black dark:text-white justify-between py-[10px] sm:flex-row md:flex-row xs:flex-col ">
                <h3 className='sm:text-sm xs:text-xs'>Account Summary</h3>
                <div className=" flex justify-end items-center">
                    <label className="text-gray-400 pr-[5px] inline sm:text-xs p-1 xs:text-xs">Select Date</label>
                    <div className="inline text-black dark:text-white lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px] sm:pr-1 xs:pr-1 md:pr-[10px]">
                        <DatePicker selected={accountSummaryDate} className="bg-transparent datepicker sm:text-xs xs:text-xs text-end border-b w-[70px]" onChange={(date) => setAccountSummaryDate(date)} />
                    </div>
                    {/* <img src={isToggle ? whiteEllipse : darkEllipse} width={"2%"} /> */}
                </div>
            </div>
            <ul role="list" className="grid lg:grid-cols-3 gap-2 xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
                {
                    coinData.map((item, key) =>
                        <CryptoTypeBtn key={key} item={item} />
                    )
                }
            </ul>
            <div className=" flex justify-between mt-5 mb-5  xs:flex-col sm:flex-row md:flex-row">
                <div className=" flex ">
                    <h5 className="text-black dark:text-white font-bold sm:text-xs xs:text-xs">Account Balance  <span className='mx-4 font-light text-white'>|</span></h5>
                    <span className="text-black dark:text-gray-500 sm:text-xs xs:text-xs">&nbsp;Total Balance &nbsp;</span>
                    <h4 className="text-black dark:text-white sm:text-xs xs:text-xs"> $ 152,837</h4>
                </div>
                <div className=" flex justify-end items-center">
                    <h5 className="text-gray-400 text-sm mr-1 sm:text-xs xs:text-xs">from&nbsp; </h5>
                    <MonthPicker />
                    <h5 className="text-gray-400 text-sm mx-1 sm:text-xs xs:text-xs">&nbsp;  to&nbsp; </h5>
                    <div className="md:pr-[10px] lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px] sm:pr-1 xs:pr-1">
                        <MonthPicker />
                    </div>
                    {/* <img src={isToggle ? whiteEllipse : darkEllipse} width={"2%"} /> */}
                </div>
            </div>
            {/* <CoinCharts info={coinChartData}/> */}
            <ZoomableChart height={350} />
            <div className=" flex justify-between mt-16 mb-5 lg:flex md:flex-row sm:flex-row xs:flex-col ">
                <div className=" flex ">
                    <h5 className="text-black dark:text-white">Wallet Balance</h5>
                </div>
                <div className="flex justify-end items-center">
                    <h5 className="text-gray-400 text-sm"> from&nbsp; </h5>
                    <MonthPicker />
                    <h5 className="text-gray-400 text-sm">&nbsp; to&nbsp; </h5>
                    <div className="md:pr-[10px] lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px]  sm:pr-1 xs:pr-1 ">
                        <MonthPicker />
                    </div>
                    {/* <img src={isToggle ? whiteEllipse : darkEllipse} width={"2%"} /> */}
                </div>
            </div>
            <div className="grid  xl:grid-cols-2 gap-3">
                {wdata && wdata.map((item, key) => { return (<Link to="/crypto-token-info" key={key}><WalletBalance walletData={item} /></Link>) })}
            </div>
        </main>
    )
}

export default HomePage;