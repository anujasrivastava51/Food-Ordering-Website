import React, { useEffect, useState } from 'react'
import { PropagateLoader } from "react-spinners"
const Success = () => {

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
     setTimeout(()=>{
        setLoading(false)
     },3000)
  },[])
  return (
    <>
      <div className='bg-purple-900 flex flex-col items-center justify-center h-screen'>
        {
          loading ? <PropagateLoader color ="white"/> :
          <div>
          <h2 className='text-3xl text-white font-semibold mb-4 text-center'>Order Successful!</h2>
          <p className='text-white '>Your order has been successfully placed</p> 
          </div>
        }
        
       
      </div>
    </>
  )
}

export default Success
