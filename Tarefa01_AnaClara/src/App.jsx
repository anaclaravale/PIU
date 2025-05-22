import { useState } from 'react'
import './App.css'
import ChangeTheme from './components/ChangeTheme'
import Selection from './components/Selection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChangeTheme/>
    <Selection/>
    </>
  )
}

export default App
