import { LineChart, Line } from "recharts";
const CoinChartComponent = ({ data, width, height, isRaise }) => {
    return (
        <LineChart width={width} height={height} data={data}
            margin={{ top: 30, right: 5, left: 30 }} >
            <Line type="monotone" strokeWidth={2} dataKey="value" stroke={isRaise ? "#59DBB5" : "#c61a09"} dot={false} />
            <Line type="monotone" dataKey="dotval" stroke={isRaise ? "#59DBB5" : "#c61a09"} dot={{ stroke: isRaise ? "#59DBB5" : "#c61a09", strokeWidth: 5, r: 2.5, strokeDasharray: '' }} />
        </LineChart>
    )
}
export default CoinChartComponent;