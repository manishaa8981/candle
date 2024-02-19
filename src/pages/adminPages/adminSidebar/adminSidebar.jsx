// SidebarMenu.js

import "./adminSidebar.css"
import {MdSpaceDashboard, } from "react-icons/md";
import { BiSolidCategoryAlt} from "react-icons/bi";
import {TiHome} from "react-icons/ti";
import {IoMdLogOut} from "react-icons/io";
import {FaBowlFood} from "react-icons/fa6";
import {Link} from "react-router-dom"

import {FaUserCog} from "react-icons/fa";
import {IoNewspaper} from "react-icons/io5";

const SidebarMenu=({ activePage }) => {
    return(
        <>
            <div className={"main"}>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand"}>
                    <h1>The Candle Library</h1>
                </div>
                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <Link to={"/AdminDashboard"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
                                <span><MdSpaceDashboard style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Dashboard</a>
                            </li>
                        </Link>
                        <Link to={"/AdminCustomer"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminCustomer" ? "active" : ""}`}>
                                <span><FaUserCog style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Customers</a>
                            </li>
                        </Link>
                        <Link to={"/AdminCategory"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminCategory" ? "active" : ""}`}>
                                <span><BiSolidCategoryAlt style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Category</a>
                            </li>
                        </Link>

                        <Link to={"/AdminProduct"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminProduct" ? "active" : ""}`}>
                                <span><FaBowlFood style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Products</a>
                            </li>
                        </Link>
                        <Link to={"/AdminOrder"}>
                            <li className={`sidebar-list-item ${activePage === "##AdminOrder" ? "active" : ""}`}>
                                <span><IoNewspaper style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                <a>Orders</a>
                            </li>
                        </Link>

                    </ul>
                </div>



                <div className={"sidebar-btn"}>
                    <button type={"button"}><span><IoMdLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/></span>Log Out</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default SidebarMenu
// import "./adminSidebar.css"
// import { useState } from 'react'
// import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
// import Sidebarr from "./sidebarr.jsx";
//
//
// const SidebarMenu = () => {
//     const [open, setOpen] = useState(false)
//
//     const showProfile = () => {
//         // alert("helloo")
//         setOpen(!open)
//     }
//
//     return (
//         <div className=''>
//             <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px] '>
//                 <div className='flex items-center rounded-[5px]'>
//                     <input type="text" className=' bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
//                     <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
//                         <FaSearch color='white' />
//                     </div>
//
//                 </div>
//                 <div className='flex items-center gap-[20px]'>
//                     <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
//                         <FaRegBell />
//                         <FaEnvelope />
//                     </div>
//                     <div className='flex items-center gap-[15px] relative' onClick={showProfile} >
//                         <p>Douglas McGee</p>
//                         {
//                             open &&
//                             <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
//                                 <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
//                                 <p className='cursor-pointer hover:text-[blue] font-semibold'>Settings</p>
//                                 <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <div className='w-20% mr-40%'>
//                 <Sidebarr/>
//             </div>
//
//         </div>
//     )
// }
//
//





// import "./adminSidebar.css"
// import {TiHome} from "react-icons/ti";
// import {IoMdLogOut} from "react-icons/io";
// import {Link} from "react-router-dom"
// import { NotebookTabs } from 'lucide-react';
// import { RxDashboard } from "react-icons/rx";
// import { BiSolidCategory } from "react-icons/bi";
// import { GiCandleLight } from "react-icons/gi";
// import { IoIosPeople } from "react-icons/io";
//
//
// const AdminSidebar = () => {
//     return(
//         <>
//             <div className="sidebar">
//                 <div className="sidebarWrapper">
//                     <div className="sidebarMenu">
//                         <h3 className="sidebarTitle">Dashboard</h3>
//                         <ul className="sidebarList">
//                             <li className={`sidebarListItem ${isLinkActive("/Admindashboard") ? "active" : ""}`}>
//                                 <Link to="/Admindashboard" className="sidebarLink">
//                                     <RxDashboard />
//                                     Home
//                                 </Link>
//                     <li className={`sidebarListItem ${isLinkActive("/AdminCustomer") ? "active" : ""}`}>
//                         <Link to="/AdminCustomer" className="sidebarLink">
//                             <IoIosPeople />
//                             Customer
//                         </Link>
//                     </li>
//                     <Link to={"/ManageCategory"}>
//                         <li className={"sidebar-list-item"}>
//                             <span><BiSolidCategory style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                             <a>Category</a>
//                         </li>
//                     </Link>
//                     <Link to={"/ManageItem"}>
//                         <li className={"sidebar-list-item"}>
//                             <span><GiCandleLight style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                             <a>Products</a>
//                         </li>
//                     </Link>
//                 <Link to={"/OrderPage"}>
//                     <li className={"sidebar-list-item"}>
//                         <span><NotebookTabs style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                         <a>Orders</a>
//                     </li>
//                 </Link>        </ul>
//    </div>
//         <div className={"sidebar-btn"}>
//             <button type={"button"}><span><IoMdLogOut
//                 style={{fontSize: "1.3rem", marginBottom: "-3px", marginRight: "3px"}}/></span>Log Out
//             </button>
//         </div>
//     </div>
//         </>
//     )
// }
//
// export default AdminSidebar