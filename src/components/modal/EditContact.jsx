import BasicModal from "./basicModal"
import reqBtn from "../../assets/svgs/dark/trans-modal-btn-2.svg"
const EditContactModal = ({ show, handle }) => {
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md  text-center mb-2 font-bold">
                            Edit Contact
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Fill the info below in order to add a new contact
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col p-3  rounded-lg justify-center">
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium ">Account</label>
                        <input type="text" className="text-sm p-2 border rounded-md" placeholder="GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium ">Contact Name</label>
                        <input type="text" className="text-sm p-2 border rounded-md" placeholder="Khalid Saied Abdelmonem" />
                    </div>
                </form>
            </div>
            <div className="modal-footer flex flex-col mt-4">
                <div className="flex justify-between mt-5">
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
export default EditContactModal;