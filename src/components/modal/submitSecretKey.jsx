import { useState } from "react";
import images from "../../constants/images";
import BasicModal from "./basicModal"
const SubmitSecretKeyModal = ({ show, handle }) => {
    const [isshow, setShow] = useState(false);
    const handleShow = () => {
        setShow(!isshow);
    }
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md font-bold text-center mb-2">
                            Secret Key
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Keep your account safe by using secret key
                        </h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-2">Security Key</h3>
                <div className="flex">
                    <input type={"text"} className="w-full border p-2 text-sm rounded-md " placeholder="Enter Security Key" />
                    {/* <button className="p-2 border border-l-0 rounded-r-md" onClick={handleShow}><img src={images.UserIcon1} className="bg-[#6B5377] w-6 p-2 rounded-full" alt="" /></button> */}
                </div>

            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex justify-between mt-5">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200  p-2 w-2/5 text-xs flex justify-center" style={{ width: "45%" }}>
                        Cancel
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#8522cc] p-2	text-white text-xs flex justify-center" style={{ width: "45%" }}>
                        Submit
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default SubmitSecretKeyModal;