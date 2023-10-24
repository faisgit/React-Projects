import React from 'react'
import { useState } from 'react'
import { Input,Button } from '@material-tailwind/react'
export default function FormTodo({addTodo}) {
    const [values,setValues] = useState("")
    const handleSumbit = (e) =>{
        e.preventDefault();
        if (!values) {
            return;
        }
        addTodo(values)
        setValues("")
    }
  return (
    <div className='flex justify-center mb-4' >
        <form action="" onSubmit={handleSumbit} className=' flex justify-center'>
          <Input type="text" label="Enter your To do List" className='w-72'  value={values} onChange={(e) => setValues(e.target.value)}/>

        </form>
    </div>
  )
}
