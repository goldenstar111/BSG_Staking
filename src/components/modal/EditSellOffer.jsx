import BasicModal from "./basicModal";
import images from '../../constants/images';

const EditSellOffers = ({ show, handle }) => {
    const handleCancel = () => {
        handle(false);
    }
    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header grid grid-cols-6 gap-1">
                <div className="flex flex-col col-span-3 py-3">
                    <h3 className="text-md font-medium ">Edit Sell Offer</h3>
                    <h3 className="text-xs text-gray-500 leading-7">Check the details for the selling offer</h3>
                </div>

                <div className="flex flex-row py-3 col-span-3">
                    <img src={images.Logo} alt="" className='w-12 h-12' />
                    <div className="flex flex-col pl-1">
                        <h3 className="text-sm pb-1 text-gray-500">Available</h3>
                        <h3 className="text-md pr-1">9482422.374</h3>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col py-3">
                <div className="flex flex-col">
                    <label className="text-xs py-3">Price</label>
                    <div className="flex">
                        <input type="text" className="p-2 text-sm text-gray-500 rounded-sm border border-r-0 rounded-l-sm grow" placeholder="0.5423214" />
                        <p className="border border-l-0 rounded-r-sm p-2 text-xs text-center text-gray-200">XLM</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-xs py-3">Amount</label>
                    <div className="flex">
                        <input type="text" className="p-2 text-sm text-gray-500 rounded-sm border border-r-0 rounded-l-sm grow" placeholder="0.09845 %" />
                        <p className="border border-l-0 rounded-r-sm p-2 text-xs text-center text-gray-200">Stellar</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2 py-4 border-b mb-3">
                    <a className="p-2 text-center bg-[#FBFBFB] rounded-lg hover:bg-[#eaeaea]">25%</a>
                    <a className="p-2 text-center bg-[#FBFBFB] rounded-lg hover:bg-[#eaeaea]">50%</a>
                    <a className="p-2 text-center bg-[#FBFBFB] rounded-lg hover:bg-[#eaeaea]">75%</a>
                    <a className="p-2 text-center bg-[#FBFBFB] rounded-lg hover:bg-[#eaeaea]">100%</a>
                </div>
                <div className="flex flex-col">
                    <label className="text-xs pb-2">Total</label>
                    <div className="flex">
                        <input type="text" className="p-2 text-sm text-gray-500 rounded-sm border border-r-0 rounded-l-sm grow" placeholder="4059285823.938482" />
                        <p className="border border-l-0 rounded-r-sm p-2 text-xs text-center text-gray-200">XLM</p>
                    </div>

                </div>
            </div>
            <div className="modal-footer">
                <button onClick={handleCancel} className="bg-[#8522cc] text-white p-3 rounded-md w-full text-xs mt-2">Sell Stellar</button>
            </div>
        </BasicModal>
    )
}
export default EditSellOffers;