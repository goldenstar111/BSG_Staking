import React from "react";
import { Link } from "react-router-dom";
import images from '../../constants/images';

const RecoverPassPages = () => {
    const [isValid, setValid] = React.useState(false);

    return (
        <div className="h-screen flex justify-center">
            <div
                className="lg:w-6/12 xs:hidden md:block md:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none text-center h-full"
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
                    <div>
                        <h2 className="mt-6 mb-4 text-2xl font-normal">Forgot Password</h2>
                        <p className="mt-2  text-xs font-light">
                            Enter your registered email to receive a reset link for your password.
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="mt-6">
                            <form action="" method="POST" className="space-y-32">
                                <div>
                                    <label htmlFor="email" className="flex align-middle text-sm font-medium">
                                        <svg className='mt-1 mr-2 mb-2' xmlns="http://www.w3.org/2000/svg" width="19.113" height="14.36" viewBox="0 0 19.113 14.36">
                                            <path id="envelope_2_" data-name="envelope (2)" d="M1.782,59.882H17.23a1.784,1.784,0,0,1,1.782,1.782V72.359a1.784,1.784,0,0,1-1.782,1.782H1.782A1.784,1.784,0,0,1,0,72.359V61.664A1.784,1.784,0,0,1,1.782,59.882Zm0,1.188a.591.591,0,0,0-.228.046l7.952,6.892,7.952-6.892a.591.591,0,0,0-.228-.046Zm0,11.883H17.23a.6.6,0,0,0,.594-.594V62.372L9.9,69.243a.6.6,0,0,1-.779,0L1.188,62.372v9.987A.6.6,0,0,0,1.782,72.953Z" transform="translate(0.05 -59.832)" fill="#fff" stroke="#fff" strokeWidth="0.1" />
                                        </svg>
                                        Email address
                                    </label>
                                    {
                                        isValid ? (
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="Mist4227s@gmail.com"
                                                    required
                                                    className="appearance-none block w-full px-10 py-2 font-light bg-red-500 bg-opacity-30 text-red-700 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        ) : (
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="Mist4227s@gmail.com"
                                                    required
                                                    className="appearance-none block w-full px-10 py-2 font-light text-black border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        )
                                    }
                                    {
                                        isValid ? (
                                            <p className="mt-4 text-xs text-red-600" id="email-error">
                                            </p>
                                        ) : (<></>)
                                    }
                                </div>

                                <div>
                                    <Link to="/auth/auth-verification1">
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
                                            <span className="mr-auto ml-auto">Recover Password</span>
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default RecoverPassPages;