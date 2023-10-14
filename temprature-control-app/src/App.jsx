import React from 'react'
import { useState } from 'react'
export default function App() {
  const [temp,setTemp] = useState(0)
  const [whetherColor,setWetherColor] = useState('bg-blue-500')
  function tempColor(temp){
    if (temp < 14) {
      setWetherColor('bg-blue-500')
    }
    else if (temp > 14 && temp < 30) {
      setWetherColor('bg-yellow-500')
    }
    else if(temp > 30){
      setWetherColor('bg-orange-500')
    }

  }
  
  function incTemp() {
    setTemp(temp+ 1)
    tempColor(temp)
  }
  function decTemp() {
    setTemp(temp - 1)
    tempColor(temp)
  }
  return (
    <main className='flex justify-center items-center h-screen'>
    <div className='flex flex-col justify-between items-center h-96 w-64 rounded-xl shadow-2xl bg-black text-white pt-10 pb-8 '>
      {/* Displaying Temperature  */}
      <div className={`h-52 w-52 border-2 ${whetherColor} border-xl border-white rounded-full flex justify-center items-center `}>
        <p className='font-semibold text-4xl'>{temp}&deg;C</p>
      </div>
      {/* Changing Temperature Section */}
      <div className=' w-52 flex justify-between items-center'>
        <button className='h-16 w-16 font-semibold text-3xl border-2 border-white rounded-full hover:bg-white hover:text-black duration-700 text-center' onClick={incTemp}>+</button>
        <button className='h-16 w-16 font-semibold text-3xl border-2 border-white rounded-full hover:bg-white hover:text-black duration-700 text-center' onClick={decTemp}>-</button>
      </div>
    </div>
    </main>
  )
}
