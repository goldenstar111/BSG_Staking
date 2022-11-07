import BasicModal from "./basicModal";
import SentModalIcon from "../../assets/png/sentModalIcon.png";
import images from "../../constants/images";
const SentModal = ({ show, handle, curItem }) => {
    // console.log("curItem------", curItem);
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle} >
            <div className="modal-header">
                <div className="flex justify-between border-b border-b-gray-200 mb-5">
                    <div className="flex items-center mb-2">
                        <div className="mr-2 ">
                            <img src={SentModalIcon} alt="" width={35} />
                        </div>
                        <div className="flex flex-col align-middle">
                            <h6 className="text-xs text-black ">
                                Lumens
                            </h6>
                            <h3 className="text-xl font-bold  ">
                                1,384 <span className="text-sm text-gray-300 font-light">XLM</span>
                            </h3>
                        </div>

                    </div>
                    <div>
                        <p className="text-red-500 text-sm p-2 bg-[#FFFCFD] rounded-md">Sent</p>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col p-3 sm:p-1 xs:p-1 rounded-lg justify-center">
                <form className="flex flex-col">
                    <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-2 ">
                        <div className="flex flex-col mb-5 ">
                            <label className="mb-2 text-xs text-gray-700">Sent to</label>
                            <p className=" flex  border text-sm py-2 px-5 items-stretch leading-6 rounded-md"><img src={images.tableAvatar} className="w-6 self-center rounded-full mr-1" alt="" /><span className="self-center">Rania Ahmed</span>   </p>
                        </div>
                        <div className="flex flex-col mb-5 ">
                            <label className="mb-2 text-xs text-gray-700">Date</label>
                            <p className=" border text-sm py-2 px-5 leading-6 rounded-md">22th, April 2021</p>
                        </div>
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="mb-2 text-xs text-gray-700 py-2 font-medium">Public Key</label>
                        <input value="GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHASURIW" className=" border text-sm py-2 px-5 sm:py-3 sm:text-xs xs:text-xs rounded-md"></input>
                    </div>
                    <div className="flex flex-col py-3">
                        <label className="mb-2 text-xs text-gray-700 py-2 font-medium">Transaction Hash</label>
                        <input value="GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHASURIW" className=" border text-sm py-2 px-5 sm:py-3 sm:text-xs xs:text-xs rounded-md"></input>
                    </div>

                </form>
            </div>
            <div className="modal-footer flex flex-col mt-5">
                <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-2">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200 p-3  text-sm flex justify-center" >
                        Close
                    </button>
                    <button onClick={handleCancel} className="rounded-lg bg-[#8522CC] p-3	text-white text-sm flex justify-center" >
                        View on Network Explorer
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default SentModal;