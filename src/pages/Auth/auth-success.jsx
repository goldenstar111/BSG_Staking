import React from "react";
import { Link } from "react-router-dom";
import images from '../../constants/images';
// import { ExclamationCircleIcon } from '@heroicons/react/solid'

const AuthSuccessPages = () => {
    const [isValid, setValid] = React.useState(false);

    return (
        <div className="h-screen flex justify-center">
            <div
                className="lg:w-6/12 xs:hidden sm:hidden md:block md:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none text-center h-full"
            >
                <div className="text-black px-4 py-6 md:p-12 md:mx-6">
                    <p className="mb-6 text-gray-600">StellerLedger</p>
                    <p className="text-3xl font-medium">The Most Secure Platform<br />On Steller</p>

                    <div className="mt-20 mb-15 flex flex-row justify-center relative">
                        <img src={images.Logo_crown} className="w-8/12" alt="Kiwi standing on oval" />
                        <img src={images.Crown} className="absolute top-0 flex justify-center w1/25" alt="Kiwi standing on oval" />
                    </div>

                    <p className="text-xs w-11/12 mr-auto ml-auto text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-4 lg:w-6/12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 default-background relative">
                <Link to="/">
                    <span className='org-bg-white rounded-lg absolute top-10 left-10 hover:bg-gray-300 bg-opacity-20 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                </Link>
                <div className="mx-auto w-full max-w-sm lg:w-86">

                    <div className="mr-auto ml-auto">
                        <img src={images.Success_circle} alt="Success" />
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="mt-6 mb-4 text-2xl font-normal">Account Created</h2>
                        <p className="mt-2 text-x w-9/12 mr-auto ml-auto text-xs font-light">
                            You've joined a fruitful trading journey with loads of other people.
                        </p>
                    </div>

                    <div className="mt-[120px]">
                        <div>
                            <div className="mt-6 relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-50'>
                            <Link to="/auth/login">
                                <button
                                    type="button"
                                    className="btn-cus-signin w-full inline-flex py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                                    onClick={() => { setValid(true) }}
                                >
                                    <svg className="pl-1" xmlns="http://www.w3.org/2000/svg" width="17.784" height="21.43" viewBox="0 0 17.784 21.43">
                                        <g id="login" transform="translate(0.15 0.15)">
                                            <path id="Path_9369" data-name="Path 9369" d="M118.524,0H104a.66.66,0,0,0-.66.66V2.641h1.321V1.321h13.206V19.809H104.658V18.488h-1.321v1.981a.66.66,0,0,0,.66.66h14.527a.66.66,0,0,0,.66-.66V.66a.66.66,0,0,0-.66-.66Z" transform="translate(-101.7 0)" fill="#fff" stroke="#fff" strokeWidth="0.3" />
                                            <path id="Path_9370" data-name="Path 9370" d="M40.969,167.975l.934.934,4.429-4.429L41.9,160.051l-.934.934,2.835,2.835H34.446v1.321H43.8Z" transform="translate(-34.446 -153.915)" fill="#fff" stroke="#fff" strokeWidth="0.3" />
                                        </g>
                                    </svg>
                                    <span className="mr-auto ml-auto">Login</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default AuthSuccessPages;