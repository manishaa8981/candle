import HomeNavbar from "../component/homenavbar.jsx";
import Category from "./Category.jsx";
import "./homePage.css"
import Carousel from "../Carousel/carousel.jsx";


const Homepage = () =>{
    return(
        <>
            <HomeNavbar/>
            <div className={"bgg"}>Welcomee</div>
            <Category/>
            <Carousel />
        </>
    )
}
export default Homepage