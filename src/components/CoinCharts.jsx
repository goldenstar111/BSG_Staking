import { useEffect, useState } from 'react';
import { Tooltip, XAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { ThemeContext } from '../utils/theme/ThemeContext';
// import { Rectangle } from 'recharts';
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

const CoinCharts = ({ info }) => {
  const initialState = {
    info,
    left: "dataMin",
    right: "dataMax",
    refAreaLeft: "",
    refAreaRight: "",
    top: "dataMax+1",
    bottom: "dataMin-1",
    top2: "dataMax+20",
    bottom2: "dataMin-20",
    animation: true
  };
  const [value] = useState(info);
  const [chartState, setChartState] = useState(initialState);
  const getAxisYDomain = (from, to, ref, offset) => {
    const refData = info.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach(d => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };
  function zoom() {
    let { refAreaLeft, refAreaRight, data } = chartState;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      "impression",
      50
    );

    setChartState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }));
  }
  function zoomOut() {
    setChartState(({ data }) => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      top2: "dataMax+50",
      bottom: "dataMin"
    }));
  }
  const {
    data,
    left,
    right,
    refAreaLeft,
    refAreaRight,
    top,
    bottom,
    top2,
    bottom2
  } = chartState;
  return (
    <ThemeContext.Consumer>
      {({ isToggle, toggleTheme }) => (
        <div className='flex w-full h-64 p-2'>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={value}
              onMouseDown={e => setChartState({ refAreaLeft: e.activeLabel })}
              onMouseMove={e => chartState.refAreaLeft && setChartState({ refAreaRight: e.activeLabel })}
              onMouseUp={zoom}
            >
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
              <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} allowDataOverflow={true} domain={[left, right]} />
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
}
export default CoinCharts;