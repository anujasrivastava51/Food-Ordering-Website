import React from 'react';
import { useDispatch } from "react-redux";
import { setSearch } from '../Redux/Slices/SearchSlice';

const Navbar = () => {

  const dispatch = useDispatch()
  return ( 
    <nav className='flex flex-col lg:flex-row justify-between  py-3 mx-6 mb-10' >
          <div>
             <h1>{new Date().toUTCString().slice(0,16)}</h1>
             <h1 className='text-xl font-bold text-gray-600'>BEST FOODS</h1>
          </div>
          <div>
             <input type="search"
             name="search" 
             id="" 
             placeholder="search here" 
             autoComplete='off'
             onChange={(e)=> dispatch(setSearch(e.target.value))}
             className='p-3 px-5  border border-white-900 text-sm rounded-lg w-full lg:w-[25vw]'
             />
          </div>
    </nav>
  )
}

export default Navbar
