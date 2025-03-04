import Link from 'next/link'
import React from 'react'
import { Navbar } from './navbar'
import { TemplatesGallery } from './templates-gallery'

const Home = () => {
 return (
  <div className='flex min-h-screen flex-col '>
   <div className='fixed top-0 left-0 right-0 z-10 h-16 bg-white o-4'>
    <Navbar />
   </div>
   <div className='mt-16'>
    <TemplatesGallery />
   </div>
  </div>
 )
}

export default Home
