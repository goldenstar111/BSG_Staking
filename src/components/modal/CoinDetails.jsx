import BasicModal from "./basicModal";
import btcAvatar from "../../assets/BitCoin.png";

const CoinDetailsModal = ({ show, handle }) => {
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-lg text-center mb-2 font-bold">
                            Coin Details
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Check the crypto coin details listed below
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body flex flex-col p-3 rounded-lg justify-center text-xs gap-2">
                <div className="rounded-lg p-3 pl-0 font-semibold">Coin Name</div>
                <div className="rounded-lg bg-slate-100 p-3 flex items-center">
                    <img src={btcAvatar} className="w-8"></img>
                    <span className="pl-4">Bitcoin <span className="text-gray-400">|</span> BTC</span>
                </div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Price</div>
                <div className="rounded-lg bg-slate-100 p-3">21,843 <span className="text-gray-400">USD</span></div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <div className="rounded-lg p-3 pl-0 font-semibold">24H Change</div>
                        <div className="rounded-lg bg-slate-100 p-3">0.11 %</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-lg p-3 pl-0 font-semibold">24H Volume</div>
                        <div className="rounded-lg bg-slate-100 p-3">$ 206.83 M</div>
                    </div>
                </div>
                <div className="rounded-lg p-3 pl-0 font-semibold">Market Cap</div>
                <div className="rounded-lg bg-slate-100 p-3 text-emerald-400">21,843 <span className="text-gray-400">USD</span></div>
            </div>
            <div className="modal-footer">
                <div className="grid grid-cols-2 gap-4 p-3">
                    <button onClick={() => { handle(false); }} className="text-sm min-w-fit bg-gray-500 text-white p-2 rounded-md grow">Details</button>
                    <button onClick={() => { handle(false); }} className="text-sm text-white bg-[#8522cc] min-w-fit p-2 rounded-md grow">Trade</button>
                </div>
            </div>
        </BasicModal>
    )
}
export default CoinDetailsModal;