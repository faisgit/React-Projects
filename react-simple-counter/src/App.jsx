import React from 'react'
import { ButtonGroup, Button } from "@material-tailwind/react";
import { useState } from 'react';
export default function App() {
  const [value,setValue] = useState(0)
  function Increment(){
    setValue(value + 1)
  }
  function Decrement() {
    if (value >0) {
      setValue(value - 1)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-bold text-xl mb-2'>Simple Counter</h1>
      <ButtonGroup>
        <Button className='font-bold text-2xl' onClick={Increment}>+</Button>
        <p className='flex justify-center items-center w-32 border-[2px]'>{value}</p>
        <Button className='font-bold text-2xl' onClick={Decrement}>-</Button>
      </ButtonGroup>
    </div>
  )
}
