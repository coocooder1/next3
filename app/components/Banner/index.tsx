/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
const Banner = () => {
  return (
    <div id="home-section" className='bg-lightpink'>
      <div className='mx-auto max-w-7xl pt-20 sm:pb-24 px-6'>
        <div className=' grid grid-cols-1 lg:grid-cols-12  space-x-1'>
          {/* {Lefr Section} */}
          <div className='col-span-6 flex flex-col justify-center'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
              <h1 className='text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center'>
                Cool anything <br/>with the experts
              </h1>

            </Fade>
            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
            <p className='text-grey lg:text-lg font-normal  mb-10 lg:text-start text-center'>
              the kitchen began in 2024 with a goal of serving bold,golabol <br/> flavors to our local community
            </p>
              
            </Fade>
            <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
            <div className='md:flex align-middle justify-center lg:justify-start'>
              <button className='text-xl w-full bg-pink  text-white md:w-auto rounded-full px-4 py-3 lg:px-14 mr-6'>Let's Cook</button>
              <button className=' flex border w-full md:w-auto mt-5 md:mt-0 items-center py-5 px-10 
              rounded-full border-pink justify-center text-pink hover:text-white hover:bg-pink'>Expolore now</button>
            </div>

            </Fade>
            
            
            
          </div>
          {/* {Right Section} */}
          <div className='col-span-6 flex flex-col justify-center sm:mt-5'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-2 left-50 rounded-xl absolute '>
                  {/* <Image 
                  src="/car.svg"
                  alt="car"
                  width={68}
                  height={68}/> */}
                </div>
                <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <div >
                    <Image 
                    src="/86.jpg"
                    alt="car"
                    width={1000}
                    height={805}/>
                  </div>

                </Fade>
                

          </div>
              
              
        </div>
      </div>
    </div>
  )
}

export default Banner