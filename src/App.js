import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3'
import './App.css'
import axios from 'axios'
const COVID_19_URL = 'https://api.covid19india.org/data.json'
function App() {
  const svgRef = useRef();
  const [data, setData] = useState()

  useEffect(() => {
    const svg = select(svgRef.current);

    axios.get(COVID_19_URL).then(response => {
      console.log(response.data)
      setData(response.data.statewise)
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
