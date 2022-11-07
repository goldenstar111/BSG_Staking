import BasicModal from "./basicModal"
const DeleteModal = ({ show, handle }) => {

    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md  text-center mb-2 font-bold">
                            Delete Contact
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Are you sure you want to delete this contact permanently saved data will be removed and can't be restored
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex justify-between mt-5">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200 p-2 w-2/5 text-sm flex justify-center" style={{ width: "45%" }}>
                        No,Thanks
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#EC3868] p-2	text-white text-sm flex justify-center" style={{ width: "45%" }}>
                        Yes,Please
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default DeleteModal;