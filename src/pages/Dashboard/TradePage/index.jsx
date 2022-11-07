import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { DashboardImageWith } from "../../../components";
import CoinRate from "../../../components/CoinRate";
import { coinData, CoinTradeChartData, ordersData, PurchaseData } from "./data";
import { LineChart, Line } from "recharts";
import { maketRating } from "./data";
import coinpng from "../../../assets/png/coinImg1.png";
import coin$png from "../../../assets/png/coinImg_$.png"
import coinArrow from "../../../assets/png/coinArrow.png"
import MonthPicker from "../../../components/MMonthPicker";
import darkEllipse from '../../../assets/svgs/dark/ellipse.svg';
import whiteEllipse from '../../../assets/svgs/white/ellipse.svg';
import CoinTradeChart from "../../../components/coinTradeChart";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AssetsModal from "../../../components/modal/AssetsModal";
import EditSellOffers from "../../../components/modal/EditSellOffer";
import OrderDetailsModal from "../../../components/modal/OrderDetails";
import DeleteOfferModal from "../../../components/modal/DeleteOffer";
import CoinCharts from "../../../components/CoinCharts";
import ZoomableChart from "../../../components/zoomableChart";
import UpdownArrow from "../../../assets/updownarrow.png"

const TradePage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [cdata] = useState(coinData);
    const [marketRating] = useState(maketRating);
    const [purchase] = useState(PurchaseData);
    const [orderdata] = useState(ordersData);
    const [coinChartData] = useState(CoinTradeChartData);
    const [assetsModal, setAssetsModal] = useState(false);
    const [editOffer, setEditOfferModal] = useState(false);
    const [buyorsales, setBuyOrSales] = useState(false);
    const [orderDetailModal, setOrderDetailModal] = useState(false);
    const [deleteOfferModal, setDeleteOfferModal] = useState(false);
    const [switchSpotTrade, setSwitchSpotTrade] = useState(false);
    const [switchSpotTradePrice, setSwitchSpotTradePrice] = useState(1);

    const handleAssetsModal = () => {
        setAssetsModal(true);
    }
    const handleEditOfferModal = () => {
        setEditOfferModal(true);
    }

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                <main className="gap-5 dark:bg-[#1C203B] p-3 pt-6 bg-white">
                    <DashboardImageWith />
                    <div className="grid grid-cols-12 md:gap-10 xs:gap-3 pt-4">
                        <div className="col-span-4 md:col-span-4 xs:col-span-12 sm:col-span-12 flex flex-col gap-3">
                            <div className="flex flex-col p-7 bg-[#FBFBFB] dark:bg-[#272C4D]">
                                <h4 className="text-md font-bold text-black dark:text-white">Market Status</h4>
                                <div className="grid  grid-cols-2">
                                    <div className="flex flex-col gap-y-4 mt-5">
                                        <p className="text-sm text-gray-400">XLM Price</p>
                                        <p className="font-bold dark:text-white">0.155847</p>
                                        <p className="text-[#DD3666]">-0.312%</p>
                                    </div>
                                    <div>
                                        <LineChart width={100} height={120} data={marketRating.chartData}
                                            margin={{ top: 20, right: 30, }} >
                                            <Line type="monotone" strokeWidth={2} dataKey="value" stroke={"#E03766"} dot={false} />
                                            <Line type="monotone" dataKey="dotval" stroke={"#E03766"} dot={{ stroke: "#E03766", strokeWidth: 5, r: 2.5, strokeDasharray: '' }} />
                                        </LineChart>

                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 ">24H Vol</p>
                                        <p className="text-sm font-bold dark:text-white">200,488,300 USD</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Bid-ask Spread</p>
                                        <p className="text-sm font-bold dark:text-white">0.09845 %</p>
                                    </div>
                                </div>
                            </div>
                            <CoinRate coinInfo={cdata[0]} onClick={handleAssetsModal} />
                            <CoinRate coinInfo={cdata[1]} onClick={handleAssetsModal} />
                        </div>
                        <div className="col-span-8 md:col-span-8 sm:col-span-12 xs:col-span-12 flex flex-col  gap-2">
                            <div className="flex flex-col md:flex-row gap-3 items-center md:items-auto">
                                <div className="flex grow bg-[#FBFBFB] dark:bg-[#272C4D] p-3 content-center gap-1" onClick={handleAssetsModal}>
                                    <div className=" p-1 content-center">
                                        <img src={coinpng} className="justify-center" />
                                    </div>
                                    <div className="flex justify-between items-center grow">
                                        <div className="flex flex-col justify-center gap-1 px-3">
                                            <p className="text-sm text-gray-400">Lumen Steller.org</p>
                                            <p className="font-medium dark:text-white">2.45</p>
                                            <p className="text-xs dark:text-white">Current Balance</p>
                                        </div>
                                        <img src={isToggle ? images.ArrowWhiteIcon : images.ArrowDarkIcon} className={"rotate-90"} alt="" />
                                    </div>
                                </div>
                                <button className="content-center hidden md:block">
                                    <img src={coinArrow} alt="" />
                                </button>
                                <button className="content-center block md:hidden">
                                    <img src={UpdownArrow} alt="" />
                                </button>
                                <div className="flex grow bg-[#FBFBFB] dark:bg-[#272C4D] p-3" onClick={handleAssetsModal}>
                                    <div className="justify-center p-1">
                                        <img src={coin$png} className="justify-center" />
                                    </div>
                                    <div className="flex justify-between items-center grow">
                                        <div className="flex flex-col justify-center gap-1 px-3">
                                            <p className="text-sm text-gray-400">Lumen Steller.org</p>
                                            <p className="font-medium dark:text-white">2.45</p>
                                            <p className="text-xs dark:text-white">Current Balance</p>
                                        </div>
                                        <img src={isToggle ? images.ArrowWhiteIcon : images.ArrowDarkIcon} className={"rotate-90"} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-2 sm:flex-col md:flex-row xs:flex-col gap-2">
                                <div className="flex">
                                    <p className="font-bold text-sm dark:text-white">0.115847 USD Coin</p>
                                    <p className="text-[#EC426F] dark:text-[#B7325C] px-2"> -3.12%</p>
                                </div>
                                <div className="flex xs:justify-end sm:justify-end items-center">
                                    <h5 className="text-gray-400 text-sm">from&nbsp; </h5>
                                    <MonthPicker />
                                    <h5 className="text-gray-400 text-sm">&nbsp;  to&nbsp; </h5>
                                    <div className="pr-[100px] sm:pr-1 xs:pr-1">
                                        <MonthPicker />
                                    </div>
                                    {/* <img src={isToggle ? whiteEllipse : darkEllipse} width={"2%"} /> */}
                                </div>
                            </div>
                            <div className="flex justify-center pb-10 md:pb-0">
                                {/* <CoinCharts info={coinChartData} /> */}
                                <ZoomableChart height={240} />
                            </div>
                        </div>
                        <div className="xl:col-span-4 2xl:col-span-4 3xl:col-span-4 sm:col-span-12 md:col-span-12 xs:col-span-12 p-4 bg-[#FBFBFB] dark:bg-[#272C4D] mt-5 mb-5">
                            <h3 className="text-sm font-bold py-2 dark:text-white">Spot Trading</h3>
                            <div className="flex py-2">
                                <button onClick={() => { setSwitchSpotTrade(false) }} className={`${switchSpotTrade ? "hover:bg-white/40 active:hover:bg-white/20 bg-transparent rounded-l-md border" : "bg-[#A015E3] hover:bg-[#a015e3]/80 active:bg-[#a015e3]/60 rounded-l-md "} grow p-3 text-white text-xs`}>Buy</button>
                                <button onClick={() => { setSwitchSpotTrade(true) }} className={`${!switchSpotTrade ? "hover:bg-white/40 active:hover:bg-white/20 bg-transparent rounded-r-md border" : "bg-[#A015E3] hover:bg-[#a015e3]/80 active:bg-[#a015e3]/60 rounded-r-md"} grow p-3 text-xs dark:text-white`}>Sell</button>
                            </div>
                            <div className="flex flex-col mt-5">
                                <p className="text-sm text-gray-400 pb-2">Type</p>
                                <select className="border p-2 rounded-md dark:bg-transparent dark:text-white dark:border-gray-500 ">
                                    <option value="0" >Limit</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-400 py-2">Amount</p>
                                <select className="border p-2 rounded-md dark:bg-transparent dark:text-white dark:border-gray-500">
                                    <option value="0" >Enter Amount</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-400 py-2">price</p>
                                <div className="flex gap-2 pb-3">
                                    <button onClick={() => { setSwitchSpotTradePrice(1) }}
                                        className={`grow rounded-md p-3 text-xs text-white ${switchSpotTradePrice == 1 ?
                                            "bg-[#59DBB5] hover:bg-[#59DBB5]/80 active:bg-[#59DBB5]/60" :
                                            "bg-transparent hover:bg-white/40 active:hover:bg-white/20 border"}`}>
                                        Ask
                                    </button>
                                    <button onClick={() => { setSwitchSpotTradePrice(2) }}
                                        className={`grow rounded-md p-3 text-xs text-white ${switchSpotTradePrice == 2 ?
                                            "bg-[#59DBB5] hover:bg-[#59DBB5]/80 active:bg-[#59DBB5]/60" :
                                            "bg-transparent hover:bg-white/40 active:hover:bg-white/20 border"}`}>
                                        Bid
                                    </button>
                                    <button onClick={() => { setSwitchSpotTradePrice(3) }}
                                        className={`grow rounded-md p-3 text-xs text-white ${switchSpotTradePrice == 3 ?
                                            "bg-[#59DBB5] hover:bg-[#59DBB5]/80 active:bg-[#59DBB5]/60" :
                                            "bg-transparent hover:bg-white/40 active:hover:bg-white/20 border"}`}>
                                        Last
                                    </button>
                                </div>
                                <div className="flex">
                                    <input className="grow p-2 border rounded-md dark:bg-transparent dark:text-white dark:border-gray-500" type="text" placeholder="Enter Price of 1 XLM" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="py-3  text-gray-400">Total</h3>
                                    <input type="text" className="grow p-2 border rounded-md dark:bg-transparent dark:text-white dark:border-gray-500" placeholder="Total Amount" />
                                </div>
                                <div className="flex justify-between py-2">
                                    <p className="text-gray-400 text-xs ">USD to Sell</p>
                                    <p className="text-gray-400 text-xs  ">Available: <span className="text-xs font-medium text-black dark:text-white">USD,1500</span></p>
                                </div>
                                <div className="flex">
                                    <button className="grow p-3 text-white bg-pink-600 hover:bg-pink-600/80 active:hover:bg-pink-600/60 rounded-md text-xs">{switchSpotTrade ? "Sell" : "Buy"} XLM</button>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden col-span-12 mx-4 grid grid-cols-2 border border-slat-700 rounded-lg bg-white dark:bg-transparent dark:border-violet-500">
                            <button onClick={() => setBuyOrSales(false)} className="p-2 rounded-lg text-white bg-[#4C4C4C] text-sm dark:bg-[#A015E3]">Buy Orderbook</button>
                            <button onClick={() => setBuyOrSales(true)} className="p-2 rounded-lg text-black bg-white text-sm dark:text-white dark:bg-transparent">Sales Orderbook</button>
                        </div>

                        <div className="grid grid-cols-12 gap-5 sm:col-span-12 xs:col-span-12 md:col-span-12 lg:col-span-8  xl:col-span-8 2xl:col-span-8 3xl:col-span-8 px-4 sm:px-0 xs:px-0 mt-5 mb-5 ">
                            <div className={`md:block bg-[#FBFBFB] dark:bg-[#272C4D] p-4 3xl:col-span-6 xl:col-span-6 xs:col-span-12 sm:col-span-12 md:col-span-12 ${!buyorsales ? "block" : "hidden"}`}>
                                <h3 className="text-sm font-bold mb-3 py-2 dark:text-white  ">Purchase Orders</h3>
                                <div className="flex">
                                    <table className="grow">
                                        <thead>
                                            <tr className="bg-[#4C4C4C] dark:bg-[#434A77]">
                                                <th className="p-3 text-white/70 text-xs font-light">Price <span className="text-gray-400">USD</span></th>
                                                <th className="p-3 text-white/70 text-xs font-light">Amount <span className="text-gray-400">XLM</span></th>
                                                <th className="p-3 text-white/70 text-xs font-light">Total <span className="text-gray-400">USD</span></th>
                                            </tr>
                                        </thead>
                                        <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-purchart_tr_color_dark">
                                            {
                                                purchase.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="p-3 text-xs text-center text-[#74E0C0] dark:text-[#4DB39D] ">{item.price}</td>
                                                            <td className="p-3 text-xs text-center font-medium dark:text-white">{item.Amount}</td>
                                                            <td className="p-3 text-xs text-center font-medium dark:text-white">{item.Total}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={`md:block bg-[#FBFBFB] dark:bg-[#272C4D] p-4 3xl:col-span-6 2xl:p-4 2xl:col-span-6 xl:col-span-6  xs:col-span-12 sm:col-span-12 ${buyorsales ? "block" : "hidden"}`} >
                                <h3 className="text-sm font-bold mb-3 py-2 invisible dark:text-white md:block xs:hidden">Purchase Orders</h3>
                                <div className="flex">
                                    <table className="grow">
                                        <thead>
                                            <tr className="bg-[#4C4C4C] dark:bg-[#434A77]">
                                                <th className="p-3 text-white/70 text-xs font-light">Price <span className="text-gray-400">USD</span></th>
                                                <th className="p-3 text-white/70 text-xs font-light">Amount <span className="text-gray-400">XLM</span></th>
                                                <th className="p-3 text-white/70 text-xs font-light">Total <span className="text-gray">USD</span></th>
                                            </tr>
                                        </thead>
                                        <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-purchart_tr_color_dark">
                                            {
                                                purchase.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="p-3 text-xs text-center text-[#EE547D] dark:text-[#9C335C]">{item.price}</td>
                                                            <td className="p-3 text-xs text-center font-medium dark:text-white">{item.Amount}</td>
                                                            <td className="p-3 text-xs text-center font-medium dark:text-white">{item.Total}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-12  mt-5 dark:bg-[#272C4D] px-5 py-6">
                            <Tabs>
                                <TabList>
                                    <div className="mb-3 flex justify-between pb-4 border-gray-300 ">
                                        <div className="flex flex-col">
                                            <h3 className="text-xs md:text-base font-bold mb-2 dark:text-white">
                                                Purchase Orders
                                            </h3>
                                        </div>
                                        <div >
                                            <div className="flex flex-row">
                                                <div className="flex flex-row justify-between">
                                                    <Tab className={`text-xs md:text-sm px-3 border-b-gray-200 border-b-2 text-gray-500 ${!isToggle ? 'dark' : 'white'}`}>Open Orders</Tab>
                                                    <Tab className={`text-xs md:text-sm px-3 border-b-gray-200 border-b-2 text-gray-500 ${!isToggle ? 'dark' : 'white'}`}>Order History</Tab>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabList>

                                <TabPanel >
                                    <div className="flex overflow-x-auto w-full ">
                                        <table className="w-full table-auto lg:min-w-[900px]">
                                            <thead className="hidden md:contents">
                                                <tr className="bg-[#464646] text-white/70 dark:bg-[#434A77] ">
                                                    <th width="15%" className="p-4 font-light text-sm">Selling / Buying</th>
                                                    <th width="20%" className="p-4 font-light text-sm">Amount</th>
                                                    <th width="20%" className="p-4 font-light text-sm ">Price - USD</th>
                                                    <th width="20%" className="p-4 font-light  text-sm">Total - USD</th>
                                                    <th width="20%" className="p-4 font-light text-sm"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-purchart_tr_color_dark">
                                                {
                                                    orderdata.map((item, index) => {
                                                        return (
                                                            <tr key={index}  >
                                                                <td onClick={() => { setOrderDetailModal(true) }} className={`xs:pointer-events-auto md:pointer-events-none flex justify-center text-xs p-2 py-4 ${item.isSell ? "text-[#71DFBF]" : "text-[#F07B9A]"}`}>
                                                                    <p className={`text-center p-2 rounded-md w-fit ${item.isSell ? "bg-[#F4FAF8] dark:bg-[#325264]" : "bg-[#F7F0F1] dark:bg-[#5C385B]"}`}>
                                                                        {item.isSell ? "Selling" : "Buying"}
                                                                    </p>
                                                                </td>
                                                                <td onClick={() => { setOrderDetailModal(true) }} className="xs:pointer-events-auto md:pointer-events-none text-sm text-center table-cell dark:text-white md:hidden">
                                                                    {item.isSell ? "Selling Order" : "Buying Order"}
                                                                </td>
                                                                <td className="hidden md:table-cell text-center text-xs font-bold p-2 dark:text-white">{item.amount} <span className="text-xs font-normal text-gray-400">Stellar</span></td>
                                                                <td className="hidden md:table-cell text-center text-xs font-bold p-2 dark:text-white">{item.price}</td>
                                                                <td onClick={() => { setOrderDetailModal(true) }} className="xs:pointer-events-auto md:pointer-events-none text-center text-sm md:text-xs font-semibold p-2 dark:text-white">{item.total} <span className="text-gray-400 font-normal inline md:hidden">USD</span></td>
                                                                <td className="hidden md:table-cell">
                                                                    <div className="flex w-2/3 float-right justify-around p-2 gap-2">
                                                                        <button onClick={() => { setDeleteOfferModal(true) }} className="w-1/2 bg-[#888888] text-xs text-white rounded-md py-2 px-1 dark:bg-transparent dark:border dark:border-white">Cancel</button>
                                                                        <button onClick={handleEditOfferModal} className="grow bg-[#59DBB5] text-xs text-white rounded-md py-2 px-1">Edit</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="flex overflow-x-auto w-full ">
                                        <table className="w-full table-auto lg:min-w-[900px]">
                                            <thead className="hidden md:contents">
                                                <tr className="bg-[#464646] text-white/70 dark:bg-[#434A77] ">
                                                    <th width="15%" className="p-4 font-light text-sm">Selling / Buying</th>
                                                    <th width="20%" className="p-4 font-light text-sm">Amount</th>
                                                    <th width="20%" className="p-4 font-light text-sm ">Price - USD</th>
                                                    <th width="20%" className="p-4 font-light  text-sm">Total - USD</th>
                                                    {/* <th width="20%" className="p-4 font-light text-sm"></th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-purchart_tr_color_dark">
                                                {
                                                    orderdata.map((item, index) => {
                                                        return (
                                                            <tr key={index}  >
                                                                <td onClick={() => { setOrderDetailModal(true) }} className={`xs:pointer-events-auto md:pointer-events-none flex justify-center text-xs p-2 py-4 ${item.isSell ? "text-[#71DFBF]" : "text-[#F07B9A]"}`}><p className={`text-center p-2 rounded-md w-fit ${item.isSell ? "bg-[#F4FAF8] dark:bg-[#325264]" : "bg-[#F7F0F1] dark:bg-[#5C385B]"}`}>{item.isSell ? "Selling" : "Buying"}</p></td>
                                                                <td onClick={() => { setOrderDetailModal(true) }} className="xs:pointer-events-auto md:pointer-events-none text-sm text-center table-cell dark:text-white md:hidden">
                                                                    {item.isSell ? "Selling Order" : "Buying Order"}
                                                                </td>
                                                                <td className="hidden md:table-cell text-center text-xs font-bold p-2 dark:text-white">{item.amount} <span className="text-xs font-normal text-gray-400">Stellar</span></td>
                                                                <td className="hidden md:table-cell text-center text-xs font-bold p-2 dark:text-white">{item.price}</td>
                                                                <td onClick={() => { setOrderDetailModal(true) }} className="xs:pointer-events-auto md:pointer-events-none text-center text-sm md:text-xs font-semibold p-2 dark:text-white">{item.total} <span className="text-gray-400 font-normal inline md:hidden">USD</span></td>
                                                                {/* <td className="hidden md:table-cell">
                                                                    <div className="flex w-2/3 float-right justify-around p-2 gap-2">
                                                                        <button onClick={() => { setDeleteOfferModal(true); }} className="w-1/2 bg-[#888888] text-xs text-white rounded-md py-2 px-1 dark:bg-transparent dark:border dark:border-white">Cancel</button>
                                                                        <button onClick={handleEditOfferModal} className="grow bg-[#59DBB5] text-xs text-white rounded-md py-2 px-1">Edit</button>
                                                                    </div>
                                                                </td> */}
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <AssetsModal show={assetsModal} handle={setAssetsModal} />
                    <EditSellOffers show={editOffer} handle={setEditOfferModal} />
                    <OrderDetailsModal show={orderDetailModal} handle={setOrderDetailModal} handle1={setEditOfferModal} handle2={setDeleteOfferModal} />
                    <DeleteOfferModal show={deleteOfferModal} handle={setDeleteOfferModal} />
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

export default TradePage;