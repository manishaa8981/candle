import "./homenarbar.css"
import {NavLink , Link} from "react-router-dom";
import { Search , ShoppingBag} from 'lucide-react';
import {useState} from "react";
// const HomeNavbar = () => {
//     return (
//         <>
//             <header className={"flex justify-between h-20 items-center bg-transparent font-poppins w-100% rounded-t-md  "}>
//                 <nav className={" flex justify-evenly  items-center w-[92%] mx-auto  "}>
//                     <a href={"/"}
//                        className={"font-40 font-bold  'Roboto', sans-serif  text-center text-black  text-4xl"}>The
//                         Candel Library</a>
//
//                     <ul className={"flex justify-evenly  items-center gap-[4vw] md:ml-8 md:my-0 my-7"}>
//                         <li><NavLink to={"/"}>Home</NavLink></li>
//
//                         <li><NavLink to={"/AboutUs"}>About Us</NavLink></li>
//
//                         <li><NavLink to={"/Contact"}>Contact</NavLink></li>
//
//                         <li><NavLink to={"/Cart"}>Cart</NavLink></li>
//                     </ul>
//                     <Link to={"/LoginForm"}><button className={"rounded-md"}>Login</button></Link>
//                     {/*<div className={"btn-style"}>*/}
//                     {/*    <Link to={"/LoginForm"}> <h4  className={"rounded-md"}><a>VIEW PRODUCTS</a></h4></Link>*/}
//                     {/*</div>*/}
//                 </nav>
//             </header>
//         </>
//     );
// };


const HomeNavbar = () => {
    const [menuOpen , setMenuOpen] = useState(false);
    return (
        <>
            {/*<header className={"flex justify-between h-18 items-center bg-transparent font-poppins w-100% rounded-t-md border-1 border-gray-200 shadow-gray-200  "}>*/}
                <nav >
                    <a href={"/"} className={"title"}>The Candle Library</a>

                    <div className={"menu"} onClick={() =>{
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={"search"}><input className="search-bar" type="text" placeholder="Search" /></div>

                    <ul className={menuOpen ? "open" : ""}>
                        <li><Link to={"/Cart"}> <ShoppingBag className={"cart"}  size={"30px"}/></Link></li>

                        <li><Link to={"/LoginForm"}><button className={"rounded-md border-none text-black"}>Login</button></Link></li>

                        <li><Link to={"/RegisterForm"}><button className={"rounded-md border-none text-black"}>Sign Up</button></Link></li>
                    </ul>


                    {/*<div className={"btn-style"}>*/}
                    {/*    <Link to={"/LoginForm"}> <h4  className={"rounded-md"}><a>VIEW PRODUCTS</a></h4></Link>*/}
                    {/*</div>*/}
                </nav>
            {/*</header>*/}
        </>
    );
};


export default HomeNavbar;
