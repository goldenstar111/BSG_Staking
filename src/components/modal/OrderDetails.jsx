import BasicModal from "./basicModal";
import chromeAvatar from "../../assets/chrome.png";

const OrderDetailsModal = ({ show, handle, handle1, handle2 }) => {
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-lg text-center mb-2 font-bold">
                            Order Details
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Check the order detailslisted below
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body flex flex-col p-3 rounded-lg justify-center text-xs">
                <div className="rounded-lg bg-slate-100 p-3 flex items-center text-sm">
                    <small className="text-emerald-400">Buying</small>
                    <span className="pl-4">Buying Order</span>
                </div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Amount - XLM</div>
                <div className="rounded-lg bg-slate-100 p-3">119.9283712</div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Price - USD</div>
                <div className="rounded-lg bg-slate-100 p-3">0.115847</div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Total - USD</div>
                <div className="rounded-lg bg-slate-100 p-3 ">13.8115847</div>
            </div>
            <div className="modal-footer text-xs grid grid-cols-2 gap-3">
                <button onClick={() => { handle(false); }} className="min-w-fit border border-gray-200 p-2 rounded-md grow">Close</button>
                <button onClick={() => { handle(false); handle2(true); }} className="text-white rounded-md bg-[#EC3868] p-2 min-w-fit px-3 ">Delete</button>
                <button onClick={() => { handle(false); handle1(true); }} className="col-span-2 text-white bg-[#8522cc] min-w-fit p-2 rounded-md grow" >Edit</button>
            </div>
        </BasicModal>
    )
}
export default OrderDetailsModal;