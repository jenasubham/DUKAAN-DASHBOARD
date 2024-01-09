import React from 'react'
import Help from "../assets/Help.svg"
import search from "../assets/search.svg"
import group from "../assets/Group.svg"
import menu from "../assets/Menu.svg"
const Header = () => {
  return (
    <div className='flex px-4 py-2 w-[1136px] h-16 gap-4 border-b border-gray-200 bg-white justify-between'>
        <div className='flex items-center gap-4'>
            <h4 className='text-[#1A181E] text-sm font-normal leading-loose'>Payments</h4>

            <div className='text-[#4D4D4D] text-xs font-normal flex gap-1.5'>
                <img src={Help} alt="" width={14} height={14}/>
                <p>How it works</p>
            </div>
        </div>

        <div className='flex text-[#808080] w-[400px] px-4 py-3 gap-2 rounded-md bg-gray-200'>
            <img src={search} alt="" srcset="" width={16} height={16}/>
            <p>Search features, tutorials, etc.</p>
        </div>

        <div className='flex gap-3 justify-end items-end'>
            <div className=' flex w-10 h-10 bg-[#E6E6E6] items-center justify-center rounded-full'>
                <img src={group} alt="" srcset="" />
            </div>
            <div>
                <img src={menu} alt="" srcset="" width={40} height={40}/>
            </div>
        </div>
    </div>
  )
}

export default Header