"use client"
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
const Cook= () => {
  return (
    <div className='relative' id="cook-section">
      <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          {/* {left section} */}
        
              <div className='col-span-6 flex justify-center'>
                <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true} >
                <Image className="rounded-3xl px-2"
                src="/car86.jpg"
                alt="car86"
                width={635}
                height={808}/>

                </Fade>
                
              </div>

      
          
          {/* {right section} */}
          <div className='col-span-6 flex flex-col justify-center  space-x-5 mt-3'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
            <h2 className='px-5 text-pink text-lg font-normal mb-3 ls-51 uppercase'>Cook with us</h2>

            </Fade>
              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <h3 className='text-3xl lg:text-4xl font-semibold text-start text-black'>Cooking together with the expert</h3>

              </Fade>
              <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                    German exporters sold more goods to Poland than to China in the first half of the year,
                    an analysis showed,
                      marking the success of a diversification drive by major German 
                      companies as they look to reduce their dependence on the Chinese market.
                  </p>
                  <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vel repellat
                  veritatis porro...
                  </p>
                  <div className='flex align-middle justify-center md:justify-start'>
                    <button className='text-xl bg-pink text-white rounded-full py-5 px-5 lg:px-10'>Learn more</button>
                  </div>

              </Fade>
              
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cook