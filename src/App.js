import React, { useRef, useEffect } from 'react';
import { select } from 'd3'
import './App.css'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function App() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    svg.selectAll('circle')
      .data(data)
      .join(
        enter => enter
          .append('circle')
          .attr('r', d => d)
          .attr('cx', (d, i) => (i * 30) + 20)
          .attr('cy', 240),
        update => console.log(update),
        exit => console.log(exit)
      );
  }, [])
  return (
    <div>
      <svg ref={svgRef} height="480" width="640">
      </svg>
    </div>
  );
}

export default App;
