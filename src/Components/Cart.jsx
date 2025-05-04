import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
 


const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state)=>state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item)=> totalQty +item.qty, 0); 
  const totalPrice = cartItems.reduce(
    (total, item) =>  total + item.qty * item.price,0
  );

  const navigate = useNavigate()

  
  return (
    <>
       <div className={`fixed right-0 top-0 p-5 lg:w-[22vw] h-full bg-white ${activeCart?'translate-x-0':'translate-x-full'} transition-all duration-500 z-50`}>
         <div className='flex justify-between items-center my-3'>
           <span className='text-xl font-bold text-gry-800'>My Order</span>
           <AiOutlineClose 
               onClick={()=>setActiveCart(!activeCart)}
               
           className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-purple-900 hover:border-purple-900 cursor-pointer' />
         </div>
            
         {cartItems.length>0 ? cartItems.map((food)=> <ItemCard key={food.id}
           id={food.id}
           name={food.name}
           price={food.price}
           img= {food.img}
           qty= {food.qty}
         />

         ):<h2 className='text-center tetx-xl font-bold text-gray-500'>Your cart is empty</h2>}
        
         <div className='absolute bottom-0' >
           <h3 className='font-semibold text-gray-800'>Items:{totalQty} </h3>
           <h3 className='font-semibold text-gray-800'>Total : {totalPrice} </h3>
           <hr className='w-[90vw] lg:w-[18vw] my-2 font-semibold text-gray-800'/>
           <button onClick={()=>navigate("/success")}
           className='bg-pink-900 font-bold px-3 py-2 text-white rounded-lg w-[40vw] lg:w-[18vw] mb-5'>Checkout</button>
       </div>
       </div>
       <FaCartShopping    
       onClick={()=>setActiveCart(!activeCart)} 
       className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  )
}

export default Cart
