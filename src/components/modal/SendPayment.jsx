
import BasicModal from "./basicModal"
import avatar from "../../assets/avatar.png"

const SendPaymentModal = ({ show, handle }) => {
    const handleCancel = () => {
        handle(false);
    }

    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="sm:flex p-3 sm:justify-between">
                    <div className="py-2">
                        <h3 className="text-lg font-semibold xs:text-center sm:text-left pb-2">
                            Send Payment
                        </h3>
                        <h6 className="text-xs text-gray-400 xs:text-center sm:text-left">
                            Sending assets directly to any Stellar wallet
                        </h6>
                    </div>
                    {/* <div className="sm:flex justify-center p-1">
                        <button className="px-3 bg-[#200A4C] text-white rounded-md text-xs xs:w-full xs:py-2">Steller Address</button>
                    </div> */}
                </div>
            </div>
            <div className="modal-body felx flex-col p-3  rounded-lg justify-center">
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium">Recepient</label>
                        <div className="xs:border rounded xs:p-2 flex xs:justify-between items-center min-w-fit md:px-3">
                            <div className="flex">
                                <img src={avatar} alt="" width="30" className="mr-3" />
                                <p className="py-2 text-xs min-w-fit">Donis Chakra</p>
                            </div>
                            <button onClick={handleCancel} className="py-2 text-xs pr-2 text-fuchsia-600">
                                Change
                            </button>
                        </div>
                        {/* <input type="text" className="text-xs p-2 border rounded-md pl-4" placeholder="Stellar or Federation Address"/> */}
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium">Amount</label>
                        <div className="text-xs p-2 border rounded-md grid grid-cols-4 justify-between">
                            <input type="text" className="text-xs p-2 pl-4 col-span-3" placeholder="Enter Amount" />
                            <p className="py-2 pr-2 col-span-1 text-right">XLM Available</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium" >Currency</label>
                        <select className="text-xs p-2 border rounded-md pl-4 text-gray-400" placeholder="Select Currency">
                            <option disabled selected>Select Currency</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>XLM</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <div className="flex justify-between">
                            <label className="mb-2 text-sm font-medium" >Memo Message</label>
                            <label className="mb-2 text-xs text-gray-400" >Optional</label>
                        </div>
                        <textarea cols="30" rows="3" placeholder="Enter Your Message" className="text-xs p-3 border rounded-md pl-5"></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer flex flex-col p-3 pt-0">
                {/* <h5 className="text-center  text-xs text-gray-400">Steler address or public key is used to identify your account on the network. It can be safety shared to receive funds</h5> */}
                <div className="flex justify-between">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200 p-2 w-2/5 text-sm flex justify-center" style={{ width: "45%" }}>
                        Cancel
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#8522CC] p-2	text-white text-sm flex justify-center" style={{ width: "45%" }}>
                        Send
                    </button>
                </div>
            </div>
        </BasicModal>
    );
}
export default SendPaymentModal;