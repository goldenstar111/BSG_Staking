import { CartesianGrid, ResponsiveContainer, AreaChart, Area, YAxis, XAxis } from 'recharts';
const CoinTradeChart = () => {
    const value = [
        { name: "Aug", value: 25187.44 },
        { name: "Sep", value: 27356.99 },
        { name: "Oct", value: 34698.98 },
        { name: "Nov", value: 37587.55 },
        { name: "Dec", value: 27577.4 },
        { name: "Jan", value: 25577.4 },
        { name: "Feb", value: 18577.4 },
        { name: "Mar", value: 28577.4 },
        { name: "Apr", value: 41577.4 },
        { name: "May", value: 41577.4 }
    ]
    return (
        <div className='flex flex-shrink flex-grow h-64 p-2'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={value}>
                    <defs>
                        <linearGradient
                            id="liquidity-gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stopColor="#bc9aff" stopOpacity={0.5} />
                            <stop offset="100%" stopColor="#7645D9" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="natural"
                        dataKey="value"
                        stroke="#7645D9"
                        strokeWidth={1.5}
                        fill="url(#liquidity-gradient)"
                        dot={false}
                    />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis axisLine={false} tickCount={5} tickSize={0} />
                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="4 4"
                        stroke="#aab8c2"
                    />
                </AreaChart>

            </ResponsiveContainer>
        </div>
    )
}
export default CoinTradeChart;