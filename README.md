## React With D3

### Setup 

1. Create an svg element and a reference to it with useRef

```js
import React, {useRef} from 'react';

const App = () =>{
    const svgRef = useRef()
    return{
        <div>
        <svg ref={svgRef}>
        </svg>
        </div>
    }
}

export default App;
```

2. Install and import d3 

```bash
npm install --save d3
```

```js
import {select} from 'd3';
```

3. The svgRef.current will contain the reference to the svg element once the svg component is rendered, So it is safe to use in useEffect. Then you can use select to perform a d3 selection.

```js
import React, {useRef, useEffect} from 'react';

const App = () =>{
    const svgRef = useRef()

    useEffect(()=>{
        const svg = select(svgRef.current);
        console.log(svg)
    },[])
    return{
        <div>
        <svg ref={svgRef}>
        </svg>
        </div>
    }
}

export default App;
```

4. use D3 to render the required chart elements

```js
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
```