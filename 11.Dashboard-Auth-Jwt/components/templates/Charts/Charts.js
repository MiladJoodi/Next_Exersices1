import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { LineChart, Line, Legend } from "recharts";
import ApexCharts from 'apexcharts'
import Chart from './Chart'
const data = [
  {
    name: "یکم",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "دوم",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "سوم",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "چهارم",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "پنجم",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "ششم",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "هفتم",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Charts() {
  return (
    <div className="g-6 mb-6 chart-container">
      <div className="chart-right shadow">
        <AreaChart
          width={500}
          height={150}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <Chart />
      </div>
      <div className="chart-left shadow">
        <LineChart width={500} height={150} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default Charts;
