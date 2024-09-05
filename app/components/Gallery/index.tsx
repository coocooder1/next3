import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='' id='gallery-section'>
      <div className='ma-auto max-w-2xl lg:max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-pink text-lg font-normal mb-3'>Our Gallery</h2>
          <h3 className='text-3xl lg:text-5xl font-semibold text-black'> Gallery of our car</h3>
        </div>
        {/* {Gallery Photos} */}
        <div className='grid grid-cols-1  md:grid-cols-12 my-16 sm:space-x-6 sapce-y-6 md:space-y-0 px-6 '>
          <div className='col-span-12 flex justify-center '>
            <div className='grid grid-rows-1 grid-flow-row '>
              {/* {Top photo} */}
              <div className='row-span-1   mb-5 mt-5' >
                <Image 
                src="/867.jpg"
                alt="86"
                width={960}
                height={405}
                className='  rounded-3xl inner-img'
                />

              </div>
              {/* {Bottom Section} */}
              <div className='grid grid-cols-2 gap-2 '>
              <div >
                  <Image 
                  src="/864.jpg"
                  alt="86"
                  width={450}
                  height={405}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src="/865.jpg"
                  alt="86"
                  width={450}
                  height={300}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src="/863.jpg"
                  alt="86"
                  width={450}
                  height={300}
                  className='  rounded-3xl inner-img'
                 
                  />
                </div>
                <div >
                  <Image 
                  src="/8610.jpg"
                  alt="86"
                  width={450}
                  height={300}
                   className='  rounded-3xl inner-img'
                 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery