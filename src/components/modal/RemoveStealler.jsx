import BasicModal from "./basicModal"
import React, { useState } from "react";
import images from "../../constants/images";

const RemoveStealler = ({ show, handle }) => {
    const [isshow, setShow] = useState(false);

    const handleCancel = () => {
        handle(false);
    }

    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md font-bold text-center mb-2">
                            Remove Stellar Account
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Are you sure you want to remove stellar account
                            permanently, this can't be reversed
                        </h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-2">Enter Password</h3>
                <div className="flex">
                    <input type={!isshow ? "password" : "text"}
                        className="w-full border p-2 text-base rounded-l-md rounded-r-0 border-r-0"
                        placeholder="Enter Federation Address" defaultValue={"aaaaa"} />
                    <button className="p-2 border border-l-0 rounded-r-md"
                        onClick={() => setShow(!isshow)}>
                        <img src={images.UserIcon3} className="bg-[#6B5377] w-6 p-1 rounded-full" alt="" />
                    </button>
                </div>
                {/* <input type="password" className="border p-2 text-sm rounded-md" placeholder="Enter Password" defaultValue={"aaaaa"} /> */}
            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex justify-between mt-5 gap-3">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200  p-3 text-xs flex justify-center w-1/2" >
                        No, Thanks
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#ec3868] p-3	text-white text-xs flex justify-center w-1/2 " >
                        Yes, Please
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default RemoveStealler;