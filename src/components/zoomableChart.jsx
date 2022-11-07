import { useState, useContext } from "react"
import ReactApexChart from 'react-apexcharts'
import dataSeries from "../constants/chartData";
import { ThemeContext } from "../utils/theme/ThemeContext";
const ZoomableChart = ({ height }) => {

  let ts2 = 1484418600000;
  let dates = [];
  for (let i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    dates.push([ts2, dataSeries[1][i].value]);
  }


  return (
    <ThemeContext.Consumer>
      {({ isToggle, toggleTheme }) => {
        const chartState = {

          series: [{
            name: '',
            data: dates
          }],

          options: {
            height: 400,
            grid: {
              borderColor: isToggle ? '#f5f5f5' : "#33393f",
            },
            colors: [isToggle ? "#9115d0" : "#9115d0"],
            stroke: {

              curve: ['smooth', 'straight', 'stepline'],
              width: 2,
            },
            chart: {
              stacked: true,
              zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: false
              },
              offsetX: -5,
              offsetY: 50,
              toolbar: {
                autoSelected: 'zoom',
                show: true
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
              colors: ["#B760EC", "#fff"],
              strokeColors: ['#AB15E3', "#fff"],
              strokeWidth: 5,
              shape: "circle",
              radius: 2,
              hover: {
                size: 7,
                sizeOffset: 30,
                shape: "square",
                radius: 1,
              }
            },
            fill: {
              colors: isToggle ? "#FCFBFE" : "#211e4c",
              opacity: 0.5,
              type: "solid",

            },
            yaxis: {

              labels: {
                style: {
                  colors: isToggle ? "#000" : "#aaaaaa",
                },
                formatter: function (val) {
                  return "$" + (val / 10000).toFixed(0);
                },
              },
            },
            xaxis: {
              axisBorder: {
                color: isToggle ? "#f5f5f5" : "#33393F",
                show: true,
              },
              axisTicks: {
                show: false
              },
              labels: {
                style: {
                  colors: isToggle ? "#000" : "#aaaaaa",
                },
              },
              type: 'datetime',
            },
            tooltip: {
              custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                // console.log("series", w)
                return "<div class='p-3  bg-[#A015E3]  rounded-lg text-white cus_tip'>" +
                  '<span> $ ' + (series[seriesIndex][dataPointIndex] / 10000).toFixed(0) + '</span>'
                  + "</div>"
              },
              marker: {
                show: false,
              },
              shared: false,
              x: {
                show: false
              },
              y: {
                formatter: function (val) {
                  return "$" + (val / 10000).toFixed(0);
                }
              }
            }
          },
        };
        return (
          <div id="chart" className="w-full h-full" width={"100%"}  >
            <ReactApexChart options={chartState.options} series={chartState.series} type="area" width={"100%"} height={height} />
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ZoomableChart;