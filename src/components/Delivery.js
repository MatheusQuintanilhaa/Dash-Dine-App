import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2  max-md:w-[85%]'>

        <div className='relative'>

        <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt='img of foods in phone' />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
          <p className='flex text-justify break-all'>
            Explore a world of delicious cuisines right at your fingertips. With our app, you can enjoy seamless ordering and swift delivery
            anytime, anywhere. Our wide range of restaurants and quick service ensure that you'll have a delightful dining experience.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery