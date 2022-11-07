import React, { useContext, useState } from "react";
import images from "../../../constants/images";
import DatePicker from "react-datepicker";
import TransactionHistory from "../../../components/TransactionHistory";
import ReceiveTokenModal from "../../../components/modal/ReceiveTokenModal";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { CryptoTypeBtn, DashboardImageWith, NetExplorer } from "../../../components";
import whiteEllipse from '../../../assets/svgs/white/ellipse.svg';
import darkEllipse from '../../../assets/svgs/dark/ellipse.svg';
import  CoinCharts  from "../../../components/CoinCharts";
import { transctiondata,coinChartData } from "./data";
import MonthPicker from "../../../components/MMonthPicker";
import NewPaymentModal from "../../../components/modal/NewPaymentModal";
import ZoomableChart from "../../../components/zoomableChart";
const SendPage = ()=>{
    const [showRecTokenModal,setShowRecTokenModal] = useState(true);
    const [accountSummaryDate, setAccountSummaryDate] = useState(new Date());
    const [showNewpayModal,setNewPayModal] = useState(true);
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const receiveData = [
        { title: "MarketCap", value: "238,843,29", currency: "USD",isRaise: true,rating:5.15},
        { title: "Volume", value: "238,843,29", currency: "USD", isRaise: false,rating:3.12},
        { title: "Calculating Supply", value: "238,843,29", currency: "USD",isRaise: true,rating:5.15},
      ]; 
      const [tData,setTdata]=useState(transctiondata);
    return (
        <main className="gap-5 dark:bg-[#1C203B] p-3 bg-white">
        {/* <DashboardImageWith />
        <div className="flex text-black dark:text-white justify-between py-[10px] sm:flex-col md:flex-row xs:flex-col">
                <h3>Account Summary</h3>
                <div className=" flex justify-end items-center">
                    <label className="text-gray-400 pr-[5px] inline">Select Date</label>
                    <div className="inline text-black dark:text-white pr-[20px] md:pr-[10px] lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px] sm:pr-1 md:pr-1 xs:pr-1">
                        <DatePicker selected={accountSummaryDate} className="bg-transparent datepicker sm:text-xs xs:text-xs text-end"onChange={(date) => setAccountSummaryDate(date)}/>
                    </div>
                    <img src={isToggle?whiteEllipse:darkEllipse}/>
                </div>
            </div>
        
        <ul role="list" className="grid grid-cols-3 gap-3 xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-2"> */}
        {/* {
            Object.values(receiveData).map((item, key) =>
            <CryptoTypeBtn key={key} item={item} />
            )
        }
        </ul> */}
        {/* <div className=" flex justify-between mt-5 mb-5 sm:flex-col md:flex-row xs:flex-col">
            <div className=" flex ">
                <h5  className="text-black dark:text-white">Account Balance  |</h5>
                <span  className="text-black dark:text-gray-500">&nbsp;Total Balance &nbsp;</span>
                <h4  className="text-black dark:text-white"> $ 152,837</h4>
            </div>
            <div className=" flex items-center justify-end">
                <h5 className="text-gray-400 text-sm">from&nbsp; </h5>
                <MonthPicker/>
                <h5 className="text-gray-400 text-sm">&nbsp;  to&nbsp; </h5>
                <div className="md:pr-[10px] lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px]sm:pr-1 md:pr-1 xs:pr-1">
                <MonthPicker/>
                </div>
                <img src={isToggle?whiteEllipse:darkEllipse} className="ml-30"/>
            </div>
        </div>
        <CoinCharts info={coinChartData}/> */}
        {/* <ZoomableChart height={350} />
        <div className=" flex justify-between mt-10 mb-5 sm:flex-col md:flex-row xs:flex-col">
            <div className=" flex ">
                <h5  className="text-black dark:text-white">Transaction History</h5>
            </div>
            <div className=" flex justify-end items-center">
                <h5 className="text-gray-400 text-sm">from&nbsp; </h5>
                <MonthPicker/>
                <h5 className="text-gray-400 text-sm">&nbsp;  to&nbsp; </h5>
                <div className="md:pr-[10px] lg:pr-[10px] xl:pr-[10px] 2xl:pr-[10px] 3xl:pr-[10px] sm:pr-1 md:pr-1 xs:pr-1">
                    <MonthPicker/>
                </div>
                <img src={isToggle?whiteEllipse:darkEllipse}/>
            </div>
        </div> */}
        {/* -------------date section -------------*/}
        {/* <div className="grid  xl:grid-cols-2 gap-3"> */}
                {/* { tData&&tData.map((item,key)=>{ return (<TransactionHistory tranData={item} key={key}/>)})} */}
                {/* { tData&&tData.map((item,key)=>{ return (<Link to="/crypto-token-info"><WalletBalance walletData={item} key={key}/></Link>)})} */}
                
        {/* </div> */}
        {/* <ReceiveTokenModal show={showRecTokenModal} /> */}
        <NewPaymentModal show={showNewpayModal} handle={setNewPayModal}/>
        {/* <RequestMoneyModal show={showRequestModal}/> */}
        {/* 
        <div className="w-full font-light px-4 mb-5  items-center space-y-7">
        <div className="flex">
            <div className="flex space-x-3 justify-start items-center">
            <h3 className="text-2xl font-medium">8.62341521</h3>
            <span className="text-gray-400">XLM</span>
            </div>
            <div className="flex space-x-3 ml-auto items-center">
            <div className="flex space-x-2 items-center">
                <span className="text-gray-400">from</span>
                <h3 className="text-lg font-normal">August 2018</h3>
            </div>
            <div className="flex space-x-2 items-center">
                <span className="text-gray-400">to</span>
                <h3 className="text-lg font-normal">May 2019</h3>
            </div>
            </div>
        </div>
        <Chart info={receiveData} />
        </div> */}

    </main>
    )
}

export default SendPage;