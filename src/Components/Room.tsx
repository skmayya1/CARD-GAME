import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Room = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-between bg-gray-900'>
        <Header />
        <div className="flex justify-between items-center p-6 w-full max-w-7xl mx-auto bg-gray-800 rounded-lg h-[80%]">

        </div>
        <Footer />
    </div>
  )
}

export default Room