import BasicModal from "./basicModal"
const ResetPasswordModal = ({ show, handle }) => {
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div>
                        <h3 className="text-md  text-center mb-2 font-bold">
                            Reset Password
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Change your password in order to proceed
                        </h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-2">Current Password</h3>
                <input type="password" className="border p-2 text-sm rounded-md text-gray-400" placeholder="Enter Federation Address" value={"aaaaa"} />
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-2">New Password</h3>
                <input type="password" className="border p-2 text-sm rounded-md text-gray-400" placeholder="Enter Federation Address" value={"aaaaa"} />
            </div>
            <div className="flex flex-col pb-3 pt-2 px-3">
                <h3 className="text-xs pb-2">Confirm New Password</h3>
                <input type="password" className="border p-2 text-sm rounded-md text-gray-400" placeholder="Enter Federation Address" value={"aaaaa"} />
            </div>
            <div className="modal-footer flex flex-col p-3">
                <div className="flex justify-between mt-5 gap-3">
                    <button onClick={handleCancel} className="rounded-lg border border-slate-200  p-3 w-1/2 text-xs flex justify-center " >
                        Cancel
                    </button>
                    <button onClick={handleCancel} className="rounded-lg  bg-[#8522cc] p-3	text-white text-xs flex justify-center w-1/2">
                        Submit
                    </button>
                </div>
            </div>
        </BasicModal>
    )
}
export default ResetPasswordModal;