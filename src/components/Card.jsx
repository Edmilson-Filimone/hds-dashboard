/* eslint-disable react/prop-types */
import {BsArrowRepeat} from 'react-icons/bs'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

function Card({label, value, icon, iconBg, iconColor}) {
  return (
    <div className='my-6 border border-outline rounded-sm shadow-xl'>
      <ul className='w-full md:w-[250px] h-[140px] 2xl:w-[310px] p-4 bg-white'>
        <li className='flex justify-between mb-2'>
          <span className={`relative flex justify-center items-center w-[65px] h-[65px] text-[28px] rounded-full shadow-xl border ${iconBg} ${iconColor}`}>{icon}</span>
          <div>
            <span className='block text-right text-card-label text-[15px]'>{label}</span>
            <span className='block text-right text-card-value text-2xl'>{value}</span>
          </div>
        </li>
        <li className='border-t pt-4 text-[15px] flex justify-between items-center text-sub-title'>
            <div className='flex items-center gap-1'>
                <span>25</span>
                <span className='text-[10px]'>Synchronized</span>
                <AiOutlineCheck className='text-green-600'/>
            </div>
            <div className='flex items-center gap-1'>
                <span>15</span>
                <span className='text-[10px]'>Pending</span>
                <BsArrowRepeat className='text-yellow-500'/>
            </div>
            <div className='flex items-center gap-1'>
                <span>5</span>
                <span className='text-[10px]'>Error</span>
                <AiOutlineClose className='text-red-600'/>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Card