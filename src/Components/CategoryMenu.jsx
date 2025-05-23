import React, { useState, useEffect } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/Slices/CategorySlice';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([])

  const listUniqquesCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories)
  }

  useEffect(() => {
    listUniqquesCategories()
  }, [])

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category)
  return (
    <>
      <div className='ml-6'>
        <h3 className='text-xl font-semibold'>Find the best Food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
          <button
             onClick={()=> dispatch(setCategory("All"))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-purple-900 hover:text-white ${selectedCategory === "All" && "bg-purple-900 text-white"}`}>All</button>
          {
            categories.map((category, index) => {
              return (
                <button
                  onClick={()=>dispatch(setCategory(category))}
                  key={index} 
                  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-purple-900 hover:text-white ${selectedCategory === category && "bg-purple-900 text-white"}`}>{category}</button>
              )

            })
          }
        </div>
      </div>
    </>
  )
}

export default CategoryMenu

