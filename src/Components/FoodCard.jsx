import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';
 
const FoodCard = ({id, name, price, desc, img, rating, handleToast}) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='font-bold w-[250px] p-5 bg-white
      flex flex-col rounded-lg gap-2'>
         <img
          src={img}
          alt=""
          className='w-auto h-[130px] hover:scale-110 cursor-grab transiton-all duration-500 ease-in-out'/>
      
      <div>
          <h2>{name}</h2>
          <span className='text-pink-900'> ₹ {price}</span>
      </div>
       <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='text-sm flex justify-between'>
           <span className='flex justfy-content-center items-center'>
            <FaStar className='mr-1 text-yellow-400 '/>{rating}
            </span>
           <button onClick={()=>{
              dispatch(addToCart({
                id, name, price, rating, qty:1,img
              }) )
              handleToast(name)
           
           }}
           className='p-1 text-white bg-pink-900 hover:bg-pink-800 rounded-lg text-sm'
           >Add to cart</button>
        </div>
      </div>
    </>
  )
}

export default FoodCard
