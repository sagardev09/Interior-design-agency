"use client"
import React, { useEffect, useState } from 'react'
import { gsap, Power1 } from 'gsap'
import { Nav } from '@/context/GlobalContext'



const Navbar = () => {

    const { openmenu, togglemenu } = Nav()
    console.log(openmenu);

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(".title", {
            duration: 1,
            x: 0,
            ease: Power1.easeOut,
            opacity: 1
        }, "a").to(".options", {
            duration: 1,
            y: 0,
            ease: Power1.easeOut,
            opacity: 1
        }, "a").to(".bar", {
            duration: 1,
            x: 0,
            ease: Power1.easeOut,
            opacity: 1
        }, "a")
    }, [])

    return (
        <>
            <div className='flex justify-between items-center px-12 py-4 relative h-[70px]'>
                <div className='flex justify-between items-end translate-x-[-300%] opacity-0 title'>
                    <h1 className='text-4xl transform scale-x-[-1]'>N</h1>
                    <p className='text-orange-600 text-3xl'>.</p>
                </div>
                <div className='flex justify-between items-center gap-20 translate-y-[-300%] opacity-0 options'>
                    <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>about</h5>
                    <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>product</h5>
                    <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>project</h5>
                    <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>services</h5>
                </div>
                <div className='z-10 bar translate-x-[300%] opacity-0'>
                    <div className='flex flex-col gap-3 cursor-pointer' onClick={togglemenu}>
                        <div className={openmenu ? "bg-orange-600 h-[3px] w-[35px] transition ease-out 700 custom-animate" : 'bg-orange-600 h-[3px] w-[35px] transition ease-out 700'}></div>
                        <div className='bg-gray-600 h-[3px] w-[35px]'></div>
                    </div>
                </div>
                <div className='absolute bg-gray-500 right-0 top-0 h-[70px] w-[420px] bg-opacity-20'></div>
            </div>

        </>
    )
}

export default Navbar