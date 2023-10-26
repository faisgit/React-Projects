import React from 'react'
import { PRODUCTS } from '../../product'
import Products from './products'
export default function Shop() {
  return (
    <div className='flex flex-wrap gap-5 px-16 justify-center'>
        {
        PRODUCTS.map((product) => (
          <Products data={product} />
        ))}
    </div>
  )
}
