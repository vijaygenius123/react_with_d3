import React, { useRef, useEffect, useState } from 'react';
import { select, scaleBand, scaleLinear, extent, max, scaleSqrt, scalePow } from 'd3'
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
      const data = response.data.statewise.filter(d => d.statecode != 'TT');
      console.log(data)

      const xScale = scaleBand().range([0, 1280]).padding(0.4).domain(data.map((d, i) => i));
      const yScale = scaleLinear().range([800, 0]).domain([0, max(data, d => +d.confirmed)])

      console.log(extent(data, d => +d.confirmed))
      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', (d) => yScale(+d.confirmed))
        .attr("width", xScale.bandwidth())
        .attr("height", d => 800 - yScale(+d.confirmed))
        .attr('class', 'bar')
    });

  }, [])
  return (
    <div className="App">

      <svg ref={svgRef} height="800" width="1280">
      </svg>
    </div >
  );
}

export default App;
