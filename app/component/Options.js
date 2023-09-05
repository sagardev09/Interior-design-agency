import Image from 'next/image'
import React from 'react'
import { data } from '@/data/optiondata'


const Options = () => {
    return (
        <div className='py-20'>
            {
                data.map((item) => (
                    <div key={item.id} className=' relative group bg-transparent h-[250px] w-[100vw] hover:bg-black transition duration-500 ease-linear cursor-pointer px-12 flex justify-between items-center z-[100000]  border-b-2 border-b-gray-400 border-opacity-20'>
                        <div className='z-[1000]'>
                            <h1 className='text-6xl text-gray-500 z-[1000] group-hover:text-orange-600'>{item.title}</h1>
                        </div>
                        <div className='z-[1000]'>
                            <div className='bg-orange-500 group-hover:bg-transparent group-hover:border-2 group-hover:border-white transition duration-500 ease-linear  rounded-3xl h-[45px] w-[100px] flex justify-center items-center'>
                                <svg className='h-[35px] rotate-90' width="50px" height="101px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                        </div>
                        <div className='absolute left-[0] translate-x-[-100%] group-hover:translate-x-[235%] transition duration-700 ease-linear top-0 z-[-10]'>
                            <Image src={item.img} alt='' className='object-fill w-[500px] h-[250px] z-[-100]' />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Options