import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Room = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-between'>
        <Header />
        <Footer />
    </div>
  )
}

export default Room