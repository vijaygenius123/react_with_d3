import React, { useRef, useEffect } from 'react';
import { select } from 'd3'
import './App.css'

const data = [1, 2, 3, 4, 5]
function App() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef);
    console.log(svg)
  }, [])
  return (
    <div>
      <svg ref={svgRef} height="640" width="480">
      </svg>
    </div>
  );
}

export default App;
