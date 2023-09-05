import Image from 'next/image'
import React from 'react'
import img1 from "@/public/Pics/img2.jpg"
import img2 from "@/public/Pics/img5.jpg"
import img3 from "@/public/Pics/img11.jpg"
import img4 from "@/public/Pics/img15.jpg"

const Decoration = () => {
    return (
        <main className='relative'>
            <div className='px-12 pt-8'>
                <div className='flex justify-between items-center'>
                    <div className='w-[680px] tracking-wider pb-12'>
                        <h1 className='text-5xl leading-[60px]'><span className='capitalize text-gray-500'>decorate</span>{" "}every inch of the house <span className='text-gray-500'>to make it feel homey</span></h1>
                    </div>
                    <div className='w-[520px] tracking-wider pb-12 text-end'>
                        <h5 className='text-gray-500 font-normal text-xl'>Carve out a little piece of paradise with some of our top picks, the home of your dream begins with the perfect palette for every room </h5>
                    </div>
                </div>
                <div className='flex justify-between items-center  z-[10]'>
                    <div className='cursor-pointer relative group'>
                        <Image src={img1} className='h-[600px] w-[400px] object-fill' alt='' />
                        <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%]
                    translate-y-[-50%] bg-transparent border-2 border-white transition duration-300 ease-linear  opacity-0 group-hover:opacity-100 rounded-[30px] h-[60px] w-[200px] flex justify-center items-center'>
                            <h1 className='text-white font-medium text-xl capitalize'>Learn more</h1>
                            <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div className='cursor-pointer relative group'>
                        <Image src={img2} className='h-[600px] w-[400px] object-fill' alt='' />
                        <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%]
                    translate-y-[-50%] bg-transparent border-2 border-white transition duration-300 ease-linear  opacity-0 group-hover:opacity-100 rounded-[30px] h-[60px] w-[200px] flex justify-center items-center'>
                            <h1 className='text-white font-medium text-xl capitalize'>Learn more</h1>
                            <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div className='cursor-pointer relative group'>
                        <Image src={img3} className='h-[600px] w-[400px] object-fill' alt='' />
                        <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%]
                    translate-y-[-50%] bg-transparent border-2 border-white transition duration-300 ease-linear  opacity-0 group-hover:opacity-100 rounded-[30px] h-[60px] w-[200px] flex justify-center items-center'>
                            <h1 className='text-white font-medium text-xl capitalize'>Learn more</h1>
                            <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div className='cursor-pointer relative group'>
                        <Image src={img4} className='h-[600px] w-[400px] object-fill' alt='' />
                        <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%]
                    translate-y-[-50%] bg-transparent border-2 border-white transition duration-300 ease-linear  opacity-0 group-hover:opacity-100 rounded-[30px] h-[60px] w-[200px] flex justify-center items-center'>
                            <h1 className='text-white font-medium text-xl capitalize'>Learn more</h1>
                            <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div className='bg-gray-700 absolute bg-opacity-20 z-[-1] h-[360px] bottom-0 left-0 w-[100vw]'></div>
                </div>
            </div>
        </main>
    )
}

export default Decoration