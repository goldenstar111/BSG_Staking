import images from "../constants/images";

const NetExplorer = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex items-center space-x-6">
                    <img src={images.BitCoin4} alt="" />
                    <div>
                        <h5>Bitcoin <span className="text-gray-400">|</span> BTC</h5>
                        <p className="text-gray-400">center.io</p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 lg:ml-auto">
                    <div >
                        <button className="bg-transparent border-2 border-gray-300 border-opacity-20 flex p-4 rounded-lg text-black gap-5 dark:text-white">
                            <p className="text-xs lg:text-sm">
                                View on Network Explorer
                            </p>
                        </button>
                    </div>
                    <div>
                        <button className="bg-secondary flex p-4 rounded-lg text-white gap-3">
                            <svg id="plus" xmlns="http://www.w3.org/2000/svg" className="w-[16px] lg:w-[20px]" viewBox="0 0 20.646 20.646">
                                <path id="Path_37871" data-name="Path 37871" d="M23.355,13.033H15.613V5.29a1.29,1.29,0,1,0-2.581,0v7.742H5.29a1.29,1.29,0,0,0,0,2.581h7.742v7.742a1.29,1.29,0,0,0,2.581,0V15.613h7.742a1.29,1.29,0,1,0,0-2.581Z" transform="translate(-4 -4)" fill="#fff" />
                            </svg>
                            <span className="text-xs lg:text-sm">
                                Add Asset
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetExplorer;