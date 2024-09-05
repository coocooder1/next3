"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal'
interface cardDataType {
  imgSrc: string;
  heading:string;
  subheading:string;
  link:string;
}
const cardDataType: cardDataType[] = [
  {
    imgSrc:'/book.svg',
    heading:"book",
    subheading:"Craisin relish sweet potato butter",
    link:'Learn more'
  },
  {
    imgSrc:'/cook.svg',
    heading:"cook",
    subheading:"Craisin relish sweet potato butter",
    link:'Learn more'
  },
  {
    imgSrc:'/fork.svg',
    heading:"fork",
    subheading:"Craisin relish sweet potato butter",
    link:'Learn more'
  },
  {
    imgSrc:'/pot.svg',
    heading:"pot",
    subheading:"Craisin relish sweet potato butter",
    link:'Learn more'
  },
]

const Work = () => {
  return (
    <div className=' mx-auto max-w-7xl py-40 px-6' id="about-section" >
      <div className='text-center items-center mb-14'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h3 className='text-pink texxt-lg font-normal mb-3 ls-51 uppercase'>Feture</h3>
        </Fade>
        <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>  
           <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Get a amny of interesting <br/>feature</p>

        </Fade>
        <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
        <div className='grid sm:grid-cols2 lg:grid-cols-4 gap-4'>
          {
            cardDataType.map((items, i) => (
              <div key={i}
              className='card-b p-8 relative rounded-3xl g'>
                <div className=' work-img-bg rounded-full flex justify-center absoulte top-[-50%] sm:top-[-40%] md:top[-55%] lg:top-[-45%] left-[0%]'>
                  <Image 
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={110}
                  height={10}/>
                </div>
                  <h3 className='text-2xl text-black text-center mt-14'>{items.heading}</h3>
                   <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    <div className='flex items-center justify-center'>
                      <Link href='/'>
                        <p className='text-center text-lg font-medium text-pink hover-underline mt-2'>
                          {items.link}<ChevronRightIcon width={20} height={20}/>
                        </p>
                      </Link>
                  
                    </div>
                 </div>
            ))
          }
        </div>

        </Fade>
       
        
      </div>
    </div>
  )
}

export default Work