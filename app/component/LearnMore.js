import React from 'react'
import Image from 'next/image'
import img from "@/public/Pics/img3.jpg"
import playbtn from "@/public/SVG/play.svg"

const LearnMore = () => {
    return (
        <>

            <div className='px-14 flex justify-between gap-20 relative h-[70vh]'>
                <div className='w-[30vw] flex flex-col gap-20 my-28'>
                    <div>
                        <h1 className='text-5xl capitalize font-normal  tracking-wide w-[520px] text-start '><span className='text-gray-500 '>capture</span>{" "}the spirit of spring <span className='text-gray-500 '>in your home</span></h1>
                    </div>
                    <div>
                        <h5 className='text-gray-500 w-[500px] tracking-wider text-lg'>
                            we provide guidance and direction in your interior design, inspire your space through art and design, create a space that reflects who you are
                        </h5>
                    </div>
                    <div className='mt-20'>
                        <div className='flex items-center w-[200px] rounded-3xl gap-4 bg-black pl-6 py-2 cursor-pointer'>
                            <div className='text-white capitalize'>learn more</div>
                            <div className=''>
                                <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#FF9B50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[70vw] h-[100%] flex justify-center items-center'>
                    <div className='relative'>
                        <Image src={img} alt='' className='h-[600px] w-[1000px] object-fill' />
                        <div className='absolute top-[50%] left-[50%] h-[180px] w-[180px] rounded-full  transform translate-x-[-50%] translate-y-[-50%] border-[4px] border-white z-[1000]'>
                            <div className='h-[100%] w-[100%] rounded-full flex justify-center items-center'>
                                <Image src={playbtn} className='h-[80px] w-[80px] ml-3 z-[1000]' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute h-[300px] z-[-1] w-[400px] bg-opacity-30 bg-gray-500 bottom-0 left-0'>
                </div>
            </div>

            <div className='h-[1px] w-[90vw] bg-black bg-opacity-20 '></div>
        </>
    )
}

export default LearnMore