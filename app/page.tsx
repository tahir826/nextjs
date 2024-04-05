import React from 'react'
import Image from 'next/image'
import img from './../public/Logo.png'
import pic from './../public/Image.png'
const page = () => {
  return (
    <main>
      <div className="w-auto aspect-video border border-[#FFD4D0] bg-[#FFD4D0]">
        <div className='flex flex-wrap gap-8 justify-between'>
          <div>
            <Image src={img} alt="image" className='' />
          </div>
          <div className='flex gap-12 flex-wrap'>
            <div><p className='mt-2 font-bold text-xl font-mono'>About</p></div>
            <div><p className='mt-2 font-bold text-xl font-mono'>Service</p></div>
            <div><p className='mt-2 font-bold text-xl font-mono'>Portfolio</p></div>
            <div><p className='mt-2 font-bold text-xl font-mono'>Blog</p></div>
          </div>
          <div>
            <button className='border-black w-40 h-12 bg-black text-white text-xl'>Let's Talk</button>
          </div>
        </div>
        <div className='flex justify-between flex-wrap'>
          <div>
            <div><p className='mt-20 font-mono text-2xl'>Web Developer</p></div>
            <div><p className='mt-8 text-6xl'>Hi There, I'm</p><br /><p className='text-[#FC3314] mt-1 text-6xl'>M. Tahir</p></div>
            <div className='mt-6'><p>Welcome to my portfolio of captivating digital</p><p>experiences. Explore my work and let's create something</p><p>extraordinary together.</p></div>
            <div className='flex gap-5 mt-9 flex-wrap'>
          <button className='border w-40 h-12 text-center border-black bg-black text-white'>Hire Me</button>
          <button className='border w-40 h-12 text-center border-black bg-white text-black'>Portfolio</button>
        </div>
          </div>
          <div><Image src={pic} alt="image" className='justify-items-end' /></div>
        </div>
      </div>
      <div className='w-auto h-96 bg-[#1F1F1F]'>
      </div>
    </main>
  )
}

export default page
