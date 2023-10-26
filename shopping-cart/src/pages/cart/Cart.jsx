import {React , useContext} from 'react'
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from '../../product';
import CartItems from './cart-items';
import { Button } from '@material-tailwind/react';
import {useNavigate} from 'react-router-dom'
export default function Cart() {
  const {cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate =  useNavigate()
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mb-5'>
        <h1 className='font-bold text-3xl'>Your Cart Items</h1>
      </div>
      <div className='flex flex-col flex-wrap justify-center gap-5'>
        {
          PRODUCTS.map(product => {
            if (cartItems[product.id] !== 0) {
              return <CartItems data={product} />
            }
          })
        }
      </div>
{
  totalAmount > 0 ? 
      <div>
        <p>SubTotal: ${totalAmount}</p>
        <div className='flex'>
          <Button className='mr-4' size='sm' onClick={() => navigate('/')}>Continue Shopping</Button>
          <Button size='sm'>Checkout</Button>
        </div>
      </div>
      : 
      <h1 className='flex justify-center text-3xl'>Your Cart is Empty</h1>
}
    </div>
  )
}
