import React from 'react'

const Card = () => {
  return (
    
      <div className='flex flex-col items-center bg-neutral-700/90 mt-10 w-max py-10 px-5 rounded-lg shadow-lg hover:cursor-pointer        hover:scale-103 hover:shadow-md transition'>
       <img src="./public/img1.png" alt="BarberShop Logo" className=" w-[500px] h-[661px] mb-5  shadow-lg  [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] mask-repeat-no-repeat " />
      <h1 className="text-4xl font-bold  text-center text-[#ffd60a]">
        Welcome to BarberShop
      </h1>
      <p className="text-center mt-5 text-neutral-100 text-xl">Your one-stop solution for all your grooming needs.</p>
      </div>
    
  )
}

export default Card
