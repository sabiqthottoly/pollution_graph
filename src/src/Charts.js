import { Chart, Interval, Tooltip } from 'bizcharts';
import React,{useEffect} from 'react'


const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 45 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
function RenderLineChart(props){
    console.log("props.data",props.data)
 return(
    <Chart height={400 } autoFit data={props.data} interactions={['active-region']} padding={[30, 30, 30, 50]} >
    <Interval position="cities*value" />
    <Tooltip shared />
  </Chart>
 )

}

export default RenderLineChart