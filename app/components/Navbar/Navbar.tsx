'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Drawer from './Drawer'
import Drawerdata from './Drawerdata'
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
const Navbar = () => {
 const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Disclosure as="nav" className="navbar">
        <>
             <div className='mx-auto max-w-7xl p-3 lg:px-8 '>
                <div className='relative flex items-center'>
                    <div className='flex flex-1 items-center sm:justify-between'>
                        {/*Logo */}
                        <div className='hidden sm:flex flex-shrink-0 items-center border-right'>
                            <Image 
                            src="/hair.svg"
                            alt="logo"
                            width={36}
                            height={36}
                            />
                            <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                            Cook&apos;s Kitchen
                            </Link>
                        </div>
                        {/*Menu Links */}
                        <div className='hidden lg:flex items-center border-right'>
                            <div className='flex justify-end space-x-4'>
                                {
                                    navigation.map((item) => (
                                        <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(item.current ? 'bg-black' :
                                        'navlinks hover:opacity-100','px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links')}>
                                         
                                            {item.name}
                                        </Link>
                                    ))
                                }
                               
                             
                            </div>
                        </div>
                        {/* {Buttton Section} */}
                        <div className='gap-6 hidden lg:flex '>
                            <div className='flex item-center gap-2'>
                                <Image 
                                src="/phone.svg"
                                alt="phone"
                                width={35}
                                height={21}
                                />
                                <p className='mt-2 text-lg font-medium '>
                                    +91 98722 22993
                                </p>
                            </div>
                            <div className='hidden md:block'>
                                <button className='flex justify-end text-xl font-medium
                                bg-bgpink text-pink py-2 px-4 lg:px-8 navbutton rounded-full
                                hover:text-white hover:bg-pink'>
                                 <Link href="/sign">Sign in</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* {Dramer for Mobile view} */}
                    {/* {Homburger Menu} */}
                    <div className='block lg:hidden'>
                        <Bars3Icon
                        className='block w-6 h-6'
                        aria-hidden="true"
                        onClick={() => setIsOpen(true)}/>
                    </div>
                    {/* {DrawerLinks Data} */}
                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata/>

                    </Drawer>
                </div>
             </div>
        </>

    </Disclosure>
  )
}

export default Navbar