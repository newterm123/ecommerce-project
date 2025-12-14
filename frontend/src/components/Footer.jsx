import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-40 text-sm'>

      {/* Main Grid Content */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 max-w-[1200px] mx-auto px-4'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
                <p>Welcome to our e-commerce store! We offer a wide range of products to meet your needs. Enjoy shopping with us!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+0-123-456-789</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>

      {/* ✅ Copyright Outside the Grid */}
      <div className='mt-10'>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center'>
          © 2025 forever.com – All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
