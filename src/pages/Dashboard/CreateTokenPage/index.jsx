import React, { useContext, useState } from "react";
import TokenImg from "../../../assets/png/tokenImg.png"
import upBtnImg from "../../../assets/png/uploadImg.png"
import images from "../../../constants/images";
import RemoveStealler from "../../../components/modal/RemoveStealler";

const CreateToken = () => {
    const [removeStealler, setRemoveSteallerModal] = useState(false);

    return (
        <main className="dark:bg-[#1C203B] bg-white dark:text-white grid-cols-1 p-12">
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold pt-6 pb-2">Create Token</h3>
                <p className="text-xs dark:text-gray-300 text-gray-600">Check our crypto market for latest updates</p>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="col-span-2 xl:col-span-1 flex flex-col">
                    <div className="flex px-4 items-center mt-5 pb-6">
                        <div className=" box-content outline flex justify-center p-8 bg-gray-500 outline-[#2e395f]/90 outline-8 rounded-lg">
                            <img src={TokenImg} className="w-16 h-14" alt="" />
                        </div>
                        <div className="grow-0">
                            <button className="ml-9 bg-[#a015e3] hover:bg-[#a015e3]/80 p-3 px-4 text-xs text-white rounded-lg flex ">
                                <img src={upBtnImg} className="pr-2" alt="" />
                                Upload Image
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <h3 className="py-2 text-sm text-gray-600 dark:text-gray-300">Access Code</h3>
                        <input type="text" className="border w-full p-2 px-4 rounded-md dark:bg-transparent dark:border-gray-400 dark:text-white" defaultValue="" placeholder="Asset Code" />
                    </div>
                    <div className="flex flex-col py-2">
                        <h3 className="py-2 text-sm text-gray-600 dark:text-gray-300">Address</h3>
                        <input type="text" className="border p-2 px-4 rounded-md dark:bg-transparent dark:border-gray-400 dark:text-white" defaultValue="" placeholder="Address" />
                    </div>
                    <div className="flex flex-col py-2">
                        <h3 className="py-2 text-sm text-gray-600 dark:text-gray-300">Distribuitor</h3>
                        <input type="text" className="border p-2 px-4 rounded-md dark:bg-transparent dark:border-gray-400 dark:text-white" defaultValue="" placeholder="Distribuitor" />
                    </div>
                    <div className="flex flex-col py-2">
                        <h3 className="py-2 text-sm text-gray-600 dark:text-gray-300">Home Domain</h3>
                        <input type="text" className="border p-2 px-4 rounded-md dark:bg-transparent dark:border-gray-400 dark:text-white" defaultValue="" placeholder="Home Domain" />
                    </div>
                </div>
                <div className="col-span-2 xl:col-span-1 dark:bg-[#303559] p-12 rounded-md">
                    <h3 className="text-black font-bold text-5xl p-1 dark:text-white ">Rules for issuing</h3>
                    <h3 className="text-black font-bold text-5xl p-1 dark:text-white"> new asset</h3>
                    <div className="pt-5 flex flex-col gap-4">
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>1&nbsp;</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>2</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>3</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>4</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md  " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>5</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                        <div className="flex">
                            <span className="py-2 px-4 text-sm text-white bg-pink-400 rounded-md " style={{ background: `url(${images.tokenLabel})`, backgroundSize: `100% 100%` }}>6</span>
                            <p className="pl-4 text-sm dark:text-gray-100 text-gray-600 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem perspiciatis unde omnis iste natu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-[#434a77] mt-5 rounded-xl ">
                <h3 className="text-sm font-bold text-white">Rules for issuing new asset</h3>
                <p className="text-xs text-white py-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiexplicabo. Nemo enim ipsam volup
                    tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma giur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ras
                    ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ap
                </p>
                <p className="text-xs text-white py-4">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiexplicabo. Nemo enim ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma giur aut odit aut fugi
                </p>
            </div>
            <div className="flex justify-between pt-4">
                <button onClick={() => setRemoveSteallerModal(true)} className="bg-btn_pink hover:bg-btn_pink/80 p-3 px-4 text-xs text-white rounded-md">Remove Stellar Account</button>
                <button className="bg-btn_red hover:bg-btn_red/80 p-3 px-4 text-xs text-white rounded-md">Submit Token</button>
            </div>
            <RemoveStealler show={removeStealler} handle={setRemoveSteallerModal} />
        </main>
    )
}
export default CreateToken;