import { useState } from 'react'
import Bottles from './components/Bottles'

const promisData = fetch('/bottle.json').then(res=> res.json())
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Bottles promisData = {promisData} ></Bottles>
    </>
  )
}

export default App
