import React, { Component } from 'react';

import { CartesianGrid, ResponsiveContainer, AreaChart, Area, YAxis, XAxis, Tooltip } from 'recharts';
import { ThemeContext } from '../utils/theme/ThemeContext';
const CustomerTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className='p-3  bg-[#A015E3]  rounded-lg text-white cus_tip'>{`$ ${payload[0].value}`}</div>
        )
    }
    return null;
}
const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;


    return (

        <svg xmlns="http://www.w3.org/2000/svg" x={cx - 10} y={cy - 10} width="20" height="20" viewBox="864 106 32 32">
            <g data-name="Group 46831">
                <path d="M6 0h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6z" fill-rule="evenodd" fill="url(&quot;#a&quot;)" transform="translate(864 106)" data-name="Path" />
                <path d="M875 114h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3z" fill="#ffffff66" fill-rule="evenodd" data-name="Path" />

            </g>
            <defs>
                <linearGradient x1=".992" y1=".477" x2="0" y2=".438" id="a">
                    <stop stop-color="#8616e4" offset="0" />
                    <stop stop-color="#bb14e2" offset="1" />
                </linearGradient>
            </defs>
        </svg>
    );

};

const Chart = ({ info }) => {
    const value = [
        { name: 2009, value: 25187.44 },
        { name: 2010, value: 27356.99 },
        { name: 2011, value: 34698.98 },
        { name: 2012, value: 37587.55 },
        { name: 2013, value: 57577.4 },
        { name: 2014, value: 65577.4 },
        { name: 2015, value: 88577.4 },
        { name: 2016, value: 18577.4 },
        { name: 2017, value: 41577.4 },
        { name: 2018, value: 41577.4 },
        { name: 2019, value: 31577.4 },
        { name: 2020, value: 21577.4 },
        { name: 2021, value: 31577.4 },
        { name: 2022, value: 51577.4 },
        { name: 2022, value: 91577.4 },

    ]
    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => (
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
                                    {
                                        !isToggle ? (<stop offset="5%" stopColor="#211E4B" stopOpacity={0.8} />) : (<stop offset="5%" stopColor="#FCFAFE" stopOpacity={0.8} />)
                                    }
                                    <stop offset="100%" stopColor="#7645D9" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="natural"
                                dataKey="value"
                                stroke={isToggle ? "#FCFAFE" : "#a015e3"}
                                strokeWidth={1.5}
                                fill="url(#liquidity-gradient)"
                                dot={false}
                                activeDot={<CustomizedDot />}
                            />
                            <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} />
                            <Tooltip cursor={false} content={<CustomerTooltip />} wrapperStyle={{ top: -110, left: -70 }} />
                            {/* <Tooltip cursor={false} itemStyle={{color:"white"}} content={<customerTooltip/>} formatter={formatter} labelStyle={{display:"none"}} separator=" " contentStyle={{background:"#A015E3",borderRadius:"20px",color:"white"}} /> */}
                            <YAxis axisLine={true} tickCount={5} tick={{ fontSize: 12 }} />
                            <CartesianGrid
                                vertical={false}
                                stroke="#aab8c244"
                            />
                        </AreaChart>

                    </ResponsiveContainer>
                </div>
            )}
        </ThemeContext.Consumer>
    )
};

export default Chart;