import Image from 'next/image'
import React from 'react'
import img from "@/public/Pics/img10.jpg"

const Starter = () => {
    return (
        <div className='flex flex-col items-center mt-12 relative'>
            <div>
                <h1 className='text-[200px] leading-[210px] tracking-wider font-semibold'>Start project</h1>
            </div>
            <div className='z-[100]'>
                <Image src={img} className='h-[60vh] w-[60vw] object-fill' alt='' />
            </div>
            <div className='absolute bg-gray-500 right-0 bottom-0 h-[300px] w-[420px] bg-opacity-20'>

            </div>
        </div>
    )
}

export default Starter