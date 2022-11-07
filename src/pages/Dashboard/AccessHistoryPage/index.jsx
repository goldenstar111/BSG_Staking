import React, { useContext, useState } from "react";
import { DashboardImageWith } from "../../../components";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { tableData } from "./data";
import AccessDetailsModal from "../../../components/modal/AccessDetails";

const AccessHistoryPage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [tData] = useState(tableData);
    const [accessDatailsModal, setAccessDatailsModal] = useState(false);

    return (
        <main className="gap-5 dark:bg-[#1C203B] p-3  md:px-3 bg-white" id="home-page">
            <div className="mt-3 mb-3">
                <DashboardImageWith />
            </div>
            <div className="mb-3 flex justify-between">
                <div className="flex flex-col pt-3">
                    <h3 className="text-md font-bold mb-2 dark:text-white">
                        Access History
                    </h3>
                    <h6 className="text-xs text-gray-400 ">
                        You are currently accessing StellarLedger from IP address 82.79.68.20
                    </h6>
                </div>
            </div>
            <div className="mt-5 w-full overflow-x-auto">
                <table className="w-full md:min-w-[800px]">
                    <thead className="md:contents xs:hidden">
                        <tr className="bg-[#464646] dark:bg-[#434A77]">
                            <th width="30%" className="text-white font-light sm:text-xs xs:text-xs full p-5">
                                Browser | Device
                            </th>
                            <th width="30" className="text-white font-light sm:text-xs xs:text-xs">
                                IP Address
                            </th>
                            <th width="20%" className="text-white font-light sm:text-xs xs:text-xs ">
                                Date
                            </th>
                            <th width="20%" className="text-white font-light sm:text-xs xs:text-xs ">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-odd_tr_color_dark">
                        {
                            tData.map((trItem, index) => {
                                return (
                                    <tr key={index}  >
                                        <td className="p-2 xs:pointer-events-auto md:pointer-events-none" onClick={() => { setAccessDatailsModal(true); }}>
                                            <div className="xs:border rounded md:border-none flex md:justify-center p-2">
                                                <img src={trItem.img} alt="" width="30" className="mr-3" />
                                                <p className="py-1 text-xs font-bold dark:text-white ">{trItem.browser}</p>
                                            </div>
                                        </td>
                                        <td className="md:table-cell xs:hidden">
                                            <div className="flex justify-center">
                                                <p className="py-1 font-bold text-xs dark:text-white text-center">{trItem.ipAddress}</p>
                                            </div>
                                        </td>
                                        <td className="md:table-cell xs:hidden">
                                            <div className="flex font-bold justify-around px-4 dark:text-white text-xs text-center">
                                                {trItem.date}
                                            </div>
                                        </td>
                                        <td className="md:table-cell xs:hidden">
                                            <div className={` font-bold text-xs  ${trItem.status == "Success" ? "text-green-500" : "text-red-500"}`}>
                                                <p className="  text-center text-xs  ">{trItem.status}</p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <AccessDetailsModal show={accessDatailsModal} handle={setAccessDatailsModal} />
        </main>
    )
}

export default AccessHistoryPage;