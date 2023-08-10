import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1920px] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-16 px-4 grid  lg:grid-cols-3  gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-orange-500'>DashDine</h1>
          <p>
            Delivering culinary excellence to your door. Taste the convenience today.
            Eat
            Healthy. Eat Smart. Eat Well. Eat DashDine.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>DashDine</h6>
            <ul>
              <li className='py-2 text-sm'>Our history</li>
              <li className='py-2 text-sm'>work with us</li>
              <li className='py-2 text-sm'>recipes blog</li>
              <li className='py-2 text-sm'>App</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Our Promises</h6>
            <ul>
              <li className='py-2 text-sm'>Free delivery and returns</li>
              <li className='py-2 text-sm'>plans and prices</li>
              <li className='py-2 text-sm'>Flexible payment options</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
            <ul>
              <li className='py-2 text-sm'>Brasil</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>India</li>
              <li className='py-2 text-sm'>Canada</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>Contact Us</h6>
            <ul>
              <li className='py-2 text-sm'>000 111 222 333</li>
              <li className='py-2 text-sm'>dashfood@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer