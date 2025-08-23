import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="max-w-xs rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105 mx-auto">
      {/* AI语义 */}
      {/* <h1 className='text-3xl font-bold underline'>hello world,tailwindcss</h1> */}
      <div className="relative">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.XS6EtBzAmWWa31cfFvcx6QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
          <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors ">
            {/* //矢量图，数学形状来画图，支持无限的放大，不会模糊，区别于像素图 */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          Premium Wireless Headphones Premium Wireless Headphones Premium Wireless Headphones Premium Wireless Headphones
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          Noise-cancelling,30-hour battery life,premium sound quality.
        </p>
        <div className="flex items-center mt-2">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <span className="ml-1 text-xs  text-gray-500">4.4(128reviews)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
