import { useContext, useState } from "react";
import { DashboardImageWith } from "../../../components";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { ExtraTradeData } from "./data";
import images from "../../../constants/images";
import CoinDetailsModal from "../../../components/modal/CoinDetails";

const StellerLedgerMarket = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [extraData]= useState(ExtraTradeData);
    const [coinDetailsModal, setCoinDetailsModal] = useState(false);

    const setBackground = (index,item)=>{
        if(index%2){
            if(item.Balance){
                return isToggle?"text-white bg_gradient_1":"dark:bg-[#452A6E]"
            }else{
                return "dark:bg-[#292D47] bg-odd_tr_color_white";
            }
        }else{
            if(item.Balance){
                return isToggle?"  text-white bg_gradient":"dark:bg-[#391D65] ";
            }else{
                return "dark:bg-[#1C203B] ";
            }
        }
    }
    return (
        <main className="gap-5 dark:bg-[#1C203B] p-6 md:p-3 md:min-h-screen bg-white">
            <DashboardImageWith />
            <div className="grid grid-cols-1 mt-3">
                <div className="flex justify-between items-start flex-col md:flex-row gap-3">
                    <div>
                        <h3 className="font-semibold text-xl dark:text-white py-2">StellerLedger Market</h3>
                        <h3 className="text-xs text-gray-300 pb-3">Check our crypto market for latest updates</h3>
                    </div>
                    <div className="flex justify-end">
                        <div htmlFor="" className="bg-slate-100/70 text-sm p-0 px-2 md:p-2 dark:bg-[#283150] rounded-l-md"><img className="py-3 pl-2" src={!isToggle?images.searchDark:images.searchLight} alt="" /></div>
                        <input type="text" placeholder="Search Contacts" className="p-0 md:p-2 dark:text-white text-sm focus:border-0 bg-slate-100/70 dark:bg-[#283150] rounded-r-md"/>
                    </div>
                </div>
                <div className="pt-3 w-full overflow-x-auto">
                    <table className="lg:min-w-[800px] w-full">
                        <thead className="hidden lg:contents lg:w-full">
                            <tr className="bg-[#464646] dark:bg-[#434A77]">
                                <th className="text-sm text-white p-3 font-light">Coin Name</th>
                                <th className="text-sm text-white p-3 font-light">Price</th>
                                <th className="text-sm text-white p-3 font-light">24H Change</th>
                                <th className="text-sm text-white p-3 font-light">24H Volume</th>
                                <th className="text-sm text-white p-3 font-light">Market Cap</th>
                                <th className="text-sm text-white p-3 font-light">Balance</th>
                                <th className="text-sm text-white p-3 font-light"></th>
                            </tr>
                        </thead>
                        <tbody /* className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:opacity-40" */>
                            {
                                extraData.map((item,index)=>{
                                    return(
                                        <tr key={index} className={`${setBackground(index,item)}`}>
                                            <td onClick={()=>{setCoinDetailsModal(true)}}  className="xs:pointer-events-auto md:pointer-events-none p-5 flex ">
                                                <img src={item.coinImg} className="w-4 mr-4"/>
                                                <h3 className="text-center text-xs dark:text-white">
                                                    <span className="font-bold">{item.symbol}</span> 
                                                    <span className="text-gray-400"> | </span> 
                                                    <span className="text-gray-500">{item.curName}</span>
                                                </h3>
                                            </td>
                                            <td className="hidden lg:table-cell text-center text-xs font-bold dark:text-white">{item.price}</td>
                                            <td  className="hidden lg:table-cell text-center text-xs text-[#59DBB5]">{item.change}%</td>
                                            <td  className="hidden lg:table-cell text-center text-xs font-bold dark:text-white">$ {item.volume} M</td>
                                            <td  className="hidden lg:table-cell text-center text-xs font-bold dark:text-white">$ {item.marketCap} B</td>
                                            <td  className={`hidden lg:table-cell text-center text-xs dark:text-white `}> <p className={`${item.Balance?"p-2 bg-[#4395dc]/40 w-fit mx-auto px-4 rounded-md":""}`}>{item.Balance?"$ "+item.Balance:""}</p></td>
                                            <td  className="hidden lg:table-cell text-center text-xs">
                                                <div className="flex justify-evenly">
                                                    <button className="border rounded-md text-xs  dark:text-white py-2 px-4 ">Add Asset</button>
                                                    <button className="border rounded-md text-xs  dark:text-white py-2 px-4 ">Send</button>
                                                    <button className="bg-[#59dbb5] border rounded-md text-xs text-white py-2 px-4">Trade</button>
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
            <CoinDetailsModal show={coinDetailsModal} handle={setCoinDetailsModal} />
        </main>
    )
}
export default StellerLedgerMarket;