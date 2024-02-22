import "./homenarbar.css"
import {NavLink , Link} from "react-router-dom";
import { Search , ShoppingBag} from 'lucide-react';
import {useEffect, useState} from "react";
// import {CloseButton} f   rom "react-bootstrap";
// import axios from "axios";
// import {data} from "autoprefixer";
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
    // const [search , setSearch ] = useState("");
    // const [product , setProduct] =useState([])
    // const fetchProduct = async () => {
    //     const response = await axios.get('http://localhost:8081/product/getAll');
    //     setProduct(response.data);
    //     console.log(response.data);
    // }
    // const handleChange = (e) => {
    //     setSearch(e.target.value);
    // }
    // const handleClose = (e) => {
    //     setSearch(e.target.value);
    //     product([]);
    //     setSelectedItem(-1)
    // };
    // const handlekeyDown = e =>{
    //     if(selectedItem < product.length){
    //         if(e.key === "ArrowUp" && selectedItem > 0){
    //             setSelectedItem( prev => prev - 1)
    //         }
    //         else if
    //         (e.key === "ArrowDown" && selectedItem < product.length-1){
    //             setSelectedItem( prev => prev + 1)
    //         }
    //         else if(e.key === "Enter" && selectedItem >= 0){
    //             product[selectedItem].show.value
    //         }
    //     }
    //     else{
    //        setSelectedItem(-1)
    //     }
    //
    //
    // }
    //
    //
    // useEffect(() => {
    //     if(search !== ""){
    //         const newFilterData = data.filter(product =>{
    //             return product.productName.toLowerCase().includes(search.toLowerCase())
    //         })
    //         setProduct(newFilterData)
    //     }
    //     else{
    //         setProduct([]);
    //     }
    // }, []);


    return (
        <>
            <nav>
                <a href={"/"} className={"title"}>The Candle Library</a>

                <div className={"menu"} onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/*<div className={"search"}><input className="search-bar" type="text" placeholder="Search" /></div>*/}
                <div className="box">
                    <i className="fa fa-search" aria-hidden="true"><Search/></i>
                    <input type="search" placeholder="Search"/>
                </div>


                {/*<div className="box">*/}
                {/*    <i className="fa fa-search" aria-hidden="true"><Search/>*/}
                {/*    <CloseButton onclick={handleClose} />*/}
                {/*    </i>*/}
                {/*    <input type="text" placeholder="Search" className={"search-input"}*/}
                {/*    autoComplete={"off"}*/}
                {/*    value={search}*/}
                {/*    onKeyDown={handlekeyDown}/>*/}
                {/*</div>*/}
                {/*<div className={"search-result"}>*/}
                {/*{product.slice(0,10).map((data , index) => (*/}
                {/*    <a*/}
                {/*    key={index}*/}
                {/*    href={data.link} // Adjust this according to your data structure*/}
                {/*    target={"blank"}*/}
                {/*    className={selectedItem === index ? "search-suggestion active" : "search-suggestion"} />),*/}
                {/*   {data.productName}*/}
                {/*    )*/}
                {/* }*/}
                {/*</div>*/}

                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to={"/Cart"}> <ShoppingBag className={"cart"} size={"30px"}/></NavLink></li>

                    <li><NavLink to={"/LoginForm"}>
                        <button className={"login-button"} >Login</button>
                    </NavLink></li>

                    <li><NavLink to={"/RegisterForm"}>
                        <button className={"login-button"}>Sign Up</button>
                    </NavLink></li>
                </ul>
            </nav>

            {/*<div className={"btn-style"}>*/}
            {/*    <Link to={"/LoginForm"}> <h4  className={"rounded-md"}><a>VIEW PRODUCTS</a></h4></Link>*/}
            {/*</div>*/}

        </>
    );
};


export default HomeNavbar;
