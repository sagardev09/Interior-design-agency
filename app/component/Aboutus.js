/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import img from "@/public/Pics/img16.jpg"

const Aboutus = () => {
    return (
        <>

            <div className='w-[100vw] flex'>
                <div className='w-[30vw] h-[80vh] '>
                    <div className='relative left-[150px] top-[15%] z-10'>
                        <Image src={img} className='h-[600px] w-[600px] object-fill' alt='' />
                    </div>
                </div>
                <div className='w-[70vw] bg-gray-500 bg-opacity-20 h-[80vh]'>
                    <div className='float-right flex flex-col justify-end items-end mr-14 mt-32 gap-24'>
                        <h1 className='text-4xl capitalize font-normal  tracking-wide w-[750px] text-end '>
                            <span className='text-black'>The key diference between ordinary and special,</span>
                            <span className='text-gray-500 '>no matter the season, our spaces are nuanced as the life styles they reflect,</span>
                            <span className='text-black '>don't just dream it</span>
                        </h1>
                        <div className='flex items-center justify-between w-[600px]'>
                            <div className='flex justify-between flex-col  gap-2'>
                                <h1 className='text-6xl font-normal tracking-wide'>300 <span className='text-orange-600 '>+</span></h1>
                                <h5 className='text-xl capitalize text-gray-500'>success project</h5>
                            </div>
                            <div className='flex justify-between flex-col  gap-2'>
                                <h1 className='text-6xl font-normal tracking-wide'>200 <span className='text-orange-600'>+</span></h1>
                                <h5 className='text-xl capitalize text-gray-500'>product launches</h5>
                            </div>
                            <div className='flex justify-between flex-col  gap-2'>
                                <h1 className='text-6xl font-normal tracking-wide'>180 <span className='text-orange-600'>K</span></h1>
                                <h5 className='text-xl capitalize text-gray-500'>happy customers</h5>
                            </div>
                        </div>
                        <div className='flex items-center w-[200px] rounded-3xl gap-8 bg-black pl-6 py-2 cursor-pointer'>
                            <div className='text-white capitalize'>about us</div>
                            <div className=''>
                                <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#FF9B50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-[1px] w-[100vw] bg-black bg-opacity-20  ml-[57px] '></div>
        </>
    )
}

export default Aboutus