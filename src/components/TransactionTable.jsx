import React from 'react'

const TransactionTable = () => {
    const divs = Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className='flex w-[1128px] py-2.5 px-3 items-center justify-between gap-10 border bg-white'>
            <p className="text-sm font-medium leading-5 text-[#146EB4]">#281209</p>
            <p className="text-sm font-medium leading-5 text-[#1A181E] ml-10 mr-20">7 July, 2023</p>
            <p className="text-sm font-medium leading-5 text-[#1A181E] mr-48">₹1,278.23</p>
            <p className="text-sm font-medium leading-5 text-[#1A181E] absolute right-5">₹22</p>

            <div ></div>
        </div>
      ));
    
      return (
        <div>
          {divs}
        </div>
    
  )
}

export default TransactionTable