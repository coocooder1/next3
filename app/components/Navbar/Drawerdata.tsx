import React from 'react'
import Link from 'next/link';
interface NavigationItem{
  name:string;
  href:string;
  current:boolean;
}
const navigation: NavigationItem[] =[
  { name:'Home', href:'#home-section', current:false},
  { name:'About us', href:'#about-section', current:false},
  { name:'Cook', href:'#cook-section', current:false},
  { name:'Gallery', href:'#gallery-section', current:false},

]
function classNames(...classes: string[]){
  return classes.filter(Boolean).join('')
}

const Data = () => {
  return (
    <div className='rounded-md max-w-sm w-full mx-auto'>
      <div className='flex-1 sapce-y-4 py-1'>
        <div className='flex  sm:block'>
          <div className='space-y-1 px-5 pt-2 pb-3'>
               {
                navigation.map((item) => (
                    <Link
                    className='flex py-2'
                    aria-current={item.current ? 'page' : undefined}
                    key={item.name}
                    href={item.href}
                    >
                      
                        {item.name}
                    </Link>
                    
                  ))
                }
                
                <div >
                  <button
                  className='flex justify-center text-bose w-full
                  font-medium rounded-full bg-bgpink  text-pink 
                  py-3 px-4 lg:px-8 navbutton hover:bg-bgpink hover:text-black'>
                    sign
                    </button>
                  <button className='mt-4 flex justify-center text-bose w-full
                  font-medium rounded-full bg-white text-pink py-3 px-4 lg:px-8 navbutton
                  hover:bg-pink hover:text-white'>Content us</button>
                </div>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Data 