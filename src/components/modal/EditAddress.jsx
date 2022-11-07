import BasicModal from "./basicModal"
const EditAddressModal = ({ show, handle }) => {
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-4 justify-center">
                    <div className="">
                        <h3 className="text-md font-bold text-center mb-3">
                            Edit Federation Address
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Check your federation address or change it to new one
                        </h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-3">Federation Address</h3>
                <input type="text" className="border p-2 text-xs rounded-md" placeholder="Enter Federation Address" />
            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex justify-between mt-4">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200 p-2 w-2/5 text-sm flex justify-center" style={{ width: "45%" }}>
                        Cancel
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#8522CC] p-2	text-white text-sm flex justify-center" style={{ width: "45%" }}>
                        Save Changes
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default EditAddressModal;