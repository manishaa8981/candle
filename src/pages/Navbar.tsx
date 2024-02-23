// import { FaSearch } from "react-icons/fa";
// import Logo from '../assets/logo-3.png';

import "../css/Homepage.css"
// import {FaRegHeart} from "react-icons/fa";
// import {IoSearchOutline} from "react-icons/io5";

function Navbar(){
    return (
        <>
           <div className={"pageholder"}>
               <div className={"navbar"}>
                   <div className={"navbar-wrapper"}>
                       <div className={"left"}>

                       </div>
                       <div className={"mid"}>
                           <h1> The Candles Library</h1>

                       </div>
                       <div className={"right"}>
                        <ul>
                            <li className={"account"}>
                                <a href={""}>Account</a>
                            </li>
                            <li className={"search"}>
                                <a href={""}>
                                    Search
                                    {/*<span><IoSearchOutline /></span>*/}
                                </a>
                            </li>
                            <li className={"cart"}>
                                <a href={""}>
                                    Cart
                                    {/*<span><FaRegHeart /></span>*/}
                                </a>
                            </li>
                        </ul>
                       </div>
                   </div>
               </div>

           </div>

        </>
    )
}
export default Navbar



// <div className={"main"}>
// <div className={"navbar"}>
//
//     <div className={"left"}>
//         <div className={"logo-img"}>
//             <img width={100} height={100}  src={Logo} />
//         </div>
//         <div className={"search-wrapper2"}>
//             <span><FaSearch /></span>
//             <input type={"search"} placeholder={"Search..."}/>
//         </div>
//     </div>
//
//
//     <div className={"right"}>
//         <button className={"login-btn"}>
//             Login
//         </button>
//         <button className={"cart-btn"}>
//             Cart
//         </button>
//     </div>
// </div>
//
// <div className={"body"}>
//     <div className={"body-content-1"}>
//         Your Beauty Destination
//     </div>
//     <div className={"body-content-2"}>
//         Give yourself a treat
//     </div>
//
// </div>
// </div>