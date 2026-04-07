'use client'
import Image from 'next/image'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    
    <section >
    <WavyBackground className="max-w-4xl mx-auto pb-40"> 
      <div className = 'grid grid-cols-1 sm:grid-cols-12'>
        <div className = 'col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='flex text-white   mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello,I&apos;m{" "}     
            </span> 
            <br></br>
          </h1>
          <h1 className='flex text-white   mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Rohan',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Full Stack',
                1000,
                'Web Developer',
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={3}
              />  
          </h1>
         
          <p className='text-[ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
             Hi! I&apos;m Rohan,a full-stack web developer for the passion for creating engaging 
             user experience.
          </p>
          {/* <div>
            <button className= 'px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>xyz</button>
            <button className= 'px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
             <span className='block bg-[#121212 hover:bg-slate-800 rounded-full px-5 py-2'> 
             xyz
             </span>
            </button>
          </div> */}
        </div>
        <div className = 'col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className = 'rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative'>
          <Image
             src="/images/anime_cat_codingg.png"
             alt="hero image"
             className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
             width={300}
             height={300}
          />
          </div>
        </div>  
      </div>
     </WavyBackground>
    </section>
    
  )
}

export default HeroSection