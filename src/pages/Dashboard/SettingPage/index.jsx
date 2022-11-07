import React, { useContext, useState } from "react";
import images from "../../../constants/images";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import CheckBox from "../../../components/checkbox";
import EditAddressModal from "../../../components/modal/EditAddress";
import SecretKeyModal from "../../../components/modal/SecretKeyModal";
import RemoveStealler from "../../../components/modal/RemoveStealler";
import ResetPasswordModal from "../../../components/modal/ResetPasswordModal";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SubmitSecretKeyModal from "../../../components/modal/submitSecretKey";

const SettingPage = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [editModal, setEditModal] = useState(false);
    const [secretModal, setSecretModal] = useState(false);
    const [subSecretModal, seSubSecretModal] = useState(false);
    const [removeStealler, setRemoveSteallerModal] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);

    const handleEditAddress = () => {
        setEditModal(true);
    }
    const handleSecretModal = () => {
        setSecretModal(true);
    }
    const handleRemoveSteallerModal = () => {
        setRemoveSteallerModal(true);
    }
    const handleResetPassword = () => {
        setResetPassword(true);
    }
    const handleSubSecretKey = () => {
        seSubSecretModal(true);
    }

    return (
        <main className="gap-5 dark:bg-[#1C203B] p-3 bg-white" id="home-page">
            <div className="p-4 pt-12">
                <h3 className="text-md text-black font-bold dark:text-white">User Manage</h3>
                <div className="pt-6">
                    <Tabs>
                        <TabList>
                            <div className="mb-3 flex justify-between pb-4 border-gray-300 cursor-pointer">
                                <div >
                                    <div className="flex flex-row">
                                        <div className="flex flex-row justify-between">
                                            <Tab className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Wallet</Tab>
                                            <Tab className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Profile</Tab>
                                            <Tab className={`text-sm px-3 border-b-gray-200 border-b-2 text-gray-500  ${!isToggle ? 'dark' : 'white'}`}>Notifications</Tab>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabList>

                        <TabPanel >
                            <div className="overflow-auto min-h-[500px]">
                                <div className="py-5 flex flex-col gap-3  ">
                                    <div className="bg-[#636363] p-4 rounded-md dark:bg-[#2E395F] ">
                                        <h3 className="text-sm text-gray-300 font-light p-1">Stellar Account</h3>
                                        <h3 className="text-sm text-white p-1">Account holds all your funds on stellar network</h3>
                                    </div>
                                    <div className="flex justify-between p-4 bg-[#636363] dark:bg-[#2E395F] rounded-md items-stretch">
                                        <div>
                                            <h3 className="text-sm text-gray-300 font-light p-1 items-stretch">Stellar Address</h3>
                                            <h3 className="text-sm text-white p-1">GDNAJRWQKRYH HFASYDAHD HBSANCHSAD GFHSDHAS </h3>
                                        </div>
                                        <div className="p-2 self-center">
                                            <Popup trigger={
                                                <button className="bg-[#9c84a8] hover:bg-[#9c84a8]/50 p-2 rounded-full w-7 h-7">
                                                    <img src={images.UserIcon1} className="w-3 h-3" alt="" />
                                                </button>
                                            } position="left center">
                                                <div className="bg-[#46938d] text-[#59dbb5] text-xs p-4">Copied to Clipboard</div>
                                            </Popup>
                                        </div>
                                    </div>
                                    <div className="flex justify-between p-4 bg-[#636363] dark:bg-[#2E395F] rounded-md items-stretch">
                                        <div>
                                            <h3 className="text-sm text-gray-300 font-light p-1">Federation Address</h3>
                                            <h3 className="text-sm text-white p-1 ">Adrix-Lobstr.co</h3>
                                        </div>
                                        <div className="pr-2 self-center">
                                            <button className="bg-[#a015e3] p-2 rounded-full" onClick={handleEditAddress}><img src={images.UserIcon2} className="w-3" alt="" /></button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between p-4 bg-[#636363] dark:bg-[#2E395F] rounded-md items-stretch ">
                                        <div>
                                            <h3 className="text-sm text-gray-300 font-light p-1">Secret Key</h3>
                                            <h3 className="text-sm text-white p-1 ">Your Secret Key is Hidden - Verify to Reveal</h3>
                                        </div>
                                        <div className="pr-2 self-center">
                                            <button className="bg-[#59dbb5] p-[0.4rem] rounded-full w-7 h-7" onClick={handleSecretModal}><img src={images.UserIcon3} className alt="" /></button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between p-4 bg-[#636363] dark:bg-[#2E395F] rounded-md items-stretch">
                                        <div>
                                            <h3 className="text-sm text-gray-300 font-light p-1">Currency</h3>
                                            <h3 className="text-sm text-white p-1 ">USD - US Dollar</h3>
                                        </div>
                                        <div className="pr-2 self-center">
                                            <button className=" p-1 text-pink-500/70 text-xs">Change Currency</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-5 flex justify-between flex-col md:flex-row gap-3">
                                    <button className="bg-[#ec3868] hover:bg-[#ec3868]/70 text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md"
                                        onClick={handleRemoveSteallerModal}>Remove Stellar Account</button>
                                    <button className="bg-[#a015e3] hover:bg-[#a015e3]/70 text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md"
                                        onClick={() => console.log('a')}>Save Current Changes</button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="py-5 grid grid-cols-12 gap-3 place-content-start min-h-[500px]">
                                <div className="py-2 col-span-12 md:col-span-6  flex flex-col ">
                                    <p className="text-xs pb-2  text-gray-400">First Name</p>
                                    <input type="text" className="w-full border p-2 rounded-md pl-5 sm:text-sm xs:text-xs dark:bg-transparent  dark:border-gray-400 dark:text-white " defaultValue="khalid" />
                                </div>
                                <div className="py-2 col-span-12 md:col-span-6  flex flex-col ">
                                    <p className="text-xs pb-2  text-gray-400">Last Name</p>
                                    <input type="text" className="w-full border p-2 rounded-md pl-5 dark:bg-transparent sm:text-sm xs:text-xs  dark:border-gray-400 dark:text-white " defaultValue="Saied Abdelmonem" />
                                </div>
                                <div className="py-2 col-span-12 md:col-span-6  flex flex-col">
                                    <p className="text-xs pb-2  text-gray-400">AccountEmail</p>
                                    <input type="text" className="w-full border p-2 rounded-md pl-5 dark:bg-transparent sm:text-sm xs:text-xs  dark:border-gray-400 dark:text-white " defaultValue={"Mist4227s@gmail.com"} />
                                </div>
                                <div className="py-2 col-span-12 md:col-span-6  flex flex-col">
                                    <p className="text-xs pb-2  text-gray-400">Password</p>
                                    <div className="flex">
                                        <input type="password" className="grow border border-r-0 p-2 rounded-l-md pl-5 dark:bg-transparent sm:text-sm xs:text-xs dark:border-gray-400 dark:text-white " defaultValue="aaaaaa" readOnly />
                                        <button onClick={() => handleResetPassword()} className="text-xs p-2 dark:border-gray-400 border border-l-0 rounded-r-md text-[#cf76fa]">Change Password</button>
                                    </div>
                                </div>
                                <div className="py-2 col-span-12  md:col-span-6  flex flex-col">
                                    <p className="text-xs pb-2 text-gray-400">Phone Number</p>
                                    <div className="flex">
                                        <input type="text" className="grow border border-r-0 p-2 rounded-l-md pl-5 dark:bg-transparent sm:text-sm xs:text-xs dark:border-gray-400 dark:text-white " defaultValue="+20 12 7463 8273 43" />
                                        <button className="text-xs p-2 dark:border-gray-400 border border-l-0 rounded-r-md text-[#cf76fa]">Connect Number</button>
                                    </div>
                                </div>
                                <div className="col-span-12 mt-5 flex justify-between flex-col md:flex-row gap-3">
                                    {/* <button className="bg-[#ec3868] text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md" onClick={handleRemoveSteallerModal}>Remove Stellar Account</button> */}
                                    <button className="bg-[#a015e3] hover:bg-[#a015e3]/70 text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md"
                                        onClick={() => console.log("a")}>Save Current Changes</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="overflow-x-auto md:min-h-[500px]">
                                <div className="container flex flex-col py-5 gap-2 pl-4 w-full md:min-w-[500px]">
                                    <div className="py-2">
                                        <CheckBox title={"Important Email Updates From StellarLedgar"} />
                                    </div>
                                    <div className="py-2">
                                        <CheckBox title={"New Transactions Email Updates"} />
                                    </div>
                                    <div className="py-2">
                                        <CheckBox title={"Email Updates and Push Notifications for Small Payments"} />
                                    </div>
                                    <div className="py-2">
                                        <CheckBox title={"Alerts and Notifications for New Pending Payments"} />
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-between flex-col md:flex-row gap-3 fixed md:relative bottom-6 md:bottom-0 w-[88%] md:w-auto">
                                    {/* <button className="bg-[#ec3868] text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md" onClick={handleRemoveSteallerModal}>Remove Stellar Account</button> */}
                                    <button className="bg-[#a015e3] hover:bg-[#a015e3]/70 text-white text-xs py-3 xl:px-5 xs:px-1 rounded-md"
                                        onClick={() => console.log("a")}>Save Current Changes</button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <EditAddressModal show={editModal} handle={setEditModal} />
            <SecretKeyModal show={secretModal} handle={setSecretModal} showSubModal={seSubSecretModal} />
            <SubmitSecretKeyModal show={subSecretModal} handle={seSubSecretModal} />
            <RemoveStealler show={removeStealler} handle={setRemoveSteallerModal} />
            <ResetPasswordModal show={resetPassword} handle={setResetPassword} />
        </main>
    )
}

export default SettingPage;