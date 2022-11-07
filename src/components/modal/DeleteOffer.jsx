import BasicModal from "./basicModal"
const DeleteOfferModal = ({ show, handle }) => {

    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md text-center mb-3 font-bold">
                            Delete Offer
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Are you sure you want to delete this offer permanently, saved data will be removed and can't be restored
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-footer flex flex-col p-3 pb-1">
                <div className="flex justify-between mt-1">
                    <button onClick={() => { handle(false) }} className="rounded-lg border border-slate-200 p-2 w-2/5 text-sm flex justify-center" style={{ width: "45%" }}>
                        No,Thanks
                    </button>
                    <button onClick={() => { handle(false) }} className="rounded-lg  bg-[#EC3868] p-2	text-white text-sm flex justify-center" style={{ width: "45%" }}>
                        Yes,Please
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default DeleteOfferModal;