import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import CheckBox from "../../components/checkbox";

const Connect = () => {
    return (
        <main className="relative bg-zinc-400 w-screen h-screen flex justify-center align-middle">

            <span className="absolute top-10 right-10 text-white"><Link to="/dashboard">Skip to Homepage</Link></span>
            <Link to="/">
                <span className='org-bg-white rounded-full absolute top-10 left-10 hover:bg-gray-300 bg-opacity-20 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            </Link>

            <div className="flex space-x-6 h-min mt-auto mb-auto xs:mx-4">

                <div className="bg-white md:py-20 md:px-14 xs:py-8 xs:px-7 rounded-3xl shadow-inner max-w-[690px]">
                    <div className="block space-y-9">
                        <div className="block justify-center space-y-4 md:px-20">
                            <h2 className="text-center mt-auto mb-auto font-semibold md:text-2xl xs:text-2xl">Stellar Account</h2>
                            <p className="text-center font-light text-gray-400 xs:text-xs sm:text-sm">Create a new Steller wallet or connect the wallet you already have</p>
                        </div>
                        <div className="block justify-center space-y-4">
                            <h5>Steller Address</h5>
                            <input type="text" className="w-full border border-gray-200 rounded-md py-3 md:pl-10 xs:pl-4 focus-within:outline-none xs:text-xs sm:text-sm md:text-base" placeholder="Short alias or 56 character string starting with ''G'' " />
                        </div>
                        <div className="block justify-center space-y-4">
                            <h5>Secret Key</h5>
                            <input type="text" className="w-full py-3 md:pl-10 xs:pl-4 focus-within:outline-none border border-gray-200 rounded-md xs:text-xs sm:text-sm md:text-base" placeholder="56 character string starting with ''S''" />
                        </div>
                        <div className="flex flex-row justify-center  accept-part items-center ">
                            <CheckBox />
                            <p className="pl-2 font-light xs:text-xs sm:text-sm md:text-base">
                                I accept the terms and use, understand the risks associated with crypto
                                currencies, and know that Steller Term does not issue or endorse any
                                asset on the Steller network
                            </p>
                        </div>
                        <div className="block justify-center space-y-4 pl-15">
                            <Link to="/wallet/activation">
                                <button
                                    type="button"
                                    className="w-full flex justify-center py-5 px-5 border border-white-100 rounded-md shadow-sm text-sm font-medium bg- text-white bg-[#8522CC] hover:bg-indigo-700 focus:outline-none focus:ring-offset-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.147" height="23.144" viewBox="0 0 23.147 23.144">
                                        <g id="link-svgrepo-com" transform="translate(0.5 0.49)">
                                            <path id="Path_37858" data-name="Path 37858" d="M140.929,1.787l-.771-.682a4.346,4.346,0,0,0-6.134.369l-2.205,2.488a1.364,1.364,0,0,0,.115,1.922l.207.184a1.361,1.361,0,0,0,1.923-.116l2.205-2.488a1.348,1.348,0,0,1,1.9-.114l.77.683a1.346,1.346,0,0,1,.115,1.9l-4.822,5.44a1.343,1.343,0,0,1-1.624.3,1.471,1.471,0,0,0-1.778.331l-.038.042a1.473,1.473,0,0,0,.42,2.282,4.339,4.339,0,0,0,5.265-.969L141.3,7.921A4.351,4.351,0,0,0,140.929,1.787Z" transform="translate(-120.244 0)" fill="#fff" stroke="#8522cc" strokeWidth="1" />
                                            <path id="Path_37859" data-name="Path 37859" d="M10.455,102.9l-.207-.184a1.364,1.364,0,0,0-1.922.116l-2.2,2.488a1.347,1.347,0,0,1-1.9.115l-.771-.684a1.345,1.345,0,0,1-.114-1.9L8.16,97.416a1.348,1.348,0,0,1,1.6-.314,1.551,1.551,0,0,0,1.841-.363l.017-.02a1.451,1.451,0,0,0-.4-2.242,4.329,4.329,0,0,0-5.3.949l-4.822,5.438h0A4.35,4.35,0,0,0,1.461,107l.771.683a4.351,4.351,0,0,0,6.135-.369l2.2-2.488A1.361,1.361,0,0,0,10.455,102.9Z" transform="translate(0 -86.619)" fill="#fff" stroke="#8522cc" strokeWidth="1" />
                                        </g>
                                    </svg>

                                    <span className="mr-auto ml-auto text-lg">Connect Wallet</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="xs:hidden sm:hidden md:block bg-white py-20 px-10 rounded-3xl shadow-inner space-y-12 max-w-[349px]">
                    <div className="block justify-center space-y-4">
                        <h2 className="mt-auto mb-auto font-semibold text-xl">Secret Phrase not found</h2>
                        <p className="font-light text-gray-400">Secret phrase can help you verify that you are using authentic Steller Term website and save you from Phishing attacks. </p>
                        <div>
                            <Link className="flex items-center justify-between font-semibold text-[#56BC50]" to="/">
                                Configure Secret Phrase
                                <svg xmlns="http://www.w3.org/2000/svg" width="15.287" height="12.754" viewBox="0 0 15.287 12.754">
                                    <g id="up-arrow-svgrepo-com_1_" data-name="up-arrow-svgrepo-com (1)" transform="translate(15.037 -42.95) rotate(90)">
                                        <path id="Path_37860" data-name="Path 37860" d="M55.09,5.393A.986.986,0,1,1,53.7,6.787L50.277,3.365V13.8a.987.987,0,1,1-1.974,0V3.365L44.884,6.787A.986.986,0,0,1,43.49,5.393l5.1-5.1a.984.984,0,0,1,1.394,0Z" transform="translate(0 0)" fill="#56bc50" stroke="#fff" strokeWidth="0.5" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="block justify-center space-y-4">
                        <h2 className="mt-auto mb-auto font-semibold text-xl">Keep Secret Key Secure</h2>
                        <p className="font-light text-gray-400">StellerTerm does not save the key , It is stored on your browser & will be deleted once you refresh or exit the page</p>
                    </div>

                    <div className="block justify-center space-y-4">
                        <h2 className="mt-auto mb-auto font-semibold text-xl">Check the URL</h2>
                        <p className="font-light text-gray-400">Make sure you are on the correct website</p>
                        <div className="flex items-center justify-center space-x-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.242" height="19" viewBox="0 0 13.242 19">
                                <path id="XMLID_487_" d="M56.621,19A6.618,6.618,0,0,0,61.515,7.924V4.894a4.894,4.894,0,1,0-9.788,0v3.03A6.618,6.618,0,0,0,56.621,19Zm.864-6.334v1.152a.864.864,0,0,1-1.727,0V12.666a1.439,1.439,0,1,1,1.727,0Zm-4.03-7.772a3.167,3.167,0,1,1,6.333,0V6.565a6.611,6.611,0,0,0-6.333,0Z" transform="translate(-50)" fill="#56bc50" />
                            </svg>

                            <span>
                                www.stellarterm.com
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
};

export default Connect;