import BasicModal from "./basicModal"
import reqBtn from "../../assets/svgs/dark/user-svgrepo-co.png"
const ContactModal = ({ show, handle }) => {
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-lg  text-center mb-2 font-semibold">
                            Add Contact
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Fill the info below in order to add a new contact
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col p-3 rounded-lg justify-center">
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium">Account</label>
                        <input type="text" className="text-xs p-2 border rounded-md pl-4" placeholder="Enter Public Key or Federation Address " />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm font-medium">Contact Name</label>
                        <input type="text" className="text-xs p-2 border rounded-md pl-4" placeholder="Enter User Name" />
                    </div>
                </form>
            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex ">
                    <button onClick={() => handle(false)} className="grid grid-cols-12 rounded-lg items-center bg-[#8522CC] p-3	text-white text-sm  w-full ">
                        <span><img src={reqBtn} className="col-span-2" /></span><span className="col-span-10 py-1">Add Contact</span>
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default ContactModal;