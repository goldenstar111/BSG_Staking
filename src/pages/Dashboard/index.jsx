import React, { useState } from "react";
import images from "../../constants/images";

import { Sidebar, IntroWithImage, NetExplorer, DashboardHeader } from "../../components";
import Chart from "../../components/Chart";
import { ThemeContext } from "../../utils/theme/ThemeContext";

const DashboardPages = () => {

	const [isDark, setDark] = useState(false);

	<ThemeContext>
		{({ isToggle }) => {
			isToggle ? (setDark(true)) : (setDark(false));
		}}
	</ThemeContext>

	const options = {
		animationEnabled: true,
		theme: "light2",    // "light1", "dark1", "dark2"
		backgroundColor: isDark ? ("#1C203B") : ("white"),
		legend: {
			cursor: "pointer"
		},
		title: {
		},
		axisY: {
			prefix: "$ "
		},
		data: [{
			type: "splineArea",
			// xValueFormatString: "YYYY",
			// yValueFormatString: "#,##0.## bn kW⋅h",
			// showInLegend: true,
			// legendText: "kWh = one kilowatt hour",
			dataPoints: [
				{ x: new Date(2008, 0), y: 70.735 },
				{ x: new Date(2009, 0), y: 74.102 },
				{ x: new Date(2010, 0), y: 72.569 },
				{ x: new Date(2011, 0), y: 72.743 },
				{ x: new Date(2012, 0), y: 72.381 },
				{ x: new Date(2013, 0), y: 71.406 },
				{ x: new Date(2014, 0), y: 73.163 },
				{ x: new Date(2015, 0), y: 74.270 },
				{ x: new Date(2016, 0), y: 72.525 },
				{ x: new Date(2017, 0), y: 50.121 },
				{ x: new Date(2017, 1), y: 49.121 },
				{ x: new Date(2017, 2), y: 45.121 },
				{ x: new Date(2017, 3), y: 55.121 },
				{ x: new Date(2017, 4), y: 51.121 },
				{ x: new Date(2017, 5), y: 42.121 },
				{ x: new Date(2017, 6), y: 39.121 },
				{ x: new Date(2017, 7), y: 35.121 },
				{ x: new Date(2017, 8), y: 39.121 },
				{ x: new Date(2017, 9), y: 45.121 },
				{ x: new Date(2017, 10), y: 49.121 },
				{ x: new Date(2017, 11), y: 54.121 },
				{ x: new Date(2017, 12), y: 53.121 },
				{ x: new Date(2018, 1), y: 58.121 },
				{ x: new Date(2018, 2), y: 59.121 },
				{ x: new Date(2018, 3), y: 65.121 },
				{ x: new Date(2018, 4), y: 61.121 },
				{ x: new Date(2018, 5), y: 54.121 },
				{ x: new Date(2018, 6), y: 58.121 },
				{ x: new Date(2018, 7), y: 55.121 },
				{ x: new Date(2018, 8), y: 60.121 },
				{ x: new Date(2018, 9), y: 65.121 },
				{ x: new Date(2018, 10), y: 66.121 },
				{ x: new Date(2018, 11), y: 73.1 },
				{ x: new Date(2018, 12), y: 79.121 },
			]
		}]
	}

	const rangeChanged = {
		zoomEnabled: true,
		rangeChanged: function (e) {
			//update total count 
			var eventCountElement = document.getElementById("eventCount");
			eventCountElement.setAttribute("value", parseInt(eventCountElement.getAttribute("value")) + 1);

			// update event Trigger
			var triggerLogElement = document.getElementById("triggerLog");
			triggerLogElement.setAttribute("value", e.trigger);

		},
		animationEnabled: true,
		theme: "light2",    // "light1", "dark1", "dark2"
		backgroundColor: "white",
		legend: {
			cursor: "pointer"
		},
		title: {
			enabled: false
		},
		height: 200,
		axisY: {
			titleFontSize: 1,
			crosshair: {
				enabled: true
			}
		},
		data: [{
			type: "splineArea",
			dataPoints: [
				{ x: new Date(2008, 0), y: 70.735 },
				{ x: new Date(2009, 0), y: 74.102 },
				{ x: new Date(2010, 0), y: 72.569 },
				{ x: new Date(2011, 0), y: 72.743 },
				{ x: new Date(2012, 0), y: 72.381 },
				{ x: new Date(2013, 0), y: 71.406 },
				{ x: new Date(2014, 0), y: 73.163 },
				{ x: new Date(2015, 0), y: 74.270 },
				{ x: new Date(2016, 0), y: 72.525 },
				{ x: new Date(2017, 0), y: 50.121 },
				{ x: new Date(2017, 1), y: 49.121 },
				{ x: new Date(2017, 2), y: 45.121 },
				{ x: new Date(2017, 3), y: 55.121 },
				{ x: new Date(2017, 4), y: 51.121 },
				{ x: new Date(2017, 5), y: 42.121 },
				{ x: new Date(2017, 6), y: 39.121 },
				{ x: new Date(2017, 7), y: 35.121 },
				{ x: new Date(2017, 8), y: 39.121 },
				{ x: new Date(2017, 9), y: 45.121 },
				{ x: new Date(2017, 10), y: 49.121 },
				{ x: new Date(2017, 11), y: 54.121 },
				{ x: new Date(2017, 12), y: 53.121 },
				{ x: new Date(2018, 1), y: 58.121 },
				{ x: new Date(2018, 2), y: 59.121 },
				{ x: new Date(2018, 3), y: 65.121 },
				{ x: new Date(2018, 4), y: 61.121 },
				{ x: new Date(2018, 5), y: 54.121 },
				{ x: new Date(2018, 6), y: 58.121 },
				{ x: new Date(2018, 7), y: 55.121 },
				{ x: new Date(2018, 8), y: 60.121 },
				{ x: new Date(2018, 9), y: 65.121 },
				{ x: new Date(2018, 10), y: 66.121 },
				{ x: new Date(2018, 11), y: 73.1 },
				{ x: new Date(2018, 12), y: 79.121 },
			]
		}]
	}


	return (
		<>
			<Sidebar />
			<div className="fixed w-full bg-slate-100 z-20">
				<DashboardHeader />
			</div>
			<div className="md:pl-64 flex flex-col flex-1 z-10 bg-slate-100 pt-24">
				<div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
					<button type="button" className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open sidebar</span>
						<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				<main className="flex-1 relative dark:text-white">
					<IntroWithImage />
					<div className="py-6 space-y-10 pb-10 dark:bg-[#1C203B]">
						<div className="mx-auto px-4 mb-5 sm:px-6 md:px-8">
							<NetExplorer />
						</div>

						<div className="flex items-center justify-around ">
							{[1, 1, 1, 1, 1, 1].map((item, index) => (
								<div key={index}>
									<span className="text-gray-600 dark:text-white">Market Cap</span>
									<div className="flex space-x-5 items-center">
										<h6 className="text-2xl">$ 238,843,29</h6>
										<span className="text-gray-400 text-lg">USD</span>
									</div>
								</div>
							))}
						</div>

						<div className="mx-auto font-light px-4 mb-5 sm:px-6 md:px-8 space-y-7">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et qu
								explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunti
								ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,c
								ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae co
								ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui </p>
							<div className="flex space-x-5">
								<button className="bg-[#59DBB5] flex py-3 px-5 rounded-xl text-white gap-5 items-center">
									<svg id="plus" xmlns="http://www.w3.org/2000/svg" width="20.646" height="20.646" viewBox="0 0 20.646 20.646">
										<path id="Path_37871" data-name="Path 37871" d="M23.355,13.033H15.613V5.29a1.29,1.29,0,1,0-2.581,0v7.742H5.29a1.29,1.29,0,0,0,0,2.581h7.742v7.742a1.29,1.29,0,0,0,2.581,0V15.613h7.742a1.29,1.29,0,1,0,0-2.581Z" transform="translate(-4 -4)" fill="#fff" />
									</svg>
									<span>
										Deposit USDC
									</span>
								</button>
								<button className="bg-[#8522CC] flex py-3 px-5 rounded-xl text-white gap-5 items-center">
									<svg id="plus" xmlns="http://www.w3.org/2000/svg" width="20.646" height="20.646" viewBox="0 0 20.646 20.646">
										<path id="Path_37871" data-name="Path 37871" d="M23.355,13.033H15.613V5.29a1.29,1.29,0,1,0-2.581,0v7.742H5.29a1.29,1.29,0,0,0,0,2.581h7.742v7.742a1.29,1.29,0,0,0,2.581,0V15.613h7.742a1.29,1.29,0,1,0,0-2.581Z" transform="translate(-4 -4)" fill="#fff" />
									</svg>
									<span>
										Withdraw USDC
									</span>
								</button>
								<button className="bg-transparent border-2 border-gray-300 flex py-3 px-5 rounded-xl text-black gap-5 dark:text-white">Transfer History</button>
							</div>
						</div>

						<div className="mx-auto w-full font-light px-4 mb-5 sm:px-6 md:px-8 items-center space-y-7">
							<div className="flex">
								<div className="flex space-x-3 justify-start items-center">
									<h3 className="text-2xl font-medium">8.62341521</h3>
									<span className="text-gray-400">XLM</span>
								</div>
								<div className="flex space-x-3 ml-auto items-center">
									<div className="flex space-x-2 items-center">
										<span className="text-gray-400">from</span>
										<h3 className="text-lg font-normal">August 2018</h3>
									</div>
									<div className="flex space-x-2 items-center">
										<span className="text-gray-400">to</span>
										<h3 className="text-lg font-normal">May 2019</h3>
									</div>
								</div>
							</div>
							<Chart info={options} />
						</div>


						<div className="mx-auto font-light px-4 mb-5 sm:px-6 md:px-8">
							<Chart info={rangeChanged} />
						</div>

						<div className="flex justify-between mx-auto px-4 sm:px-6 md:px-8 ">
							<div className="ml-0">
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Asset Holders</p>
								<p className="h-1/2">1552839</p>
							</div>
							<div>
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Deposit | Withdraw</p>
								<p className="h-1/2">Availble</p>
							</div>
							<div className="flex-row">
								<p className="h-auto text-gray-700 font-light dark:text-white">Asset Issuer</p>
								<div className="flex h-1/2 space-x-5 items-center">
									<p>
										GDNAJRWQ...ADGFHSDHAS
									</p>
									<svg xmlns="http://www.w3.org/2000/svg" className="w-10" width="56" height="56" viewBox="0 0 56 56">
										<g id="Group_46225" data-name="Group 46225" transform="translate(0.277 0.23)">
											<circle id="Ellipse_1593" data-name="Ellipse 1593" cx="28" cy="28" r="28" transform="translate(-0.277 -0.23)" fill="#6b5377" />
											<g id="copy-svgrepo-com" transform="translate(17.104 16.723)">
												<g id="Group_46224" data-name="Group 46224" transform="translate(0)">
													<g id="Group_46223" data-name="Group 46223" transform="translate(0)">
														<path id="Path_37872" data-name="Path 37872" d="M152.551,0H140.372A1.576,1.576,0,0,0,138.8,1.574V5.268h1.437V1.574a.137.137,0,0,1,.137-.137h12.179a.137.137,0,0,1,.137.137V13.753a.137.137,0,0,1-.137.137h-3.579v1.437h3.579a1.576,1.576,0,0,0,1.574-1.574V1.574A1.576,1.576,0,0,0,152.551,0Z" transform="translate(-132.208)" fill="#fff" />
														<path id="Path_37873" data-name="Path 37873" d="M14.956,140H2.777A1.576,1.576,0,0,0,1.2,141.572v12.179a1.576,1.576,0,0,0,1.574,1.574H14.956a1.576,1.576,0,0,0,1.574-1.574V141.572A1.576,1.576,0,0,0,14.956,140Zm0,13.89H2.777a.137.137,0,0,1-.137-.137V141.572a.137.137,0,0,1,.137-.137H14.956a.137.137,0,0,1,.137.137v12.179h0A.137.137,0,0,1,14.956,153.888Z" transform="translate(-1.203 -133.293)" fill="#fff" />
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
							</div>
							<div>
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Type</p>
								<p className="h-1/2">Flat Margin</p>
							</div>
							<div className="mr-0">
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Anchored Asset</p>
								<p className="h-1/2">USD</p>
							</div>
						</div>

						<div className="mx-auto px-4 pb-5 sm:px-6 md:px-8 space-y-8">
							<div className="space-y-1">
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Conditions</p>
								<p className="h-1/2">Not set by the issuer</p>
							</div>
							<div className="space-y-1">
								<p className="h-1/2 text-gray-700 font-light dark:text-white">Authorization Flag</p>
								<p className="h-1/2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi
									explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gi
									ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qr
									ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ap
									ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui </p>
							</div>
						</div>
					</div>
				</main>
			</div >
		</>
	)
}

export default DashboardPages;