
import { FaTachometerAlt, FaRegSun, FaStickyNote, FaRegChartBar, FaRegCalendarAlt } from "react-icons/fa"

const Sidebarr = () => {
    return (
        <div className='bg-amber-600 h-auto mt-5 ml-5 shadow-lg w-10px'>
                <h1 className='text-white text-[20px]  font-extrabold cursor-pointer'>Admin panel</h1>
            <div className='flex items-center gap-[15px] py-[20px] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <button className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</button>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                <FaRegSun color='white' /> <button className='text-[14px] leading-[20px] font-bold text-white'>Components</button>
                    </div>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                <FaStickyNote color='white' /> <button className='text-[14px] leading-[20px] font-bold text-white'>Pages</button>
                </div>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                <FaRegChartBar color='white'/> <button className='text-[14px] leading-[20px] font-bold text-white'>Charts</button>
                </div>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                <FaRegCalendarAlt color='white'/> <button className='text-[14px] leading-[20px] font-bold text-white'>Tables</button>
                </div>
            </div>
        </div>
            )
            }

            export default Sidebarr