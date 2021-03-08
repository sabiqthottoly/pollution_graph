import { Chart, Interval, Tooltip } from 'bizcharts';
import React, { useEffect } from 'react'

function RenderLineChart(props) {
    return (
        <Chart height={400} autoFit data={props.data} interactions={['active-region']} padding={[30, 30, 30, 50]} >
            <Interval position="cities*value" />
            <Tooltip shared />
        </Chart>
    )

}

export default RenderLineChart