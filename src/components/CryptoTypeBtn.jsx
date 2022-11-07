import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import CoinChartComponent from './CoinChartCom';
import { ThemeContext } from "../utils/theme/ThemeContext";
import images from '../constants/images';

const CryptoTypeBtn = ({ item, type }) => {
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
				<li className="col-span-1 flex flex-col rounded-lg shadow divide-y divide-gray-200" >
					<div className={`grid grid-cols-5 px-3  ${isToggle ? (!item.isRaise ? 'border-red-400 border' : 'border-green-400 border') : ''} `} style={!isToggle ? { background: `url(${item.isRaise ? images.BgGradGreen : images.BgGradRed})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" } : { background: `url(${item.isRaise ? images.BgGradGreenWhite : images.BgGradRedWhite})`, backgroundRepeat: "no-repeat", backgroundSize: "99.99% 100%" }}>
						<div className="flex-1 flex flex-col col-span-3 ">

							<div className="py-3   md:pl-1 lg:pl-2 xl:pl-2">

								<span className="text-gray-600 text-xs">{item.title}</span>

								<div className="flex items-center md:space-x-[1px] lg:space-x-2 xl:space-x-3">

									<h6 className="   dark:text-white text-xs">$ {item.value}</h6>

									{/* <span className="text-gray-400 text-xs lg:text-sm xl:text-base">{item2.currency}</span> */}

								</div>
								<span className={`text-sm ${item.isRaise ? 'text-green-500' : 'text-red-500'}`}>{item.isRaise ? '+' : '-'}{item.rating}%</span>
							</div>


						</div>
						<div className=" flex flex-col items-center col-span-2" >
							<CoinChartComponent data={value} isRaise={item.isRaise} width={80} height={100} />
						</div>
					</div>
				</li>
			)}
		</ThemeContext.Consumer>
	)
}
export default CryptoTypeBtn;


