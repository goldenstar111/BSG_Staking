import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <main className="relative bg-zinc-400 w-screen h-screen flex justify-center align-middle">
            <span className="xs:hidden sm:hidden md:block lg:block xl:block absolute top-20 right-20 text-white"><Link to="/dashboard">Skip to Homepage</Link></span>
            <div className="bg-white mt-auto mb-auto py-8 px-8 md:py-20 md:px-10 rounded-3xl shadow-inner mx-10">
                <div className="block space-y-12">
                    <div className="block justify-center space-y-4">
                        <h2 className="text-center mt-auto mb-auto font-semibold text-xl md:text-2xl">Stellar Account</h2>
                        <p className="text-center font-light text-gray-400 text-xs md:text-sm">Create a new Steller wallet or connect the wallet you already have</p>
                    </div>
                    <div className="md:flex block ml-auto mr-auto justify-center md:space-x-10">
                        <Link to={"/wallet/connect"} className="rounded-md">
                            <div className="md:block md:space-y-5 lg:space-y-5 grid grid-cols-5 gap-5 items-center sm:items-center p-3 mb-3 bg-[#fafafa] ">
                                <img src={images.Link_perspective_matte_s} className="lg:mr-auto md:mr-auto mr-4 w-10 sm:mr-4 sm:w-10 lg:ml-auto md:ml-auto ml-3 col-span-1" alt="link" />
                                <p className="text-center col-span-3 text-sm md:text-base">Connect Steller Wallet</p>
                            </div>
                        </Link>
                        <Link to={"/"}>
                            <div className="md:block md:space-y-5 lg:space-y-5 grid grid-cols-5 gap-5 items-center sm:items-center p-3 bg-[#fafafa] ">
                                <img src={images.Wallet_perspective_matte_s} className="lg:mr-auto md:mr-auto mr-4 w-8 sm:mr-4 sm:w-8 lg:ml-auto md:ml-auto ml-3 col-span-1" alt="link" />
                                <p className="text-center col-span-3 text-sm md:text-base">Create Steller Wallet</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Account;