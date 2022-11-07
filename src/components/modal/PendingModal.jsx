import BasicModal from "./basicModal";
import images from "../../constants/images";
import SentModalIcon from "../../assets/png/sentModalIcon.png";
const PendingModal = ({ show, handle, curItem }) => {
    // console.log("curItem------", curItem);
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex justify-between border-b border-b-gray-200 mb-5">
                    <div className="flex ">
                        <div className="mr-2 py-2">
                            <img src={SentModalIcon} alt="" width={35} />
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-xs text-black ">
                                Lumens
                            </h6>
                            <h3 className="text-xl font-bold font-['poppins] mb-2">
                                1,384 <span className="text-xs text-gray-300 font-light">XLM</span>
                            </h3>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#e2d627] text-sm p-2 bg-[#e2d627]/[0.0299] rounded-md">Pending</p>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col py-3 rounded-lg justify-center">
                <div className="grid md:grid-cols-2 xs:grid-cols-1">
                    <div className="col-span-1 p-2 rounded-lg">
                        <label className="text-xs text-gray-700">Receive From</label>
                        <p className="flex border text-sm py-2 px-5 items-stretch leading-6 rounded-md"><img src={images.tableAvatar} className="w-6 self-center rounded-full mr-1" alt="" /><span className="self-center">Rania Ahmed</span>   </p>
                    </div>
                    <div className="col-span-1 p-2 rounded-md">
                        <label className="text-xs text-gray-700">Date</label>
                        <p className="border text-sm py-2 px-5 leading-6 rounded-md">22th, April 2021</p>
                    </div>
                    <div className="col-span-1 p-2 rounded-md">
                        <label className="text-xs text-gray-700 py-2 font-medium">Estimated Value <span className="text-gray-300">USD</span></label>
                        <p className="border text-sm py-2 px-5 rounded-md">$ 1,029</p>
                    </div>
                    <div className="col-span-1 p-2 rounded-md">
                        <label className="text-xs text-gray-700 py-2 font-medium">Available to claim until</label>
                        <p className="border text-xs py-2 leading-6 px-5 rounded-md">3rd, June 2021 <span className="text-gray-400 text-xs">|</span> 01:30 AM </p>
                    </div>
                    <div className="md:col-span-2 xs:col-span-1 p-2 md:block xs:hidden">
                        <label className="text-xs text-gray-700 py-2 font-medium">Claim Conditions</label>
                        <div className="border text-xs py-4 px-5 rounded-md">
                            <p className="mb-1 text-xs font-medium">You can claim this payment within a time spam set by the sender</p>
                            <p className="text-xs font-medium"> Once claimed, the tokens will be credited to your balance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer flex flex-col">
                <div className="md:flex xs:hidden gap-2">
                    <button onClick={handleCancel} className="grow rounded-lg border border-slate-200 py-3 px-3 basis-1/6 text-xs flex justify-center" >
                        Close
                    </button>
                    <button onClick={handleCancel} className="grow rounded-lg  bg-[#8522CC] py-3 text-white text-xs flex justify-center px-3 basis-1/2" >
                        View on Network Explorer
                    </button>
                    <button onClick={handleCancel} className="grow rounded-lg  bg-[#59DBB5] py-3 text-white text-xs flex justify-center px-3 basis-1/6">
                        Claim
                    </button>
                </div>
                <div className="xs:grid grid-cols-2 gap-2 md:hidden">
                    <button onClick={handleCancel} className="col-span-1 grow rounded-lg border border-slate-200 py-3 px-3 basis-1/6 text-xs flex justify-center" >
                        Close
                    </button>
                    <button onClick={handleCancel} className="col-span-1 grow rounded-lg bg-[#59DBB5] py-3 text-white text-xs flex justify-center px-3 basis-1/6">
                        Claim
                    </button>
                    <button onClick={handleCancel} className="col-span-2 grow rounded-lg bg-[#8522CC] py-3 text-white text-xs flex justify-center px-3 basis-1/2" >
                        View on Network Explorer
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default PendingModal;