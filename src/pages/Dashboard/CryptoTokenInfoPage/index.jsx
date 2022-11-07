import React, { useContext, useState } from "react";
import MonthPicker from "../../../components/MMonthPicker";
import { Button, NetExplorer, DashboardImageWith } from "../../../components";
import Chart from "../../../components/Chart";
import { ThemeContext } from "../../../utils/theme/ThemeContext";
import MarketCap from "../../../components/MarketCap";
import ZoomableChart from "../../../components/zoomableChart";
import BrushChart from "../../../components/BrushChart";
import ReactTooltip from "react-tooltip";
import images from "../../../constants/images";

const CryptoTokenInfoPage = () => {
	const [copied, setCopied] = useState(false);
	const { isToggle, toggleTheme } = useContext(ThemeContext);

	const delay = (time) => {
		return new Promise(resolve => setTimeout(resolve, time));
	}

	const copyToClipboard = (txt) => {
		navigator.clipboard.writeText(txt);
		setCopied(true);
		delay(1500).then(() => setCopied(false));
	}

	const options = {
		animationEnabled: true,
		theme: "light2",
		backgroundColor: isToggle ? ("#1C203B") : ("white"),
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
			var eventCountElement = document.getElementById("eventCount");
			eventCountElement.setAttribute("value", parseInt(eventCountElement.getAttribute("value")) + 1);

			var triggerLogElement = document.getElementById("triggerLog");
			triggerLogElement.setAttribute("value", e.trigger);

		},
		animationEnabled: true,
		theme: "light2",
		backgroundColor: isToggle ? ("#1C203B") : ("white"),
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

	const data = [
		{ title: "MarketCap", value: "238,843,29", currency: "USD" },
		{ title: "Volume", value: "238,843,29", currency: "USD" },
		{ title: "Calculating Supply", value: "238,843,29", currency: "BTC" },
		{ title: "Max Supply", value: "238,843,29", currency: "BTC" },
	];

	return (
		<main className="flex relative dark:text-white bg-white">
			<div className="py-6 md:py-8 space-y-10 pb-10 dark:bg-[#1C203B] px-6 md:px-8">
				<DashboardImageWith />
				<NetExplorer />
				<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{
						Object.values(data).map((item, key) =>
							<MarketCap key={key} item={item} />
						)
					}
				</ul>

				<div>
					<p className="
						text-sm font-extralight leading-5 
							md:font-light  text-justify text-gray-500
						">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita tis et qu
						explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunti
						ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,c
						ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita ae co
						ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui
					</p>
				</div>
				<div>
					<div className="flex gap-4">
						<Button props={
							{
								classN: "bg-primary flex rounded-lg gap-2 px-2 py-2 md:py-3 md:px-5 text-white items-center text-xs md:text-base",
								value: "Deposit USDC"
							}}
						/>
						<Button props={
							{
								classN: "bg-secondary flex px-2 py-2 md:py-3 md:px-5 rounded-lg text-white gap-2 items-center text-xs md:text-base",
								value: "Withdraw USDC"
							}}
						/>
						<Button props={
							{
								classN: "bg-transparent border-2 border-gray-400 flex px-2 py-2 md:py-3 md:px-5 rounded-lg text-black gap-5 dark:text-white text-xs md:text-base",
								value: "Transfer History"
							}}
						/>
					</div>
				</div>

				<div className="w-full font-light px-4 mb-5  items-center space-y-7">
					<div className="flex">
						<div className="flex space-x-3 justify-start items-center">
							<h3 className="text-2xl font-medium">Account</h3>
							<span className="text-gray-400">XLM</span>
						</div>
						<div className="flex space-x-3 ml-auto items-center">
							<div className="flex space-x-2 items-center">
								<span className="text-gray-400">from</span>
								<MonthPicker />
							</div>
							<div className="flex space-x-2 items-center">
								<span className="text-gray-400">to</span>
								<MonthPicker />
							</div>
						</div>
					</div>
					{/* <Chart info={options} /> */}
					{/* <ZoomableChart height={350}/> */}
					<BrushChart />
				</div>

				{/* <div className="mx-auto font-light px-4 mb-5 ">
					<Chart info={rangeChanged} />
				</div> */}

				<div className="flex flex-wrap justify-between gap-7 ">
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Asset Holders</p>
						<p className="h-1/2 flex items-center">1552839</p>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Deposit | Withdraw</p>
						<p className="h-1/2 flex items-center">Availble</p>
					</div>
					<div className="flex-row col-span-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Asset Issuer</p>
						<div className="flex h-1/2 gap-1 items-center">
							<p>
								GDNAJRWQ...ADGFHSDHAS
							</p>
							<button data-tip data-for={`address_tokeninfo`} className="rounded-full p-2 hover:bg-[#6B5377]/70 bg-[#6B5377]"
								onClick={() => { copyToClipboard("GDNAJRWQ...ADGFHSDHAS") }}>
								<img src={images.UserIcon1} className="w-3" alt="" width="15" />
							</button>
							<ReactTooltip
								textColor="#6ed497" backgroundColor="#46938d"
								id={`address_tokeninfo`} delayHide={500} place="top" effect="solid">
								{!copied ? "Copy address to clipboard" : "Copied to your clipboard"}
							</ReactTooltip>
						</div>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Type</p>
						<p className="h-1/2 flex items-center font-['poppins']">Flat Margin</p>
					</div>
					<div>
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Anchored Asset</p>
						<p className="h-1/2 flex items-center font-['poppins']">USD</p>
					</div>
				</div>

				<div className="mx-auto">
					<div className="space-y-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Conditions</p>
						<p className="h-1/2 font-['poppins']">Not set by the issuer</p>
					</div>
				</div>

				<div>
					<div className="space-y-2">
						<p className="h-1/2 text-gray-700 font-light dark:text-white/40">Authorization Flag</p>
						<p className="
							text-md font-extralight leading-5 
							text-justify
							">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi
							explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma gi
							ur aut odit aut fugit, sed quia consequuntur ma gni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qr
							ni Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ap
							ugiat quo voluptas nulla pariatur i nesciunt. Neque porro quisquam est, qui </p>
					</div>
				</div>
			</div>
		</main>
	)
}

export default CryptoTokenInfoPage;