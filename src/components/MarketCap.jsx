import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import CoinChartComponent from './CoinChartCom';
import { ThemeContext } from "../utils/theme/ThemeContext";
import images from '../constants/images';

const MarketCap = ({ item, type }) => {
	// console.log("item", item);
	const value = [
		{ name: 1, value: 5 },
		{ name: 2, value: 9 },
		{ name: 3, value: 10 },
		{ name: 4, value: 12 },
		{ name: 5, value: 20 },
		{ name: 5, value: 21 },
		{ name: 6, value: 19 },
		{ name: 7, value: 20 },
		{ name: 8, value: 21 },
		{ name: 9, value: 22 },
		{ name: 10, value: 23 },
		{ name: 10, dotval: 23, value: 23 },
	];
	return (
		<ThemeContext.Consumer>
			{({ isToggle, toggleTheme }) => (
				<li className="col-span-1 flex flex-col   divide-y bg-[#fbfbfb] dark:bg-[#3D4057]" >
					<div className={`px-6`}  >
						<div className="flex-1 flex flex-col ">
							<div className="py-5 md:pl-1 lg:pl-2 xl:pl-2">
								<span className="text-gray-600 text-xs lg:text-base dark:text-[#B3B4BE]">{item.title}</span>
								<div className="flex justify-between items-center md:space-x-[1px] lg:space-x-2 xl:space-x-3">
									<h2 className="dark:text-white text-lg">$ {item.value}</h2>
									<h2 className="dark:text-[#737586] text-lg text-[#cbcbcb]">{item.currency}</h2>
									{/* <span className="text-gray-400 text-xs lg:text-sm xl:text-base">{item2.currency}</span> */}
								</div>
							</div>
						</div>
					</div>
				</li>
			)}
		</ThemeContext.Consumer>
	)
}
export default MarketCap;


