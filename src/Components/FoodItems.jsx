import React from 'react'
import FoodCard from './FoodCard'
import toast, { Toaster } from 'react-hot-toast'
import FoodData from '../data/FoodData.js'
import { useSelector } from 'react-redux'


const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`)
  const category = useSelector((state)=> state.category.category);
  const search = useSelector((state)=>state.search.search);  
  return (
    <>
      <Toaster position = 'top-center' reverseOrder={false}/>
       <div className='flex flex-wrap gap-10 justify-center items-center  mx- my-10'>
          {FoodData.filter((food)=>{
             if(category === "All"){
               return food.name.toLowerCase().includes(search.toLowerCase());
             }else{
               return category === food.category;
             }
          }).map((food)=>{
            return <FoodCard 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast = {handleToast}/>
          })}
           
           
           
           
           {/* {FoodData.map((food)=>{
            
           })}  */}
       </div>
    </>
  )
}

export default FoodItems
