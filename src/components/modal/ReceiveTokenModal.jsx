
import QRCode from "react-qr-code";
import BasicModal from "./basicModal"
import copBtn from "../../assets/svgs/dark/tran-modal-btn-1.svg"
import reqBtn from "../../assets/svgs/dark/trans-modal-btn-2.svg"
const ReceiveTokenModal = ({ show, handle, handleRequest, hideModal }) => {
    const onHandle = () => {
        hideModal()
        handle(false);
    }
    const onRequest = () => {
        hideModal()
        handle(false)
        handleRequest(true);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="sm:flex p-3 sm:justify-between">
                    <div className="py-2">
                        <h3 className="text-lg font-semibold xs:text-center sm:text-left pb-2">
                            Receive Tokens
                        </h3>
                        <h6 className="text-xs text-gray-400 xs:text-center sm:text-left">
                            Sending funds to your wallet is fast and easy
                        </h6>
                    </div>
                    {/* <div className="sm:flex justify-center p-1">
                        <button className="px-3 py-0 bg-[#200A4C] text-white rounded-md text-sm xs:w-full xs:py-1">Steller Address</button>
                    </div> */}
                </div>
            </div>
            <div className="modal-body felx flex-col p-3 bg-[#FAFAFA] rounded-lg justify-center">
                <h3 className="text-center mb-5 text-sm font-bold">Send from Your Wallet</h3>
                <div className=" flex justify-center">
                    <QRCode value="hey" size={128} />
                </div>
                <h5 className="text-center mt-5 text-sm font-bold">Your Wallet Account ID</h5>
                <div className="sm:flex sm:justify-center ">
                    <div className="flex">
                        <input type="text" className="ml-auto mr-auto mt-1 rounded-md  leading-4 " />
                    </div>
                    <button onClick={onHandle} className="xs:w-full sm:hidden flex justify-center relative px-1  items-center rounded-lg md:text-xs sm:text-xs xs:text-xs  bg-[#8522CC] p-2	text-white text-sm " >
                        <span className="absolute left-2"><img src={copBtn} width="12" className="min-w-[18px]" /></span> <span className="">Copy Address</span>
                    </button>
                </div>
            </div>
            <div className="modal-footer flex flex-col p-3">
                <h5 className="text-center  text-xs text-gray-400">Steler address or public key is used to identify your account on the network. It can be safety shared to receive funds</h5>
                <div className="sm:flex sm:justify-between mt-5 gap-3">
                    <button onClick={onRequest} className="xs:w-full xs:mb-3 sm:mb-0 justify-center relative flex px-1 items-center rounded-lg border md:text-xs xs:text-xs  sm:text-xs border-slate-200 p-2 w-2/5 text-sm  " >
                        <span className="absolute left-2"><img src={reqBtn} width="12" className=" min-w-[18px]" /></span><span className=""> Request Money</span>
                    </button>
                    <button onClick={onHandle} className="xs:w-full flex justify-center relative px-1  items-center rounded-lg md:text-xs sm:text-xs xs:text-xs  bg-[#8522CC] p-2	text-white text-sm " >
                        <span className="absolute left-2"><img src={copBtn} width="12" className="min-w-[18px]" /></span> <span className="">Copy Address</span>
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}

export default ReceiveTokenModal;