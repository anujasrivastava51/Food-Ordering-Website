import React from 'react'
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { decrementQty, incrementQty, removeFromCart } from '../Redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const ItemCard = ({ id, name, qty, price, img }) => {
    const dispatch = useDispatch()

    return (
        <>
            <div className="flex gap-2  rounded-lg  lg:p-2  mr-6 lg:mr-0">
                <MdDelete 
                onClick={() =>{
                dispatch(removeFromCart({ id, img, name, price, qty }))
                toast(`${name} Removed!`)
            }}
               
                className='absolute right-7 text-gray-600 cursor-pointer ' />
                <img
                    src={img}
                    alt=""
                    className='w-[50px] h-[50px]' />

                <div className='leading-5'>
                    <h2 className='font-bold text-gray-800'>{name}</h2>
                    <div className='flex justify-between'>
                        <span className='text-pink-800 font-bold'>{price}</span>
                        <div className='flex justify-center items-center gap-2 absolute right-7'>
                            <AiOutlineMinus
                                onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)}
                                className='border-2 border-gray-600 text-gray  bg-white  hover:bg-pink-800 roundedd-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                            <span>{qty}</span>
                            <AiOutlinePlus
                                onClick={() => qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)}
                                className='border-2 border-gray-600 text-gray  bg-white hover:bg-pink-800 roundedd-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemCard
