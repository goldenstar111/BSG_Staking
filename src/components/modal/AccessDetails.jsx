import BasicModal from "./basicModal";
import chromeAvatar from "../../assets/chrome.png";

const AccessDetailsModal = ({ show, handle }) => {
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-lg text-center mb-2 font-bold">
                            Access Details
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Check the access credentials info listed below
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body flex flex-col p-3 rounded-lg justify-center text-xs">
                <div className="rounded-lg bg-slate-100 p-3 flex items-center">
                    <img src={chromeAvatar}></img>
                    <span className="pl-4">Google Chrome</span>
                </div>
                <div className="rounded-lg p-3 pl-0 font-semibold">IP Address</div>
                <div className="rounded-lg bg-slate-100 p-3">Cluj, RO <span className="text-gray-400">82.7968.20</span></div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Date</div>
                <div className="rounded-lg bg-slate-100 p-3">19th Aug 2021</div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Status</div>
                <div className="rounded-lg bg-slate-100 p-3 text-emerald-400">Success</div>
            </div>
            <div className="modal-footer">
            </div>
        </BasicModal>
    )
}
export default AccessDetailsModal;