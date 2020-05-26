import React, { useRef, useEffect, useState } from 'react';
import { select, scaleBand, scaleLinear, max } from 'd3'
import './App.css'
import axios from 'axios'
const COVID_19_URL = 'https://api.covid19india.org/data.json'
function App() {
  const svgRef = useRef();
  const [data, setData] = useState()

  useEffect(() => {
    const svg = select(svgRef.current);

    axios.get(COVID_19_URL).then(response => {
      //console.log(response.data)
      const data = response.data.statewise;
      console.log(data)
      const xScale = scaleBand().range([0, 640]).domain(data.map((d, i) => i));
      const yScale = scaleLinear().range([480, 0]).domain([0, max(data, d => d.confirmed)])

      console.log(xScale(10))
      console.log(yScale(150600))
      svg.selectAll('rect');

    })


  }, [])
  return (
    <div className="App">

      <svg ref={svgRef} height="480" width="640">
      </svg>
    </div >
  );
}

export default App;
