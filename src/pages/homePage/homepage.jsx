import HomeNavbar from "../component/homenavbar.jsx";
import Category from "./Category.jsx";
import "./homePage.css"
import Carousel from "../Carousel/carousel.jsx";


const Homepage = () =>{
    return(
        <>
            <HomeNavbar/>
            <Carousel />
            <Category/>

        </>
    )
}
export default Homepage