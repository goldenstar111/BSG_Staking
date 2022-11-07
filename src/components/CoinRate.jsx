import { useEffect, useState } from "react"
import coinimg from "../assets/png/coinImg.png"
import { LineChart, XAxis, YAxis, Tooltip, Line, Legend } from "recharts";
import { ThemeContext } from "../utils/theme/ThemeContext";
import images from "../constants/images";
const CoinRate = ({ coinInfo, ...props }) => {
    // console.log("coinINfo", coinInfo);
    const [bgColor, setBgColor] = useState('bg-green-200');
    const [txtColor, setTextColor] = useState("text-green-500");
    const [chartColor, setChartColor] = useState("#1fd655")//#c61a09
    const [borderColor, setBorderColor] = useState("border-green-400")
    const [darkbgColor, setDarkBgColor] = useState(images.BgGradGreen);

    const getLastdot = (_coinInfo) => {
        if (!_coinInfo) return;
        // console.log(_coinInfo.chartdata)
        // console.log("lastdot", _coinInfo.chartdata[_coinInfo.chartdata.length - 1]);
        return _coinInfo.chartdata[_coinInfo.chartdata.length - 1];
    }

    useEffect(() => {
        if (!coinInfo) return;
        if (coinInfo.isIncrease) {
            setBgColor("bg-green-200/10");
            setTextColor("text-[#59DBB5]");
            setChartColor("#59DBB5");
            setBorderColor("border-green-400");
            setDarkBgColor("gradient_green");
        } else {
            setBgColor("bg-red-200/10");
            setTextColor("text-[#E03766]");
            setChartColor("#E03766");
            setBorderColor("border-red-400");
            setDarkBgColor("gradient_danager");
        }
    }, [coinInfo])
    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
                // <div {...props} className={`flex p-3${isToggle?`${bgColor} ${borderColor} border`:``} gap-2 justify-between my-2 `} style={!isToggle?{background:`url(${darkbgColor})`,backgroundSize:"100% 100%"}:{}}>
                <div {...props} className={`flex ${isToggle ? `${bgColor} ${borderColor} border` : `bg-[#2f3459]/60`} min-w-fit  gap-2 justify-between my-2 `} /* style={!isToggle?{background:`url(${darkbgColor})`,backgroundSize:"100% 100%"}:{}} */>
                    <div className="flex flex-row p-3 pr-0">
                        <div className="p-1 flex">
                            <img src={coinimg} className="justify-center" />
                        </div>
                        <div className="flex flex-col">
                            <p className="p-2 text-sm dark:text-white">{coinInfo.title}-Last 24H</p>
                            <p className={`px-2 text-xs  ${txtColor}`}>{coinInfo.rating}% ( {coinInfo.unit} )</p>
                        </div>
                    </div>

                    <div className={`p-3  lg:pl-[0] xl:pl-[20%] 2xl:pl-[20%] 3xl:pl-[20%] md:pl-[0] sm:pl-[0] ${isToggle ? `` : darkbgColor}`}>
                        <LineChart width={100} height={60} data={coinInfo.chartdata}
                            margin={{ top: 10, right: 30, left: 20 }} >
                            <Line type="monotone" strokeWidth={2} dataKey="value" stroke={chartColor} dot={false} />
                            <Line type="monotone" dataKey="dotval" stroke={chartColor} dot={{ stroke: `${chartColor}`, strokeWidth: 5, r: 2.5, strokeDasharray: '' }} />
                        </LineChart>
                    </div>


                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default CoinRate;