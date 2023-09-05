import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center px-12 py-4 relative h-[170px]'>
            <div className='flex justify-between items-end'>
                <h1 className='text-4xl transform scale-x-[-1]'>N</h1>
                <p className='text-orange-600 text-3xl'>.</p>
            </div>
            <div className='flex justify-between items-center gap-20'>
                <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>about</h5>
                <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>product</h5>
                <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>project</h5>
                <h5 className='capitalize text-lg font-normal text-zinc-600 cursor-pointer'>services</h5>
            </div>
            <div className='z-10'>
                <div className='flex flex-col gap-3 cursor-pointer '>
                    <div className='bg-orange-600 h-[3px] w-[35px]'></div>
                    <div className='bg-gray-600 h-[3px] w-[35px]'></div>
                </div>
            </div>
            <div className='absolute bg-gray-500 right-0 top-0 h-[170px] w-[420px] bg-opacity-20'></div>
        </div>
    )
}

export default Footer