import "../css/Sidebar.css";
import logo from '../assets/logo-3.png';
import {GoHome, GoPeople} from "react-icons/go";
import {MdOutlineEventAvailable, MdOutlineEventNote} from "react-icons/md";
import {TbCategory} from "react-icons/tb";
import {FaSignOutAlt} from "react-icons/fa";
 function Sidebar(){

     return(
         <>
             <div className={"sidebar"}>
                 <div className={"logo"}>
                     <img src={logo} />
                     <span>Cos<span>m</span>eto</span>
                 </div>
                 <div className={"menu"}>
                     <div className={"menuItem"}>
                         <div><GoHome/></div>
                         <span>Dashboard</span>
                     </div>
                     <div className={"menuItem"}>
                         <div><MdOutlineEventNote/></div>
                         <span>Orders</span>
                     </div>
                     <div className={"menuItem"}>
                         <div><GoPeople/></div>
                         <span>Customers</span>
                     </div>
                     <div className={"menuItem"}>
                         <div><MdOutlineEventAvailable/></div>
                         <span>Products</span>
                     </div>
                     <div className={"menuItem"}>
                         <div><TbCategory/></div>
                         <span>Category</span>
                     </div>
                     <div className={"menuItem"}>
                         <div><FaSignOutAlt /></div>
                         <span>Sign Out</span>
                     </div>
                 </div>
             </div>
         </>
     )
 }

export default Sidebar