import BasicModal from "./basicModal";
import reqBtn from "../../assets/svgs/dark/trans-modal-btn-2.svg"
import avatar from "../../assets/avatar.png"

const RequestMoneyModal = ({ show, handle }) => {
    const handleRequest = () => {
        handle(false);
    }

    return (
        <BasicModal show={show} handle={handle}>
            <div className="modal-header">
                <div className="flex p-3 justify-center">
                    <div className="">
                        <h3 className="text-md  text-center mb-2 font-bold">
                            Request Money
                        </h3>
                        <h6 className="text-xs text-gray-400 text-center">
                            Fill the info below in order to request money
                        </h6>
                    </div>
                </div>
            </div>
            <div className="modal-body felx flex-col p-3  rounded-lg justify-center">
                <form className="flex flex-col ">
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium">Steller Address</label>
                        <div className="xs:border rounded xs:p-2 flex xs:justify-between items-center min-w-fit md:px-3">
                            <div className="flex">
                                <img src={avatar} alt="" width="30" className="mr-3" />
                                <p className="py-2 text-xs min-w-fit">Donis Chakra</p>
                            </div>
                            <button onClick={handleRequest} className="py-2 text-xs pr-2 text-fuchsia-600">
                                Change
                            </button>
                        </div>
                        {/* <input type="text" className="text-xs p-2 border rounded-md pl-4" placeholder="Stellar or Federation Address"/> */}
                    </div>
                    {/* <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium ">Steller Address</label>
                        <input type="text" className="text-sm p-2 pl-3 border rounded-md" placeholder="Short alias or 56 character string starting with ''G'' " />
                    </div> */}
                    <div className="flex flex-col mb-5">
                        <label className="mb-2 text-sm font-medium ">Amount</label>
                        <div className="text-xs p-2 border rounded-md grid grid-cols-4 justify-between">
                            <input type="text" className="text-sm p-2 pl-1 col-span-3" placeholder="Enter Amount" />
                            <p className="py-2 pr-2 col-span-1 text-right text-sm text-gray-400">XLM Available</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer flex flex-col mt-4">
                <div className="flex justify-between  ">
                    <button onClick={handleRequest} className="rounded-lg  bg-[#8522CC] p-3 relative	text-white text-sm flex justify-center w-full items-center ">
                        <span className=" absolute  left-3"><img src={reqBtn} width="12" /></span>Request Money
                    </button>
                </div>
            </div>

        </BasicModal>
    )
}
export default RequestMoneyModal;