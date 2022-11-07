import React, { useContext, useState } from "react";
import images from "../../../constants/images";
import { DashboardImageWith } from "../../../components";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TransactionHistory from "../../../components/TransactionHistory";
import { transctiondata } from "./data";
import SentModal from "../../../components/modal/SentModal";
import PendingModal from "../../../components/modal/PendingModal";

const TransPage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [tData] = useState(transctiondata);
    const [sentData, setSentData] = useState([]);
    const [receiveData, SetReceiveData] = useState([]);
    const [pendingData, setPendingData] = useState([]);
    const [showSentModal, setShowSentModal] = useState(false);
    const [showPendingModal, setShowPendingModal] = useState(false);
    const [curHistoryItem, setCurHistoryItem] = useState({});

    const handleTransactionHistory = (item) => {
        setCurHistoryItem(item);
        switch (item.status) {
            case "sent": setShowSentModal(true); break;
            case "pending": setShowPendingModal(true); break;
            default: setShowPendingModal(true);
            // case "received": set break;
        }
    }

    const handleSentData = () => {
        let result;
        result = tData.filter((item) => {
            return item.status == "sent";
        })
        setSentData(result);
    }

    const handleReceiveData = () => {
        let result;
        result = tData.filter((item) => {
            return item.status == "received";
        })
        SetReceiveData(result);
    }

    const handlePendingData = () => {
        let result;
        result = tData.filter((item) => {
            return item.status == "pending";
        })
        setPendingData(result);
    }

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <main className="gap-5 dark:bg-[#1C203B] p-3 bg-white" id="home-page">
                    <div className="mt-3 mb-3">
                        <DashboardImageWith />
                    </div>
                    <Tabs>
                        <TabList>
                            <div className="flex justify-between md:pb-4 border-gray-300 xs:flex-col md:flex-col sm:flex-col lg:flex-row gap-3">
                                <div className="flex flex-col pt-3">
                                    <h3 className="text-md font-bold mb-2 dark:text-white">
                                        My Transactions
                                    </h3>
                                    <h6 className="text-xs text-gray-400 ">
                                        View the history of your payment transactions
                                    </h6>
                                </div>
                                <div className="">
                                    <div className="flex flex-row  md:justify-end xs:justify-start md:gap-2 ">
                                        <div className="md:flex mr-5 hidden">
                                            <div htmlFor="" className="bg-slate-100/70 text-sm p-2 dark:bg-[#283150] rounded-l-md min-w-fit"><img src={!isToggle ? images.searchDark : images.searchLight} alt="" /></div>
                                            <input type="text" placeholder="Search Contacts" className="p-2 dark:text-white text-sm focus:border-0 bg-slate-100/70 dark:bg-[#283150] rounded-r-md" />
                                        </div>
                                        <div>
                                            <div className="flex min-w-[350px] xs:pl-5 md:pl-0">
                                                <Tab className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500 ${!isToggle ? 'dark' : 'white'}`}>All<span className="xs:hidden xl:inline"> Transaction</span></Tab>
                                                <Tab onClick={handleSentData} className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Sent</Tab>
                                                <Tab onClick={handleReceiveData} className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Receive</Tab>
                                                <Tab onClick={handlePendingData} className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Pending</Tab>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden px-5 pt-4">
                                        <div htmlFor="" className="bg-slate-100/70 text-sm p-2 dark:bg-[#283150] rounded-l-md min-w-fit"><img src={!isToggle ? images.searchDark : images.searchLight} alt="" /></div>
                                        <input type="text" placeholder="Search Contacts" className="p-2 dark:text-white text-sm focus:border-0 bg-slate-100/70 dark:bg-[#283150] rounded-r-md" />
                                    </div>
                                </div>
                            </div>
                        </TabList>

                        <TabPanel>
                            <div className="grid  xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xs:sm:grid-cols-1 gap-3 place-content-start min-h-screen ">
                                {tData && tData.map((item, key) => { return (<TransactionHistory onClick={() => handleTransactionHistory(item)} tranData={item} key={key} />) })}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid  xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xs:sm:grid-cols-1 gap-3 place-content-start min-h-screen ">
                                {sentData && sentData.map((item, key) => { return (<TransactionHistory onClick={() => handleTransactionHistory(item)} tranData={item} key={key} />) })}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid  xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xs:sm:grid-cols-1 gap-3 place-content-start min-h-screen">
                                {receiveData && receiveData.map((item, key) => { return (<TransactionHistory onClick={() => { handleTransactionHistory(item) }} tranData={item} key={key} />) })}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid  xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xs:sm:grid-cols-1 gap-3 place-content-start min-h-screen">
                                {pendingData && pendingData.map((item, key) => { return (<TransactionHistory onClick={() => handleTransactionHistory(item)} tranData={item} key={key} />) })}
                            </div>
                        </TabPanel>
                    </Tabs>
                    <SentModal curItem={curHistoryItem} show={showSentModal} handle={setShowSentModal} />
                    <PendingModal curItem={curHistoryItem} show={showPendingModal} handle={setShowPendingModal} />
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

export default TransPage;