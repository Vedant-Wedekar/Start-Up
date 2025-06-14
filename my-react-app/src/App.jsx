import React from 'react'
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import C from './assets/cv.webp';
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import F from './assets/f.jpg';
import D from './assets/D.jpg';
import { FaStar } from "react-icons/fa";
import k from './assets/k.png';

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full px-4 pb-10'>

      {/* Header */}
      <div className="flex justify-between items-center py-6">
        <IoReorderTwoOutline className="text-white text-2xl sm:text-3xl" />
        <IoIosSearch className="text-white text-2xl sm:text-3xl" />
        <img src={C} alt="CV" className='w-12 h-10 rounded-full' />
        <CgProfile className="text-white text-2xl sm:text-3xl" />
        <IoBagOutline className="text-white text-2xl sm:text-3xl" />
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl font-medium mb-4">🌼 Daisy Whispers Jar</h1>

      {/* Product Images */}
      <div className="space-y-6">
        <img src={D} alt="Product D" className='w-full h-72 object-cover rounded-2xl' />
        <img src={F} alt="Product F" className='w-full h-72 object-cover rounded-2xl' />
      </div>

      {/* Rating & Sold */}
      <div className="flex justify-between items-center mt-6 flex-wrap gap-3">
        <div className="text-green-500 flex items-center gap-1 px-3 text-lg rounded-full bg-green-100 py-1">
          <FaStar /> 4.4
        </div>
        <div className="flex gap-2 items-baseline">
          <div className="text-green-500 font-bold text-xl">1000+</div>
          <div className="text-white font-bold text-sm sm:text-lg">Sold Till Now</div>
        </div>
      </div>

      {/* Description */}
      <h2 className="text-white text-xl sm:text-2xl font-medium mt-8">🌼 Daisy Whispers Jar</h2>
      <p className="text-white text-sm mt-2">
        Delicate 🍃, dreamy ☁️, and effortlessly charming 🌼 — our Daisy Whispers Jar is more than just a container. It’s a little piece of spring you can hold in your hand 🌷.
      </p>

      {/* Buy Button */}
      <div className="bg-white w-full sm:w-60 mx-auto text-center py-2 rounded-2xl font-bold mt-6 cursor-pointer hover:bg-gray-200 transition">
        Buy It Now
      </div>

      {/* Product Info */}
      <div className="bg-[#1d1d1f] text-white mt-6 p-4 rounded-xl text-sm leading-6">
        <h3 className="text-lg font-bold mb-2">Product Information</h3>
        <p><strong>Name:</strong> Design juice and drinks glass can cup tumbler Sipper bottle with bamboo lid and straw for daily use, 540ml</p>
        <p><strong>Material:</strong> Glass</p>
        <p><strong>Type:</strong> Tumbler</p>
        <p><strong>Product Breadth:</strong> 3 Inch</p>
        <p><strong>Product Height:</strong> 5 Inch</p>
        <p><strong>Product Length:</strong> 5 Inch</p>
        <p><strong>Net Quantity (N):</strong> Pack Of 1</p>
        <p><strong>Description:</strong> Unique design juice and drinks glass can cup tumbler Sipper bottle with bamboo lid and straw for daily use, 540ml</p>
        <p><strong>Country of Origin:</strong> India</p>
      </div>

      {/* Decorative Image */}
      <img src={k} alt="Decor" className='mt-10 w-full px-2' />

      {/* Contact Section */}
      <h3 className="text-white text-xl mt-10">CONTACT US</h3>
      <p className="text-white text-sm mt-2">For any inquiries, please reach out to us at support@example.com</p>

      <h3 className="text-white text-xl mt-8">FOLLOW US</h3>
      <p className="text-white text-sm mt-2">Stay updated with our latest products and offers by following us on social media.</p>

      <p className="text-white text-xs mt-10 text-center">© 2025 Daisy Whispers. All rights reserved.</p>
    </div>
  )
}

export default App;
