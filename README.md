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

3. The svgRef will contain the svg element once the svg component is rendered, So it is safe to use in useEffect. Then you can use select to perform a d3 selection.

```js
import React, {useRef, useEffect} from 'react';

const App = () =>{
    const svgRef = useRef()

    useEffect(()=>{
        const svg = select(svgRef);
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