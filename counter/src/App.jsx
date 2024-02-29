import './App.css'
import { useState } from 'react'

function App() {
  const [value, setvalue] = useState(0)
  const fnp = ()=>{
    setvalue(value+1);
  }
  const fns = ()=>{
    if(value -1 < 0)
    return;
    setvalue(value-1)
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>Value : {value}</h2>
     <button onClick={fnp}>Add</button>
     <br />
     <br />
     <button onClick={fns}>Subtract</button>
    </>
  )
}

export default App
