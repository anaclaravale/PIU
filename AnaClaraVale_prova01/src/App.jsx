import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import ListaModeloCor from './components/ListaModeloCor'
import ListaAno from './components/ListaAno'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
      <ListaModeloCor/>
      <ListaAno/>
    </>
  )
}

export default App