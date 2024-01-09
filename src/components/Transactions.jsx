import React from 'react'
import search from "../assets/search.svg"
import sort from "../assets/Sort.svg"
import download from "../assets/download.svg"
import Triangle from "../assets/Triangle-Icon.svg"
import info from "../assets/Info.svg"
import TransactionTable from './TransactionTable'


const Transactions = () => {
  return (
    <div className='mt-8'>
        <h2 className='text-[#1A181E] text-xl font-semibold leading-7'>Transactions | This Month</h2>

        <div className='flex justify-between items-center self-center mt-5'>
            <div className='flex text-[#999] w-[248px] px-4 py-2.5 gap-2 rounded bg-white border border-[#D9D9D9'>
                <img src={search} alt="" srcset="" width={14} height={14}/>
                <p>Search by order ID...</p>
            </div>

            <div className='flex justify-end items-center gap-3'>
                <button className='flex items-center border rounded bg-white border-[#D9D9D9] py-1.5 px-3 gap-1.5'>
                    <p className='text-[#4D4D4D] text-base font-normal leading-6'>Sort</p> 
                    <img src={sort} alt="" width={16} height={16} className='' />
                </button>

                <button className='flex items-center border rounded bg-white border-[#D9D9D9] py-1.5 px-3'>
                    <img src={download} alt="" width={20} height={20} />
                </button>
            </div>
        </div>

        <div className='flex w-[1128px] py-2.5 px-3 items-center justify-between gap-10 border rounded bg-[#F2F2F2]'>
            <p className="text-sm font-medium leading-5 text-[#4D4D4D]">Order ID</p>
            <div className='flex gap-1'>
                <p className="text-sm font-medium leading-5 text-[#4D4D4D]">Order date</p>
                <img src={Triangle} width={14} height={14} />
            </div>
            <p className="text-sm font-medium leading-5 text-[#4D4D4D]">Order amount</p>
            <div className='flex gap-1'>
                <p className="text-sm font-medium leading-5 text-[#4D4D4D]">Transaction fees</p>
                <img src={info} width={14} height={14} />
            </div>
        </div>
        <TransactionTable/>
    </div>
  )
}

export default Transactions