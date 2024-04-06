import React from 'react'
import Image from 'next/image'
import img from './../public/Logo.png'
import pic from './../public/Image.png'
import _1 from './../public/1.png'
import _2 from './../public/2.png'
import _3 from './../public/3.png'
import _4 from './../public/4.png'
import card1 from './../public/card1.png'
import card2 from './../public/card2.png'
import card3 from './../public/card3.png'
import card4 from './../public/card4.png'
import card5 from './../public/card5.png'
import card6 from './../public/card6.png'
import skill1 from './../public/skill1.png'
import skill2 from './../public/skill2.png'
import skill3 from './../public/skill3.png'
import skill4 from './../public/skill4.png'
import skill5 from './../public/skill5.png'
import skill6 from './../public/skill6.png'
import info from './../public/info.png'
import card_1 from './../public/card_1.png'
import card_2 from './../public/card_2.png'
import card_3 from './../public/card_3.png'
import frame1 from './../public/frame1.png'
import frame2 from './../public/frame2.png'
import frame3 from './../public/frame3.png'
import { Container } from 'postcss'
const page = () => {
  return (
    <main>
      <div className="w-auto aspect-video border border-[#FFD4D0] bg-[#FFD4D0]">
        <div className='ml-24 mr-24'>
          <div className='flex flex-wrap gap-8 justify-between mt-10'>
            <div>
              <Image src={img} alt="image" />
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
            <div><Image src={pic} alt="image" className='align-bottom' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-auto h-96 bg-[#1F1F1F]'>
        <div className='flex justify-center'>
          <p className='text-2xl font-bold  mt-10 text-white'>
            About Me
          </p>
        </div>
        <div>
          <p className='flex justify-center text-center text-white mt-8'>
            I'm M. Tahir, a UI/UX designer dedicated to crafting intuitive and visually stunning digital<br />experiences. With a passion for user-centric design, I transform ideas into functional and beautiful<br /> interfaces. Let's collaborate and shape the future of design together.
          </p>
        </div>
        <div className='ml-80 mr-80 mt-14'>
          <div className='flex justify-between'>
            <div className='flex-col text-center'><p className='text-6xl text-[#FFD4D0]'>502</p><p className='text-white text-xl mt-4'>Project Done</p></div>
            <div className='flex-col text-center'><p className='text-6xl text-[#FFD4D0]'>10+</p><p className='text-white text-xl mt-4'>Year of Experience</p></div>
            <div className='flex-col text-center'><p className='text-6xl text-[#FFD4D0]'>273+</p><p className='text-white text-xl mt-4'>Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-auto h-96 mb-24'>
        <div className='flex justify-center'>
          <p className='text-2xl font-bold  mt-14 text-black'>
            Services
          </p>
        </div>
        <div>
          <p className='flex justify-center text-center text-black mt-6'>
            Explore my design services, from user interface and experience to prototyping and testing. Let's craft<br />exceptional digital experiences together.
          </p>
        </div>
        <div className='flex mr-32 ml-32 mt-9'>
          <div className='flex gap-9'>
            <div className='text w-64'><Image src={_1} alt="pic" /><p className='text-2xl font-bold mt-7'>Design</p><p className='mt-4'>I specialize in web development<br />and design, creating visually<br />appealing, user-friendly digital<br />experiences.</p></div>
            <div className='text w-64'><Image src={_2} alt="pic" /><p className='text-2xl font-bold mt-7'>Branding</p><p className='mt-4'>I'm a branding expert, crafting<br />unique visual identities that tell<br />your story and resonate with your<br />audience.</p></div>
            <div className='text w-64'><Image src={_3} alt="pic" /><p className='text-2xl font-bold mt-7'>Research</p><p className='mt-4'>"I specialize in user experience<br />research, collaborating on web<br />development, and ensuring user<br />friendly digital products.</p></div>
            <div className='text w-64'><Image src={_4} alt="pic" /><p className='text-2xl font-bold mt-7'>Usability Testing</p><p className='mt-4'>I perform usability testing and<br />optimize designs websites based<br />on real-user feedback for<br />seamless interactions.</p></div>
          </div>
        </div>
      </div>
      <div className='w-auto h-[910px]'>
        <div className='w-auto h-80 bg-[#FFD4D0]'>
          <div className='flex flex-col justify-center'>
            <p className='font-bold text-2xl text-black mt-14 text-center'>My Portfolio</p>
            <p className='text-center mt-6'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft<br />exceptional digital experiences together.</p>
          </div>
          <div className='flex flex-wrap mt-10 ml-16 justify-around mr-16 gap-y-9'>
            <div><Image src={card1} alt="cards" /></div>
            <div><Image src={card2} alt="cards" /></div>
            <div><Image src={card3} alt="cards" /></div>
            <div><Image src={card4} alt="cards" /></div>
            <div><Image src={card5} alt="cards" /></div>
            <div><Image src={card6} alt="cards" /></div>
          </div>
        </div>
      </div>
      <div className='w-auto h-[500px] justify-center'>
        <div className='flex flex-col text-center'><p className='text-2xl font-bold mt-10'>Core Design Skills</p><p className='mt-8'>I excel in essential design skills, creating visually stunning and functional digital experiences. From UI<br />design to UX research, my passion is to craft effective and memorable digital solutions.</p></div>
        <div className='flex justify-center gap-6 mt-16'>
          <div className='flex-col'>
            <Image src={skill1} alt="skill" />
            <Image src={skill2} alt="skill" />
            <Image src={skill3} alt="skill" />
          </div>
          <div className='flex-col'>
            <Image src={skill4} alt="skill" />
            <Image src={skill5} alt="skill" />
            <Image src={skill6} alt="skill" />
          </div>
        </div>
      </div>
      <div className='w-auto h-[350px] bg-[#FFD4D0]'>
        <div className='flex justify-center'><p className='text-2xl mt-24 font-bold text-black'>Testimonials</p></div>
        <div className='flex text-center justify-center mt-5'><p className='text-center'>Sara Jones's designs are both visually captivating and highly effective. She transformed our<br />website, enhancing user engagement and conversions. Her attention to detail and creative<br />approach are top-notch. Highly recommended!</p></div>
        <div className='flex justify-center'><Image src={info} alt='info' className='mt-6' /></div>
      </div>
      <div className='w-auto h-[750px]'>
        <div className='flex justify-center'><p className='text-2xl mt-20 font-bold text-black'>Design Insights and Inspiration</p></div>
        <div className='flex text-center justify-center mt-5'><p className='text-center'>Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in<br />web design and user experience.</p></div>
        <div className='flex justify-center gap-6 mt-14'>
          <div><Image src={card_1} alt="cards" /></div>
          <div><Image src={card_2} alt="cards" /></div>
          <div><Image src={card_3} alt="cards" /></div>
        </div>
      </div>
    </main>
  )
}

export default page
