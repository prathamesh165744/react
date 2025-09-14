import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  count=15

  return (
    <>
    <h1>counter:{count}</h1>
    <button onClick={count+1}>add {count}</button>
    <button onClick={count-1}>remove{count}</button>
    
      </>
  )
}

export default App
