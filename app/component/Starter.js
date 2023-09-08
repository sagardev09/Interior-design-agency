"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import img from "@/public/Pics/img10.jpg"
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Starter = () => {
    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-div",
                pin: true,
                start: "50% 50%",
                end: "100% 50%",
                duration: 1,
                scrub: 2
            }
        })
        tl
            .to(".projectimg", {
                rotateX: 0,
            }, "a")
    }, [])

    return (
        <div className='flex flex-col items-center mt-12 relative h-[80vh] main-div'>
            <div>
                <h1 className='text-[200px] leading-[210px] tracking-wider font-semibold'>Start project</h1>
            </div>
            <div className='z-[100] relative main-div-img'>
                <Image src={img} className='h-[60vh] w-[70vw] object-fill projectimg' alt='' />
            </div>
            <div className='absolute bg-gray-500 right-0 bottom-0 h-[300px] w-[420px] bg-opacity-20'>

            </div>
        </div>
    )
}

export default Starter