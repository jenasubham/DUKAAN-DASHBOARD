import React from 'react'
import profileImg from "../assets/profileImg.svg"
import chevronDown from "../assets/Chevron Down.svg"
import walletIcon from "../assets/walletIcon.svg"
import { NavData } from '../../NavData'

const Navbar = () => {
  return (
    <div className='text-white bg-[#1E2640] flex flex-col w-[224px] p-4 px-2 items-center gap-4 flex-1 0 0'>
      <div className='flex'>
          <div className='w-10 h-10 absolute left-3.5 top-3.5 space-y-4 rounded bg-cover bg-no-repeat bg-center bg-gray-200'>
          <img src={profileImg} alt="ProfileImg" />
          </div>

          <div className='flex flex-col items-center px-3'>
          <h3 className=' '>Nishyan</h3>
          <h3 className=' text-[13px] font-light leading-4 underline underline-offset-2 opacity-80'>Visit store</h3>
          </div>
            <img src={chevronDown} alt="Chevron Down" className=' '/>
            
      </div>

      <div>
        {
          NavData.map((item) => {
            const { title, icon } = item; 
            const backgroundColorClass = item.id === "7"?'bg-gray-200 bg-opacity-10' : '';
            return (
              <li key={item.id} className={`list-none flex w-52 py-2 px-4 rounded gap-3 ${backgroundColorClass}`}>
                <img src={icon} alt={title} /> 
                {title}
              </li>
          );
          })
        }
      </div>

      <div className='flex bg-[#353C53] h-[54px] w-48 py-1 px-2 rounded gap-2.5 items-end'>
        <div className='bg-gray-200 bg-opacity-10 w-12 h-8 rounded flex items-center justify-center'>
          <img src={walletIcon} alt="walletIcon" className=' w-6 h-6'/>
        </div>

        <div className="flex flex-col items-start w-48  gap-2.5 rounded">
          <p className='text-[13px] font-extralight opacity-80 leading-4'>Available credits</p>
          <h4 className='leading-4 font-medium'>222.10</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar