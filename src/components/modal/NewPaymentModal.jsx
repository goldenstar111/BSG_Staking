
import BasicModal from "./basicModal"
const NewPaymentModal = ({ show, handle, hideModal }) => {
    const onCancel = () => {
        hideModal();
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="sm:flex p-3 sm:justify-between">
                    <div className="py-2">
                        <h3 className="text-lg font-semibold xs:text-center sm:text-left pb-2">
                            New Payment
                        </h3>
                        <h6 className="text-xs text-gray-400 xs:text-center sm:text-left">
                            Sending assets directly to any Stellar wallet
                        </h6>
                    </div>
                    {/* <div className="md:flex justify-center p-1">
                        <button className="px-3 py-0 bg-[#200A4C] text-white rounded-md text-sm xs:w-full xs:py-3">Steller Address</button>
                    </div> */}
                </div>
            </div>
            <div className="modal-body felx flex-col px-3 pt-3  rounded-lg justify-center">
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-5 sm:mb-1 xs:mb-1 md:mb-1">
                        <label className="mb-2 text-sm font-bold">Recepient</label>
                        <input type="text" className="text-sm p-2 border rounded-md" placeholder="Stellar or Federation Address" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-bold">Amount</label>
                        <input type="text" className="text-sm p-2 border rounded-md" placeholder="Enter Amount" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-bold" >Currnecy</label>
                        <select className="text-sm p-2 border rounded-md" placeholder="Select Currency">
                            <option ></option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <div className="flex justify-between">
                            <label className="mb-2 text-sm font-bold" >Memo Message</label>
                            <label className="mb-2 text-xs text-gray-400" >Optional</label>
                        </div>
                        <textarea cols="30" rows="3" placeholder="Enter Your Message" className="text-sm p-2 border rounded-md"></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer flex flex-col px-3 pb-3">
                <h5 className="text-center  text-xs text-gray-400">Steler address or public key is used to identify your account on the network. It can be safety shared to receive funds</h5>
                <div className="flex justify-between mt-5">
                    <button onClick={onCancel} className="rounded-lg border border-slate-200 p-2 w-2/5 text-sm flex justify-center" style={{ width: "45%" }}>
                        Cancel
                    </button>
                    <button onClick={onCancel} className="rounded-lg  bg-[#8522CC] p-2	text-white text-sm flex justify-center" style={{ width: "45%" }}>
                        Send
                    </button>
                </div>
            </div>
        </BasicModal>
    );
}
export default NewPaymentModal;