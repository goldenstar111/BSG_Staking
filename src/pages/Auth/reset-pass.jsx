import React from "react";
import { Link } from "react-router-dom";
import images from '../../constants/images';

const ResetPassPages = () => {
    const [isValid, setValid] = React.useState(false);

    return (
        <div className="h-screen flex justify-center">
            <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none text-center h-full">
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
                        <h2 className="mt-6 mb-4 text-2xl font-normal">Reset Password</h2>
                        <p className="mt-2  text-xs font-light">
                            Create a new password to be able to access your account.
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="mt-6">
                            <form action="" method="POST" className="space-y-28">
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="flex align-middle text-sm font-medium">
                                            <svg className='mr-2 mb-1' xmlns="http://www.w3.org/2000/svg" width="16.138" height="22.103" viewBox="0 0 16.138 22.103">
                                                <g id="privacy_2_" data-name="privacy (2)" transform="translate(0)">
                                                    <path id="Path_9371" data-name="Path 9371" d="M172.562,296.177a.648.648,0,0,1-.648-.648v-2.683a.648.648,0,0,1,1.3,0v2.683A.648.648,0,0,1,172.562,296.177Zm0,0" transform="translate(-164.492 -279.585)" fill="#fff" />
                                                    <path id="Path_9372" data-name="Path 9372" d="M.647,7.1H3.712V3.948A4.172,4.172,0,0,1,8.069,0a4.172,4.172,0,0,1,4.357,3.948V7.1h3.065a.648.648,0,0,1,.648.648v8.281A6.078,6.078,0,0,1,10.067,22.1h-4A6.078,6.078,0,0,1,0,16.032V7.75A.648.648,0,0,1,.647,7.1ZM11.131,3.948A2.883,2.883,0,0,0,8.069,1.295,2.883,2.883,0,0,0,5.007,3.948V7.1h6.123ZM1.3,16.032a4.782,4.782,0,0,0,4.776,4.776h4a4.782,4.782,0,0,0,4.776-4.776V8.4H1.3Zm0,0" transform="translate(0 0)" fill="#fff" />
                                                </g>
                                            </svg>
                                            Password
                                        </label>
                                        {
                                            isValid ? (
                                                <div className="mt-1 relative">
                                                    <input
                                                        id="password0"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        placeholder="* * * * * * * * * *"
                                                        required
                                                        className="appearance-none block w-full px-10 py-2 bg-red-500 bg-opacity-30 text-red-700 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                    <svg className="absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" width="26.168" height="18.114" viewBox="0 0 26.168 18.114">
                                                        <g id="Group_37033" data-name="Group 37033" transform="translate(0 0)">
                                                            <path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#722432" />
                                                            <ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#722432" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="mt-1 relative">
                                                    <input
                                                        id="password0"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        placeholder="**********"
                                                        required
                                                        className="appearance-none block w-full px-10 py-2 text-black border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                    <svg className="absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" width="26.168" height="18.114" viewBox="0 0 26.168 18.114">
                                                        <g id="Group_37033" data-name="Group 37033" transform="translate(0 0)">
                                                            <path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#722432" />
                                                            <ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#722432" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="flex align-middle text-sm font-medium">
                                            <svg className='mr-2 mb-1' xmlns="http://www.w3.org/2000/svg" width="16.138" height="22.103" viewBox="0 0 16.138 22.103">
                                                <g id="privacy_2_" data-name="privacy (2)" transform="translate(0)">
                                                    <path id="Path_9371" data-name="Path 9371" d="M172.562,296.177a.648.648,0,0,1-.648-.648v-2.683a.648.648,0,0,1,1.3,0v2.683A.648.648,0,0,1,172.562,296.177Zm0,0" transform="translate(-164.492 -279.585)" fill="#fff" />
                                                    <path id="Path_9372" data-name="Path 9372" d="M.647,7.1H3.712V3.948A4.172,4.172,0,0,1,8.069,0a4.172,4.172,0,0,1,4.357,3.948V7.1h3.065a.648.648,0,0,1,.648.648v8.281A6.078,6.078,0,0,1,10.067,22.1h-4A6.078,6.078,0,0,1,0,16.032V7.75A.648.648,0,0,1,.647,7.1ZM11.131,3.948A2.883,2.883,0,0,0,8.069,1.295,2.883,2.883,0,0,0,5.007,3.948V7.1h6.123ZM1.3,16.032a4.782,4.782,0,0,0,4.776,4.776h4a4.782,4.782,0,0,0,4.776-4.776V8.4H1.3Zm0,0" transform="translate(0 0)" fill="#fff" />
                                                </g>
                                            </svg>
                                            Confirm New Password
                                        </label>
                                        {
                                            isValid ? (
                                                <div className="mt-1 mb-5 relative">
                                                    <input
                                                        id="password1"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        placeholder="* * * * * * * * * *"
                                                        required
                                                        className="appearance-none block w-full px-10 py-2 bg-red-500 bg-opacity-30 text-red-700 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                    <svg className="absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" width="26.168" height="18.114" viewBox="0 0 26.168 18.114">
                                                        <g id="Group_37033" data-name="Group 37033" transform="translate(0 0)">
                                                            <path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#722432" />
                                                            <ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#722432" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="mt-1 mb-5 relative">
                                                    <input
                                                        id="password1"
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        placeholder="**********"
                                                        required
                                                        className="appearance-none block w-full px-10 py-2 text-black border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                    <svg className="absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" width="26.168" height="18.114" viewBox="0 0 26.168 18.114">
                                                        <g id="Group_37033" data-name="Group 37033" transform="translate(0 0)">
                                                            <path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#722432" />
                                                            <ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#722432" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            )
                                        }
                                        {
                                            isValid ? (
                                                <p className="mt-4 text-xs text-red-600" id="email-error">
                                                    Must Match the Password
                                                </p>
                                            ) : (<></>)
                                        }
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <button
                                        type="button"
                                        className="btn-cus-signin w-full inline-flex py-3 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                                        onClick={() => { setValid(true) }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 22.32 18.978">
                                            <path id="Path_29671" data-name="Path 29671" d="M20.378,27.855,7.254,43.14,1.748,37.992,0,39.861l7.456,6.972L22.32,29.522Z" transform="translate(0 -27.855)" fill="#fff" />
                                        </svg>
                                        <Link to="/auth/auth-success-reset"><span className="mr-auto ml-auto pl-3">Confirm New Password</span></Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ResetPassPages;