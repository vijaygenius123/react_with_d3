import React, { useRef, useEffect, useState } from 'react';
import { select } from 'd3'
import './App.css'

function App() {
  const svgRef = useRef();
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll('circle')
      .data(data, (d, i) => i)
      .join(
        enter => enter
          .append('circle')
          .attr('r', d => d)
          .attr('cx', (d, i) => (i * 30) + 20)
          .attr('cy', 240)
          .attr('fill', 'blue'),
        update => {
          update.attr('fill', 'green')
        },
        exit => exit.remove()
      );
  }, [data])
  return (
    <div className="App">

      <svg ref={svgRef} height="480" width="640">
      </svg>

      <div>
        <button onClick={() => setData([...data, Math.random() * 10])}>Add Data</button>
        <button onClick={() => setData([...data.slice(1)])}>Remove Data</button>
        <button onClick={() => setData(data.filter(d => d <= 5))}>Filter Data</button>
      </div>
    </div >
  );
}

export default App;
