import HomeNavbar from "../component/homenavbar.jsx";
import Category from "./Category.jsx";
import "./homePage.css"
import Carousel from "../Carousel/carousel.jsx";
import ProductCard from "../component/ProductCard.jsx";


const Homepage = () =>{
    return(
        <>
            <HomeNavbar/>
            <Carousel />
            <Category/>
            <ProductCard/>

        </>
    )
}
export default Homepage