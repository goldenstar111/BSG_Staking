import React, { useContext, useEffect, useState } from "react";
import BasicModal from "./basicModal"
import reqBtn from "../../assets/svgs/dark/trans-modal-btn-2.svg"
import images from "../../constants/images";
import ReactTooltip from "react-tooltip";

const ContactDetailsModal = ({ show, handle, handle1, handle2, handle3, handle4 }) => {
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
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-base text-center mb-2 font-bold">
                            Contact Details
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Check the contact info listed below
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col p-3  rounded-lg justify-center">
                <div className="flex items-center min-w-fit xs:px-3 sm:px-3">
                    <img src={images.Avatar} alt="" width="30" className="mr-3" />
                    <p className="py-1 text-xs font-semibold min-w-fit">Rania Ahmed</p>
                </div>
                <div className="p-2 pt-5">
                    <p className="text-xs font-semibold">Wallet Address</p>
                    <div className="flex items-center justify-between xs:px-3 pt-5">
                        <p className="py-1 text-xs">GDNA_HDHANDFDFDOJASDFOSD</p>
                        <button className="rounded-full hover:bg-[#6B5377]/70 bg-[#6B5377] p-3 min-w-fit"
                            data-tip data-for={`registerTip-modal`}
                            onClick={() => { copyToClipboard("GDNA_HDHANDFDFDOJASDFOSD") }}>
                            <img src={images.UserIcon1} className="w-3" alt="" width="15" />
                        </button>
                        <ReactTooltip
                            textColor="#6ed497" backgroundColor="#46938d"
                            id={`registerTip-modal`} delayHide={500} place="left" effect="solid">
                            {!copied ? "Copy address to clipboard" : "Copied to your clipboard"}
                        </ReactTooltip>
                    </div>
                </div>
            </div>
            <div className="modal-footer flex flex-col p-4">
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => { handle(false); handle2(true); }} className="text-sm min-w-fit border border-gray-200 p-2 rounded-md grow">Edit</button>
                    <button onClick={() => { handle(false); handle1(true); }} className="text-sm text-white rounded-md bg-[#EC3868] p-2 min-w-fit px-3 ">Delete</button>
                    <button onClick={() => { handle(false); handle3(true); }} className="text-sm text-white bg-[#59DBB5] min-w-fit p-2 rounded-md grow" >Receive</button>
                    <button onClick={() => { handle(false); handle4(true); }} className="text-sm text-white bg-[#8522cc] min-w-fit p-2 rounded-md grow" >Send</button>
                </div>
            </div>
        </BasicModal>
    )
}
export default ContactDetailsModal;