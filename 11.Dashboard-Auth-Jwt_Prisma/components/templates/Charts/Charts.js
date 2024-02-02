import React from 'react'
import { AreaChart,Area , LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'یکم',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
        name: 'دوم',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'سوم',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'چهارم',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'پنجم',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'ششم',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'هفتم',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Charts() {
  return (
    <div className="g-6 mb-6 chart-container" >
              <div className='chart-right'>
              <LineChart width={500} height={130} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
              </div>
              <div className='chart-left'>
              <AreaChart
          width={550}
          height={130}
          data={data}
          margin={{
            top: 10,
            right: 30,
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
              </div>
            </div>
  )
}

export default Charts