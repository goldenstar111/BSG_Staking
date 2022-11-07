import React, { useContext, useEffect, useState } from "react";
import { DashboardImageWith } from "../../../components";
import images from "../../../constants/images";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import { tableData } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactModal from "../../../components/modal/ContactModal";
import DeleteModal from "../../../components/modal/DeleteContact";
import EditContactModal from "../../../components/modal/EditContact";
import RequestMoneyModal from "../../../components/modal/RequestModal";
import SendPaymentModal from "../../../components/modal/SendPayment";
import ContactDetailsModal from "../../../components/modal/ContactDetails";
import Popup from 'reactjs-popup';
import ReactTooltip from "react-tooltip";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const ContactsPage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [tData] = useState(tableData);
    const [showContact, setShowContact] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editContactModal, setEditContactModal] = useState(false);
    const [requestModal, setRequestModal] = useState(false);
    const [sendPaymentModal, setSendPaymentModal] = useState(false);
    const [contactDetailsModal, setContactDetailsModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const delay = (time) => {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const copyToClipboard = (txt) => {
        navigator.clipboard.writeText(txt);
        setCopied(true);
        delay(1500).then(() => setCopied(false));
    }

    return (
        <main className="dark:bg-[#1C203B] bg-white py-3 px-8 lg:px-3" id="home-page">
            <div className="mt-3 mb-3">
                <DashboardImageWith />
            </div>
            <div className="mb-3 flex xs:justify-between xs:flex-row xs:gap-2">
                <div className="flex flex-col pt-3">
                    <h3 className="text-md font-bold  mb-2 dark:text-white">
                        Contacts
                    </h3>
                    <h6 className="text-xs text-gray-400 ">
                        View your contacts and make transactions
                    </h6>
                </div>
                <div className="flex flex-row items-stretch xs:justify-end lg:p-1">
                    <div className="mr-5 xs:hidden md:flex">
                        <div className=" flex text-sm   p-4 bg-slate-100/70 dark:bg-[#283150] rounded-l-md items-stretch"><img src={!isToggle ? images.searchDark : images.searchLight} alt="" className="self-center xs:w-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 2xl:w-4 3xl:w-4 " /></div>
                        <input type="text" placeholder="Search Contacts" className="p-2 sm:p-1 xs:p-1 xs:text-xs dark:text-white text-sm focus:border-0 bg-slate-100/70 dark:bg-[#283150] rounded-r-md xl:w-64" />
                    </div>
                    <div className="self-center xs:pr-2">
                        <button onClick={() => { setShowContact(true); }} className="items-center rounded-lg bg-[#8522CC] p-3 xs:p-3 lg:text-sm xs:text-xs sm:text-xs text-white text-sm flex justify-center w-full">
                            <img src={images.AddIcon} alt="" width={14} height={14} className="sm:mr-2" />
                            <p className="sm:block xs:hidden">Add Contact</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mr-5 flex md:hidden">
                <div className=" flex text-sm   p-4 bg-slate-100/70 dark:bg-[#283150] rounded-l-md items-stretch"><img src={!isToggle ? images.searchDark : images.searchLight} alt="" className="self-center xs:w-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 2xl:w-4 3xl:w-4 " /></div>
                <input type="text" placeholder="Search Contacts" className="p-2 sm:p-1 xs:p-1 xs:text-xs dark:text-white text-sm focus:border-0 bg-slate-100/70 dark:bg-[#283150] rounded-r-md xl:w-64" />
            </div>
            <div className="mt-5 xs:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  overflow-x-auto ">
                <table className="w-full">
                    <thead className="hidden md:contents md:w-full">
                        <tr className="bg-[#464646] dark:bg-[#434A77]">
                            <th width="20.5%" className="text-white min-w-max font-light md:text-sm sm:text-xs xs:text-xs  p-5">
                                User Name
                            </th>
                            <th width="47.5%" className="text-white font-light md:text-sm sm:text-xs xs:text-xs">
                                Wallet Address
                            </th>
                            <th width="27%" className="text-white font-light md:text-sm sm:text-xs xs:text-xs ">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="nth-child-2n:bg-odd_tr_color_white dark:nth-child-2n:bg-odd_tr_color_dark">
                        {
                            tData.map((trItem, index) => {
                                return (
                                    <tr key={index}>
                                        <td onClick={() => { setContactDetailsModal(true) }} className="xs:pointer-events-auto md:pointer-events-none justify-center min-w-fit lg:p-4 md:p-3 xs:p-1 items-center">
                                            <div className="border rounded md:border-none dark:border-indigo-600 xs:p-2 flex md:justify-center items-center min-w-fit md:px-3">
                                                <img src={trItem.img} alt="" width="30" className="mr-3" />
                                                <p className="py-1 text-xs font-bold dark:text-white min-w-fit">{trItem.name}</p>
                                            </div>
                                        </td>
                                        <td className="justify-center hidden md:inline">
                                            <div className="flex items-center justify-center xs:px-3">
                                                <p className="py-1 mr-3 text-xs dark:text-white">{trItem.walletAddress}</p>
                                                <button data-tip data-for={`registerTip${index}`}
                                                    onClick={() => { copyToClipboard(trItem?.walletAddress) }}
                                                    className="rounded-full bg-[#6B5377] hover:bg-[#6B5377]/70 p-3 min-w-fit">
                                                    <img src={images.UserIcon1} className="w-3" alt="" width="15" />
                                                </button>
                                                <ReactTooltip
                                                    textColor="#6ed497" backgroundColor="#46938d"
                                                    id={`registerTip${index}`} delayHide={500} place="left" effect="solid">
                                                    {!copied ? "Copy address to clipboard" : "Copied to your clipboard"}
                                                </ReactTooltip>
                                            </div>
                                        </td>
                                        <td className="min-w-fit hidden md:table-cell">
                                            <div className="flex justify-between gap-3 px-4">
                                                <button onClick={() => { setDeleteModal(true); }} className="rounded-md bg-[#EC3868] p-2 min-w-fit px-3 "><img src={images.BtnDelete} className="w-3" alt="" width="15" /></button>
                                                <button onClick={() => { setEditContactModal(true); }} className="dark:text-white min-w-fit border border-gray-200  px-5 py-2 text-xs rounded-md grow">edit</button>
                                                <button onClick={() => { setRequestModal(true); }} className=" text-white bg-[#59DBB5] min-w-fit  px-4 text-xs rounded-md grow" >Receive</button>
                                                <button onClick={() => { setSendPaymentModal(true); }} className=" text-white bg-[#8522cc]  min-w-fit px-5 text-xs rounded-md grow" >Send</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ContactModal show={showContact} handle={setShowContact} />
            <DeleteModal show={deleteModal} handle={setDeleteModal} />
            <EditContactModal show={editContactModal} handle={setEditContactModal} />
            <RequestMoneyModal show={requestModal} handle={setRequestModal} />
            <SendPaymentModal show={sendPaymentModal} handle={setSendPaymentModal} />
            <ContactDetailsModal show={contactDetailsModal} handle={setContactDetailsModal}
                handle1={setDeleteModal} handle2={setEditContactModal}
                handle3={setRequestModal} handle4={setSendPaymentModal} />
        </main>
    )
}

export default ContactsPage;