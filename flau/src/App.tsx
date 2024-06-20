import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroLoader from './component/HeroLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroLoader/>
    </>
  )
}

export default App
