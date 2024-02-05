import HomeNavbar from "../component/homenavbar.jsx";
import Category from "./Category.jsx";
import HeroSection from "./heroSection.jsx";

const Homepage = () =>{
    return(
        <>
            <HomeNavbar/>
            <HeroSection />
            <Category/>
        </>
    )
}
export default Homepage