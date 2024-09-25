import { useState } from 'react'
import './App.css'
import WeatherApp from './WeatherApp'
import WeatherComponent from './WeatherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div><WeatherApp /></div>
  )

}

export default App
