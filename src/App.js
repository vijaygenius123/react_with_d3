import React, { useRef, useEffect } from 'react';
import './App.css'

function App() {
  const svgRef = useRef();

  useEffect(() => {
    console.log(svgRef)
  }, [])
  return (
    <div>
      <svg ref={svgRef} height="640" width="480">
      </svg>
    </div>
  );
}

export default App;
