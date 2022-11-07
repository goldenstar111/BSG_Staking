import React, { useContext, useMemo } from "react";
import ReactApexChart from 'react-apexcharts'
import { ThemeContext } from "../utils/theme/ThemeContext";
const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
const BrushChart = ({ height }) => {
  const { isToggle, toggleTheme } = useContext(ThemeContext);
  var data = useMemo(() => {
    return generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
      min: 30,
      max: 90
    });
  }, [])
  const options = useMemo(() => {
    return {

      series: [{
        data: data
      }],
      options: {

        chart: {
          id: 'chart2',
          type: 'line',
          height: 230,
          offsetX: -5,
          offsetY: 50,
          toolbar: {
            autoSelected: 'pan',
            show: false
          }
        },

        colors: [isToggle ? "#9115d0" : "#9115d0"],
        stroke: {
          width: 2
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          colors: isToggle ? "#FCFBFE" : "#211e4c",
          opacity: 0.5,
          type: "solid",

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
        grid: {
          borderColor: isToggle ? '#f5f5f5' : "#33393f",
        },
        yaxis: {

          labels: {
            style: {
              colors: isToggle ? "#000" : "#aaaaaa",
            },
            formatter: function (val) {
              return "$" + (val).toFixed(0);
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
              '<span> $ ' + (series[seriesIndex][dataPointIndex]).toFixed(0) + '</span>'
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
              return "$" + (val).toFixed(0);
            }
          }
        }

      },

      seriesLine: [{
        data: data
      }],
      optionsLine: {
        grid: {
          borderColor: isToggle ? '#f5f5f5' : "#33393f",
        },
        chart: {

          id: 'chart1',
          height: 130,
          type: 'line',
          brush: {
            target: 'chart2',
            enabled: true
          },
          selection: {
            enabled: true,
            fill: {
              // color: isToggle?'#000':"#fff",
              opacity: 0.1
            },
            stroke: {
              width: 1,
              dashArray: 3,
              color: '#000',
              opacity: 0.4
            },
            xaxis: {
              min: new Date('19 Jun 2017').getTime(),
              max: new Date('14 Aug 2017').getTime()
            }
          },
        },
        colors: [isToggle ? "#9115d0" : "#9115d0"],
        fill: {
          colors: isToggle ? "#FCFBFE" : "#211e4c",
          opacity: 0.5,
          type: "solid",

        },
        xaxis: {
          type: 'datetime',
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
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2,
          show: false
        }
      },


    };
  }, [isToggle])







  return (

    <div id="wrapper">
      <div id="chart-line2">
        <ReactApexChart options={options.options} series={options.series} type="line" height={230} />
      </div>
      <div id="chart-line">
        <ReactApexChart options={options.optionsLine} series={options.seriesLine} type="line" height={130} />
      </div>
    </div>
  )
}
export default BrushChart;