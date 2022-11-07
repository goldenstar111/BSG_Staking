import React from "react";
import ReactDOM from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Activation = () => {
    return (
        <main className="relative bg-zinc-400 w-screen min-h-screen flex justify-center align-middle">
            <span className="absolute top-10 right-10 text-white"><Link to={"/dashboard"}>Skip to Homepage</Link></span>
            <Link to="/">
                <span className='org-bg-white rounded-full absolute top-10 left-10 hover:bg-gray-300 bg-opacity-20 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </span>
            </Link>
            <div className="md:flex md:h-min md:mt-auto md:mb-auto xs:pt-32 md:pt-5 mb-5">
                <div className="bg-white sm:py-5 xs:py-4 xs:px-4 sm:px-5 rounded-3xl shadow-inner xs:mx-4 w-fit sm:mx-20 ">
                    <div className="block xs:space-y-9">
                        <div className="block justify-center space-y-4 px-5 pt-5">
                            <h2 className="text-center font-semibold md:text-2xl">Account Activation Required</h2>
                            <p className="text-center text-sm font-light text-gray-400">To use your steller account, you must activate it by sending at least 5 lumens XLM to your account
                                you can buy lumens from an exchange and send them to your address</p>
                        </div>
                        <div className="grid md:grid-cols-2  xs:grid-cols-1  xs:gap-4 sm:gap-4 lg:gap-4">
                            <div className=" flex flex-col justify-center bg-[#fafafa] rounded-md xs:p-3 md:p-5">
                                <h3 className="text-center text-lg font-semibold">Send from your Wallet</h3>
                                <div className="p-8">
                                    <QRCodeSVG value="https://reactjs.org/" width={250} height={250} className="w-full" />
                                </div>
                                <div className="">
                                    <h5 className="text-center">Your Wallet Account Id</h5>
                                    <input type="text" className="py-4 w-full text-center text-gray-300 text-sm"
                                        value="GDNAJRWQKRYHHFASYDAHDHBSANCHSADGFHSDHAS" disabled />
                                </div>
                                <Link to="/home" >
                                    <button
                                        type="button"
                                        className="w-full flex justify-center py-3 px-5 border border-white-100 rounded-md shadow-sm text-sm font-medium bg- text-white bg-[#8522CC] hover:bg-indigo-700 focus:outline-none focus:ring-offset-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.147" height="23.144" viewBox="0 0 23.147 23.144">
                                            <g id="link-svgrepo-com" transform="translate(0.5 0.49)">
                                                <path id="Path_37858" data-name="Path 37858" d="M140.929,1.787l-.771-.682a4.346,4.346,0,0,0-6.134.369l-2.205,2.488a1.364,1.364,0,0,0,.115,1.922l.207.184a1.361,1.361,0,0,0,1.923-.116l2.205-2.488a1.348,1.348,0,0,1,1.9-.114l.77.683a1.346,1.346,0,0,1,.115,1.9l-4.822,5.44a1.343,1.343,0,0,1-1.624.3,1.471,1.471,0,0,0-1.778.331l-.038.042a1.473,1.473,0,0,0,.42,2.282,4.339,4.339,0,0,0,5.265-.969L141.3,7.921A4.351,4.351,0,0,0,140.929,1.787Z" transform="translate(-120.244 0)" fill="#fff" stroke="#8522cc" strokeWidth="1" />
                                                <path id="Path_37859" data-name="Path 37859" d="M10.455,102.9l-.207-.184a1.364,1.364,0,0,0-1.922.116l-2.2,2.488a1.347,1.347,0,0,1-1.9.115l-.771-.684a1.345,1.345,0,0,1-.114-1.9L8.16,97.416a1.348,1.348,0,0,1,1.6-.314,1.551,1.551,0,0,0,1.841-.363l.017-.02a1.451,1.451,0,0,0-.4-2.242,4.329,4.329,0,0,0-5.3.949l-4.822,5.438h0A4.35,4.35,0,0,0,1.461,107l.771.683a4.351,4.351,0,0,0,6.135-.369l2.2-2.488A1.361,1.361,0,0,0,10.455,102.9Z" transform="translate(0 -86.619)" fill="#fff" stroke="#8522cc" strokeWidth="1" />
                                            </g>
                                        </svg>
                                        <span className="mr-auto ml-auto md:text-base xs:text-sm">Copy Address</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-between flex-col bg-[#fafafa] rounded-md xs:p-3 md:p-5">
                                <h3 className="text-center text-lg font-semibold">Send from another Wallet</h3>
                                <div className="block pb-4 pt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-auto ml-auto" width="30.827" height="30.827" viewBox="0 0 30.827 30.827">
                                        <g id="speedometer-svgrepo-com" transform="translate(-6.201 -6.201)">
                                            <circle id="Ellipse_1590" data-name="Ellipse 1590" cx="15.414" cy="15.414" r="15.414" transform="translate(6.201 6.201)" fill="#f2cf1f" />
                                            <path id="Path_37862" data-name="Path 37862" d="M143.916,139.74a13.31,13.31,0,0,1,7.046,2.08c-1.209,1.237-2.886,2.97-4.095,4.254-5.247-2.464-12.518-.759-14.5,5.079.178-7.121,4.779-11.413,11.544-11.413Z" transform="translate(-121.899 -128.611)" fill="#ffe76f" />
                                            <path id="Path_37863" data-name="Path 37863" d="M228.25,175.709a3.569,3.569,0,1,1-2.98-2.09l8.067-8.32Zm-3.1.075a1.363,1.363,0,1,1-1.359,1.368A1.374,1.374,0,0,1,225.149,175.784Z" transform="translate(-202.935 -151.865)" fill="#fff" />
                                        </g>
                                    </svg>
                                    <h4 className="text-center text-sm">Fast & Easy</h4>
                                    <p className="text-center text-gray-400 text-xs">Lumens reach your account in 10 ~ 30 minutes on average</p>
                                </div>
                                <div className="block pb-4">
                                    <img src={images.Mobilephone} className="mr-auto ml-auto" alt="mobile" />
                                    <h4 className="text-center text-sm">Secure</h4>
                                    <p className="text-center text-gray-400 text-xs">Payment processor complies with PCI SAQ
                                        when storing, processing and transmitting
                                        cardholder data</p>
                                </div>
                                <div className="block pb-4">
                                    <img src={images.Check} className="mr-auto ml-auto" alt="check" />
                                    <h4 className="text-center text-sm">Convenient</h4>
                                    <p className="text-center text-gray-400 text-xs">Deposit XLM to your account using Visa or
                                        MasterCard credit card</p>
                                </div>
                                <Link to="/" className="mt-1">
                                    <button
                                        type="button"
                                        className="w-full flex justify-center  py-3 px-5 border border-white-100 rounded-md shadow-sm text-sm font-medium  text-white bg-[#8522CC] hover:bg-indigo-700 focus:outline-none focus:ring-offset-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.79" height="22.155" viewBox="0 0 24.79 22.155">
                                            <g id="cart-svgrepo-com" transform="translate(-2 -3)">
                                                <path id="Path_37864" data-name="Path 37864" d="M26.569,8.492a1.239,1.239,0,0,0-1.019-.534H8.61L7.18,4.525A2.472,2.472,0,0,0,4.892,3H2V5.479H4.892l5.88,14.112a1.239,1.239,0,0,0,1.144.762h9.916a1.242,1.242,0,0,0,1.161-.8l3.718-9.916a1.239,1.239,0,0,0-.143-1.142Z" transform="translate(0 0)" fill="#fff" />
                                                <circle id="Ellipse_1591" data-name="Ellipse 1591" cx="2" cy="2" r="2" transform="translate(10.395 21.155)" fill="#fff" />
                                                <circle id="Ellipse_1592" data-name="Ellipse 1592" cx="2" cy="2" r="2" transform="translate(19.395 21.155)" fill="#fff" />
                                            </g>
                                        </svg>
                                        <span className="mr-auto ml-auto md:text-base xs:text-sm">Buy Lumens Now</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Activation;