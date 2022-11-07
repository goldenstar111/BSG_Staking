import React from "react";
import { Link } from "react-router-dom";
import images from '../../constants/images';

const LoginPages = () => {
	const [isValid, setValid] = React.useState(false);
	const [isShowPassword, setShowPassword] = React.useState(true);
	const [passworType, setPasswordType] = React.useState("");

	React.useEffect(() => {
		isShowPassword ? setPasswordType("password") : setPasswordType("text");
	}, [isShowPassword]);

	const isValidation = () => {
		setValid(true);
	}

	return (
		<main className='overflow-hidden'>
			<div className="h-screen flex justify-center">
				<div
					className="lg:w-6/12 xs:hidden sm:hidden md:block lg:block xl:block md:w-6/12 xl:w-6/12 2xl:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none text-center h-full"
				>
					<div className="text-black px-4 py-6 md:p-12 md:mx-6">
						<p className="mb-6 text-gray-600">StellerLedger</p>
						<p className="text-3xl font-medium dark:text-gray-300">The Most Secure Platform<br />On Steller</p>

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
							<h2 className="mt-6 mb-4 text-2xl font-normal">Login</h2>
							<p className="mt-2  text-xs font-light">
								Login to start managing your assets and start monitoring updates.
							</p>
						</div>

						<div className="mt-8">
							<div>
								<div>

									<div className="mt-1 grid grid-cols-1 gap-1">
										<div>
											<a href="#" className="w-full inline-flex justify-start  py-2 px-10 border-transparent rounded-md shadow-sm bg-gray-400 bg-opacity-30 text-sm font-light text-white hover:bg-gray-500">
												<svg id="google" xmlns="http://www.w3.org/2000/svg" width="21.413" height="21.413" viewBox="0 0 21.413 21.413">
													<path id="Path_25" data-name="Path 25" d="M75.186,5.97a6.724,6.724,0,0,1,9.263-.291.449.449,0,0,0,.606-.019l2.183-2.183a.443.443,0,0,0-.012-.639,10.691,10.691,0,0,0-14.846.325,12.146,12.146,0,0,0,.036,2.8S73.991,7.175,75.186,5.97Z" transform="translate(-69.258 0)" fill="#fff" />
													<path id="Path_26" data-name="Path 26" d="M100.348,47.008a6.724,6.724,0,0,1,9.263-.291.449.449,0,0,0,.606-.019l1.252-1.252c-.109-.084-.217-.173-.322-.266a9.057,9.057,0,0,0-6.116-2.342A8.875,8.875,0,0,0,98.8,45.461,5.6,5.6,0,0,0,98.559,47S98.763,46.985,100.348,47.008Z" transform="translate(-94.421 -41.039)" fill="#fff" />
													<path id="Path_27" data-name="Path 27" d="M3.97,82.822a6.717,6.717,0,0,0,1.994,4.846l-.955,2.061-1.852.745A10.691,10.691,0,0,1,3.121,75.34l2.806,2.806A6.712,6.712,0,0,0,3.97,82.822Z" transform="translate(0 -72.177)" fill="#fff" />
													<path id="Path_28" data-name="Path 28" d="M45.014,111.553a6.718,6.718,0,0,0,1.994,4.846l-1.535,1.535a8.923,8.923,0,0,1-.049-12.6l1.547,1.547A6.712,6.712,0,0,0,45.014,111.553Z" transform="translate(-41.044 -100.908)" fill="#fff" />
													<path id="Path_29" data-name="Path 29" d="M87.494,368.955A6.75,6.75,0,0,1,78,368.949L75.2,371.756a10.638,10.638,0,0,0,15.071-.028l-.8-1.715Z" transform="translate(-72.039 -353.458)" fill="#fff" />
													<path id="Path_30" data-name="Path 30" d="M116.516,368.955a6.749,6.749,0,0,1-9.49-.006l-1.535,1.535a8.906,8.906,0,0,0,12.555,0Z" transform="translate(-101.061 -353.458)" fill="#fff" />
													<path id="Path_31" data-name="Path 31" d="M266.073,220.091a.382.382,0,0,0-.382-.382h-9.966a.342.342,0,0,0-.342.342v3.3a.342.342,0,0,0,.342.342h4.867a.646.646,0,0,1,.555.977,6.709,6.709,0,0,1-1.028,1.311l0,0,2.774,2.774q.2-.2.4-.393a10.808,10.808,0,0,0,2.787-7.253Z" transform="translate(-244.66 -210.484)" fill="#fff" />
													<path id="Path_32" data-name="Path 32" d="M263.826,266.905a1.828,1.828,0,0,0-1.733-2.405h-6.709v1.757a.342.342,0,0,0,.342.342h4.867a.646.646,0,0,1,.555.977,6.715,6.715,0,0,1-1.024,1.307l-.008.008,1.529,1.529a8.912,8.912,0,0,0,1.925-2.839Q263.711,267.249,263.826,266.905Z" transform="translate(-244.661 -253.395)" fill="#fff" />
												</svg>
												<span className="ml-10">Sign in using Google</span>
											</a>
										</div>
									</div>
								</div>

								<div className="mt-6 relative">
									<div className="absolute inset-0 flex items-center" aria-hidden="true">
										<div className="w-full" />
									</div>
								</div>
							</div>

							<div className="mt-6">
								<form action="" method="POST" className="space-y-9">
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
														placeholder=""
														required
														className="appearance-none block w-full px-10 py-2 bg-red-500 bg-opacity-30 text-red-700 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													/>
												</div>
											) : (
												<div className="mt-1">
													<input
														id="email"
														name="email"
														type="email"
														autoComplete="email"
														placeholder=""
														required
														className="appearance-none block w-full px-10 py-2 text-black border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
										<div className="mt-1 mb-5 relative">
											<input
												id="password4"
												name="password"
												type={passworType}
												autoComplete="current-password"
												placeholder=""
												required
												className="appearance-none block w-full px-10 py-2 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
											/>
											<svg className="absolute right-3 top-2" xmlns="http://www.w3.org/2000/svg" width="26.168" height="18.114" viewBox="0 0 26.168 18.114" onClick={() => setShowPassword(!isShowPassword)} >
												<g id="Group_37033" data-name="Group 37033" transform="translate(0 0)">

													{!isShowPassword ? (
														<>
															<path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#722432" />
															<ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#722432" />
														</>
													) : (
														<>
															<path id="Path_103" data-name="Path 103" d="M16.081,25.112a13.825,13.825,0,0,0,13.02-8.7,1.006,1.006,0,0,0,0-.7A13.825,13.825,0,0,0,16.081,7,13.825,13.825,0,0,0,3.06,15.7a1.006,1.006,0,0,0,0,.7A13.825,13.825,0,0,0,16.081,25.112Zm10.988-9.056A11.843,11.843,0,0,1,16.081,23.1,11.843,11.843,0,0,1,5.093,16.056,11.843,11.843,0,0,1,16.081,9.012,11.843,11.843,0,0,1,27.069,16.056Z" transform="translate(-2.997 -6.999)" fill="#2a854c" />
															<ellipse id="Ellipse_134" data-name="Ellipse 134" cx="4.766" cy="4.767" rx="4.766" ry="4.767" transform="translate(8.318 4.029)" fill="#2a854c" />
														</>)}
												</g>
											</svg>
										</div>
										{
											isValid ? (
												<p className="mt-4 text-xs text-red-600" id="email-error">
													Incorrect Password or Email
												</p>
											) : (<></>)
										}
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												className="h-4 w-4 text-indigo-600 bg-white bg-opacity-10 focus:ring-indigo-500 border-transparent rounded-2xl"
											/>
											<label htmlFor="remember-me" className="ml-2 block text-sm">
												Remember me
											</label>
										</div>

										<div className="text-sm">
											<Link to="/auth/recover-password">
												Forgot your password?
											</Link>
										</div>
									</div>

									<div className='mt-50'>
										<Link to="/wallet/selwallet">
											<button
												type="button"
												className="btn-cus-signin w-full inline-flex py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
												onClick={() => isValidation()}
											>
												<svg className="pl-1" xmlns="http://www.w3.org/2000/svg" width="17.784" height="21.43" viewBox="0 0 17.784 21.43">
													<g id="login" transform="translate(0.15 0.15)">
														<path id="Path_9369" data-name="Path 9369" d="M118.524,0H104a.66.66,0,0,0-.66.66V2.641h1.321V1.321h13.206V19.809H104.658V18.488h-1.321v1.981a.66.66,0,0,0,.66.66h14.527a.66.66,0,0,0,.66-.66V.66a.66.66,0,0,0-.66-.66Z" transform="translate(-101.7 0)" fill="#fff" stroke="#fff" strokeWidth="0.3" />
														<path id="Path_9370" data-name="Path 9370" d="M40.969,167.975l.934.934,4.429-4.429L41.9,160.051l-.934.934,2.835,2.835H34.446v1.321H43.8Z" transform="translate(-34.446 -153.915)" fill="#fff" stroke="#fff" strokeWidth="0.3" />
													</g>
												</svg>
												<span className="mr-auto ml-auto">Sign in</span>
											</button>
										</Link>
									</div>

									<div className='mt-2'>
										<Link to="/auth/register">
											<button
												type="button"
												className="w-full flex justify-center py-2 px-4 border border-white-100 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-indigo-700 focus:outline-none focus:ring-offset-2"
											>
												<svg className="pl-1" xmlns="http://www.w3.org/2000/svg" width="20.408" height="23.066" viewBox="0 0 20.408 23.066">
													<path id="add-user_5_" data-name="add-user (5)" d="M30.4,23.066a.9.9,0,0,1-.9-.9,8.208,8.208,0,0,1,8.2-8.2h1.352a8.183,8.183,0,0,1,2.7.455.9.9,0,0,1-.593,1.7,6.386,6.386,0,0,0-2.107-.355H37.7a6.4,6.4,0,0,0-6.4,6.4A.9.9,0,0,1,30.4,23.066ZM44.367,6.082a6.082,6.082,0,1,0-6.082,6.082A6.089,6.089,0,0,0,44.367,6.082Zm-1.8,0a4.28,4.28,0,1,1-4.28-4.28A4.285,4.285,0,0,1,42.565,6.082ZM49.007,17.66H46.3v-2.7a.9.9,0,1,0-1.8,0v2.7H41.8a.9.9,0,0,0,0,1.8h2.7v2.7a.9.9,0,1,0,1.8,0v-2.7h2.7a.9.9,0,1,0,0-1.8Z" transform="translate(-29.5)" fill="#fff" />
												</svg>
												<span className="mr-auto ml-auto">Sign Up</span>
											</button>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div >
			</div >
		</main>
	);
}

export default LoginPages;