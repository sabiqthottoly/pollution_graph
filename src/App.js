import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { Button,Container,Row } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import './App.css';

import RenderLineChart from './src/Charts';


function App() {
  const [data, setData] = useState([])

  let date = new Date();
  date.setDate(date.getDate());

  const [startDate, setStartDate] = useState(new Date());

  date.setDate(date.getDate() + 1);
  const [toDate, setToDate] = useState(date);

  const pushArray = []

  function fetchData(){
    console.log(startDate.toISOString().replace('Z','').trim().split('.')[0] + '+00:00')
    console.log(toDate.toISOString().replace('Z','').trim().split('.')[0] + '+00:00')
    axios.get("https://api.openaq.org/v2/measurements", {
      params: {
        country_id: 'IN',
        country: 'IN',
        city: "Delhi",
        date_from: startDate.toISOString().replace('Z','').trim().split('.')[0] + '+00:00',
        date_to: toDate.toISOString().replace('Z','').trim().split('.')[0] + '+00:00',
        limit: 20
      }
    })
      .then(res => {
        console.log(res)
        res.data.results.forEach((item, index) => {
          pushArray.push({ cities: item.location, value: item.value })
        })
        setData(pushArray)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
      fetchData()    
  }, [])

  return (
    <Container>
      <RenderLineChart data={data} />
      <div style={{ justifyContent: 'center', display: 'flex', marginTop: 20 }}>
        <div style={{ marginRight: 20 }}>
          <h5>Date From :</h5>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
        <div>
          <h5>Date To :</h5>
          <DatePicker selected={toDate} onChange={date => setToDate(date)} />
        </div>
      </div>
      <Row style={{display:'flex',justifyContent:'center',marginTop: 20}}>
        <Button color='primary' onClick={fetchData}>
          Get Data
        </Button>
      </Row>
    </Container>
  );
}
export default App;
