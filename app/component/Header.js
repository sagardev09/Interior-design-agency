"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import img1 from "@/public/Pics/img4.jpg"
import img2 from "@/public/Pics/img6.jpg"
import img3 from "@/public/Pics/img7.jpg"
import mainimg from "@/public/Pics/img1.jpeg"
import Menu from './Menu'
import { Nav } from '@/context/GlobalContext'
import { gsap, Power4 } from 'gsap'

const Header = () => {

    const { openmenu, togglemenu } = Nav()

    useEffect(() => {

    }, [])


    return (
        <>
            <div className='relative'>
                <div className='px-12'>
                    <div>
                        <h1 className='text-[200px] capitalize tracking-wider font-semibold'>transform</h1>
                        <div className='z-30'>
                            <h1 className='text-[210px] capitalize -mt-[100px] tracking-wide font-semibold'>your space</h1>
                        </div>

                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex flex-col w-[200px] rounded-3xl gap-4 bg-black pl-8 py-2 cursor-pointer overflow-hidden h-[52px] group'>
                            <div className='flex items-center group-hover:translate-y-[-200%] transition 700 ease-linear'>
                                <div className='text-white'>Start Project</div>
                                <div className=''>
                                    <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#FF9B50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </div>
                            </div>
                            <div className='flex items-center translate-y-[100%] group-hover:translate-y-[-145%] transition 700 ease-linear'>
                                <div className='text-white'>Get Started</div>
                                <div className=''>
                                    <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#FF9B50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-[200px] rounded-3xl gap-4 bg-white border border-black pl-8 py-2 cursor-pointer h-[52px] overflow-hidden group'>
                            <div className='flex items-center group-hover:translate-y-[-200%] transition 700 ease-linear'>
                                <div className='text-black'>Learn More</div>
                                <div>
                                    <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </div>
                            </div>
                            <div className='flex items-center translate-y-[100%] group-hover:translate-y-[-145%] transition 700 ease-linear'>
                                <div className='text-black'>Learn More</div>
                                <div>
                                    <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-8 flex flex-col gap-1 capitalize text-lg px-3 text-gray-600'>
                        <p>the mind creates the</p>
                        <p>beautiful, the heart creates</p>
                        <p>the home, home sweet home</p>
                    </div>
                    <div className='flex items-center gap-4 px-3'>
                        <Image className='h-[200px] w-[200px] object-contain' src={img1} alt='' />
                        <Image className='h-[200px] w-[200px]' src={img2} alt='' />
                        <Image className='h-[200px] w-[200px]' src={img3} alt='' />
                    </div>
                </div>
                <div className='h-[1px] w-[100vw] bg-black bg-opacity-20 mt-[100px] ml-[57px] '></div>
                <div className='absolute bg-gray-500 right-0 top-0 h-[600px] w-[420px] bg-opacity-20 z-[-1] '>
                    <h5 className='capitalize relative top-[110px] left-[125px] w-[250px] text-end text-xl text-zinc-700'>interior design  agency since 1998</h5>
                </div>
                <div className='absolute top-[222px] right-[340px] z-[-1] main-img'>
                    <Image src={mainimg} alt='' className='h-[700px] w-[550px]' />
                </div>
                <div className='bg-orange-500 rounded-3xl h-[90px] w-[50px] absolute bottom-[50px] right-[40px] flex justify-center items-center'>
                    <svg className='h-[35px] rotate-180' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
                {openmenu && <div className='absolute right-0 top-0 transition-opacity ease-linear 700'>
                    <Menu />
                </div>}
            </div>

        </>
    )
}

export default Header