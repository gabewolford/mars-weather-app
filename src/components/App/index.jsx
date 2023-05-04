import { useState, useEffect } from 'react'
import './styles.css'

function App() {
  const [weather, setWeather] = useState([])
  
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${import.meta.env.VITE_API_KEY}&feedtype=json&ver=1.0`)
      const data = await res.json()
      console.log(data)
    }

    getData()
  })

  return (
    <>
      <h1 className='text-2xl'>Mars Weather App</h1>
    </>
  )
}

export default App
