import { useState } from "react";
import { Footer, Header } from "../../../../components"
import images from "../../../../constants/images";
import { BidList } from "./data";
import NFTHeader from "./NFTHeader";
import { FaPencilAlt } from 'react-icons/fa';

const NFTItemDetail = ({ info }) => {
    const [bidList] = useState(BidList)
    const [menuToggling, setMenuToggling] = useState(false);

    return (
        <main className="dark:bg-[#200A4C] px-0" >
            <NFTHeader menuToggling={menuToggling} setMenuToggling={setMenuToggling} />
            <div className="2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 
                mt-8 mx-12 2xl:mx-40 xl:mx-32 md:mx-16 grid gap-6
                xl:p-16 2xl:p-16 lg:p-14 md:p-10 sm:p-8 xs:p-4 bg-bg_secondary rounded-lg">
                <div className="">
                    <img src={images.nftDetailImg} alt="" className="w-full" />
                </div>
                <div className="2xl:col-span-2">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-3xl font-semibold">Secret Hat</h3>
                            <p>Photography</p>
                        </div>
                        <div>
                            <button className="p-2  bg-[#565656] px-3 text-sm text-white rounded-md flex gap-2 items-center"><FaPencilAlt className="text-white text-xs" />Edit</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3">
                        <div >
                            <h3 className="text-sm text-[#a3aebe] mb-1">Artist</h3>
                            <div className="flex gap-3 items-stretch bg-[#F7F8FC] rounded-md p-1 px-4">
                                <img src={images.detailManImg} alt="" />
                                <h3 className="self-center text-sm text-gray-500">Chris</h3>
                            </div>
                        </div>
                        <div >
                            <h3 className="text-sm text-[#a3aebe] mb-1">Owner</h3>
                            <div className="flex gap-3 items-stretch bg-[#F7F8FC] rounded-md p-1 px-4">
                                <img src={images.detailManImg} alt="" />
                                <h3 className="self-center text-sm text-gray-500">Chris</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="py-2 pt-4 text-[#B8C0CC] text-sm">Description</h3>
                        <p className="py-1 text-[#C2BCBC] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venir am, quis nostrud voluptate velit esse cillum.</p>
                    </div>
                    <div className="pt-4 border-b border-gray-200 pb-3">
                        <h3 className="py-2 text-[#B8C0CC]">Blockchain</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <div className="flex gap-3 items-strech">
                                    <img src={images.nftCoinImg} alt="" />
                                    <h3 className="text-sm text-[#4E7D8C] self-center">Ethereum</h3>
                                </div>
                                <div>
                                    <h3 className="text-xs font-medium py-1">Created on Aug 16,2021</h3>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-0 "> <div><h1 className="text-3xl font-bold">06</h1></div> <div><h1 className="text-center text-3xl text-gray-500">:</h1></div><div><h3 className="text-xs relative left-2 bottom-1 text-gray-500 text-center">Day</h3></div></div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-0 "> <div><h1 className="text-3xl font-bold">30</h1></div> <div><h1 className="text-center text-3xl text-gray-500">:</h1></div><div><h3 className="text-xs text-gray-500 text-center relative left-1 bottom-1">Hours</h3></div></div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-0 "> <div><h1 className="text-3xl font-bold">53</h1></div> <div><h1 className="text-center text-3xl text-gray-500 invisible">:</h1></div><div><h3 className="text-xs text-gray-500 text-center relative left-2 bottom-1">Min</h3></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 grid grid-cols-2 gap-3">
                        <div className="flex gap-x-2">
                            <div className="flex item-strech">
                                <img className="self-center w-5 h-5" src={images.detailImg3} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500 p-1">Owned By</h3>
                                <div className="flex items-stretch gap-x-2 p-1"><div className="p-1 rounded-full bg-[#99CC41] self-center"></div><div><h3 className="text-sm  font-medium text-[#333333]">KHALID SAIED</h3></div></div>

                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="flex item-strech">
                                <img className="self-center" src={images.nftAution} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500 p-1">Highest Bid</h3>
                                <div className="flex items-stretch gap-x-2 p-1"><div><h3 className="text-sm  font-medium text-[#333333]">DAVID S.</h3></div></div>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="flex item-strech">
                                <img className="self-center" src={images.nftPenceil} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500 p-1">Artist</h3>
                                <div className="flex items-stretch gap-x-2 p-1"><div className="p-1 rounded-full bg-gray-400 self-center"></div><div><h3 className="text-sm  font-medium">MUHAMMED ALAA</h3></div></div>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <div className="flex item-strech">
                                <img className="self-center w-5 h-6" src={images.detailImg2} alt="" />
                            </div>
                            <div>
                                <h3 className="text-xs text-gray-500 p-1">Number of Bids</h3>
                                <div className="flex items-stretch gap-x-2 p-1"><div><h3 className="text-sm  font-medium">172</h3></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Place Bid Section */}
                <div className="2xl:col-span-1">
                    <h3 className="text-md font-bold">Place Bid</h3>
                    <p className="text-sm font-medium">Fill the from below to place bid</p>
                </div>
                {/* Bids Section */}
                <div className="2xl:col-span-2 flex justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-lg">Bids</h3>
                        <h3 className="text-sm">400 Bid</h3>
                    </div>
                    <div>
                        <button className="p-3 border rounded-md font-medium text-xs text-gray-500">View All Bids</button>
                    </div>
                </div>
                {/* Input Value Section */}
                <div className="flex flex-col">
                    <div className="pt-4 flex flex-col">
                        <h3 className="text-xs text-gray-500 pb-3">Bid Value</h3>
                        <div className="flex">
                            <input type="text" placeholder="Enter Amount" className=" p-2 w-full border bg-transparent border-gray-300 rounded-md " />
                        </div>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <h3 className="text-xs text-gray-500 pb-3">Currency</h3>
                        <select type="text" placeholder="Enter Amount w-full  " className="p-2 border bg-transparent border-gray-300 rounded-md">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="pt-5 flex">
                        <button className="bg-btn_pink text-xs text-white rounded-md py-3 w-full">Add New Bid</button>
                    </div>
                </div>
                {/* Table  */}
                <div className="2xl:col-span-2">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-sm font-light text-start">Username</th>
                                <th className="text-sm font-light text-start">Bid</th>
                                <th className="text-sm font-light text-start">Payment Method</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                bidList.map((item, index) => {
                                    return (
                                        <tr key={index} className="p-2  border-b">
                                            <td className="pb-4 pt-5 ">
                                                <div className="flex gap-2 items-stretch">
                                                    <img src={item.Img} className="w-10" alt="" />
                                                    <div className="self-center">
                                                        <h3 className="text-xs font-bold">{item.name}</h3>
                                                        <h3 className="text-xs mt-1 text-gray-400">{item.time}</h3>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h3 className="text-xs font-medium">{item.price}</h3>
                                            </td>
                                            <td>
                                                <div className="flex gap-3 items-stretch">
                                                    <img src={item.coinImg} className="w-8" />
                                                    <h3 className="self-center text-xs">{item.coinType}</h3>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </main>
    )
}
export default NFTItemDetail;