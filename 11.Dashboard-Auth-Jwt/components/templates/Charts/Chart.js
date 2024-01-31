import React from 'react'
import ApexCharts from 'apexcharts'

function Chart() {
  return (
    <div>
                        <ReactApexChart options={options} series={series} type="line" height={350} />

    </div>
  )
}

export default Chart