import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(5) 
  
  const addValue=()=>{
    setCounter(counter+1)
    console.log('clicked',Math.random())
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    console.log('clicked',Math.random())}
  }
  return (
    <>
      <h1>hello</h1>
      <h2>Counter value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br /> 
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
