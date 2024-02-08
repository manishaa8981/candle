// import "./adminSidebar.css"
// import {TiHome} from "react-icons/ti";
// import {IoMdLogOut} from "react-icons/io";
// import {Link} from "react-router-dom"
// import {FaUserCog , MdSpaceDashboard , BiSolidCategoryAlt , FaBowlFood ,IoNewspaper } from "react-icons/fa";
//
//
//
// const AdminSidebar = () => {
//     return(
//         <>
//             <div className={"admin-sidebar"}>
//                 <div className={"sidebar-brand"}>
//                     <h1><span><TiHome style={{fontSize: "2.1rem", marginBottom: "-4px", color: "black"}}/></span>The Candel Library</h1>
//                 </div>
//
//     <div className={"sidebar-options"}>
//
//             <ul className={"sidebar-list"}>
//                 <Link to={"/AdminDashboard"}>
//                     <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
//                         <span><MdSpaceDashboard style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                         <a>Dashboard</a>
//                     </li>
//                 </Link>
//                     <Link to={"/CustomerPage"}>
//                         <li className={`sidebar-list-item ${activePage === "/AdminCustomer" ? "active" : ""}`}>
//                             <span><FaUserCog style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                             <a>Customers</a>
//                         </li>
//                     </Link>
//                     <Link to={"/ManageCategory"}>
//                         <li className={`sidebar-list-item ${activePage === "/AdminCategory" ? "active" : ""}`}>
//                             <span><BiSolidCategoryAlt style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                             <a>Category</a>
//                         </li>
//                     </Link>
//                     <Link to={"/ManageItem"}>
//                         <li className={`sidebar-list-item ${activePage === "/AdminProduct" ? "active" : ""}`}>
//                             <span><FaBowlFood style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
//                             <a>Products</a>
//                         </li>
//                     </Link>
//                 <Link to={"/OrderPage"}>
//                     <li className={`sidebar-list-item ${activePage === "/AdminOrder" ? "active" : ""}`}>
//                         <span><IoNewspaper style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
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