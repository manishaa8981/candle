import "./adminSidebar.css"
import {TiHome} from "react-icons/ti";
import {IoMdLogOut} from "react-icons/io";
import {Link} from "react-router-dom"


const AdminSidebar = () => {
    return(
        <>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand"}>
                    <h1><span><TiHome style={{fontSize: "2.1rem", marginBottom: "-4px", color: "black"}}/></span>The Candel Library</h1>
                </div>

    <div className={"sidebar-options"}>

            <ul className={"sidebar-list"}>
            <li className={"sidebar-list-item"}><Link to={"/"}>Dashboard</Link></li>

            <li className={"sidebar-list-item"}><Link to={"/AdminCustomer"}>Customer</Link></li>

            <li className={"sidebar-list-item"}><Link to={"/AdminCategory"}>Category</Link></li>

            <li className={"sidebar-list-item"}><Link to={"/AdminProduct"}>Products</Link></li>

            <li className={"sidebar-list-item"}><Link to={"/AdminOrder"}>Order</Link></li>
        </ul>
   </div>
        <div className={"sidebar-btn"}>
            <button type={"button"}><span><IoMdLogOut
                style={{fontSize: "1.3rem", marginBottom: "-3px", marginRight: "3px"}}/></span>Log Out
            </button>
        </div>
    </div>
        </>
    )
}

export default AdminSidebar