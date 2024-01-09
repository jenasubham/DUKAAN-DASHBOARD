import React from 'react'
import arrow from "../assets/arrow.svg"
const Overview = () => {
  return (
    <div>
        <div className='flex justify-between items-center self-stretch m-8'>
        <h1 className='text-[#1A181E] text-xl font-semibold leading-7'>Overview</h1>
        <button className='flex items-center border rounded bg-white border-[#D9D9D9] py-1.5 px-3 gap-2'>
            <p className='text-[#4D4D4D] text-base font-normal leading-6'>Last Month</p> 
            <img src={arrow} alt="" width={16} height={16} className='' />
        </button>
        </div>

        <div className='flex gap-5 self-stretch items-start'>
            <div className="flex flex-col p-4 items-start gap-4 flex-1 rounded-md bg-white shadow-md" >
                <div className='flex flex-col gap-4 self-stretch items-start'>
                    <p className='text-[#4D4D4D] text-base font-normal leading-6'>Online orders</p>
                <h1 className=' text-[#1A181E] text-3xl font-medium leading-tight'>231</h1>
                </div>
            </div>
            <div className="flex flex-col p-4 items-start gap-4 flex-1 rounded-md bg-white shadow-md" >
                <div className='flex flex-col gap-4 self-stretch items-start'>
                    <p className='text-[#4D4D4D] text-base font-normal leading-6'>Amount received</p>
                    <h1 className=' text-[#1A181E] text-3xl font-medium leading-tight'>₹23,92,312.19</h1>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview