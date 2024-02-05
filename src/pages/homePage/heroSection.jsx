import {useEffect, useState} from "react";
import axios from "axios";

const HeroSection = () =>{
    const [categories,setCategories] = useState([]);
    const fetchCategories = async () => {
        const response = await axios.get('http://localhost:8081/category/findAll');
        setCategories(response.data);
        console.log(response.data);
    }

    useEffect(()=>{
        fetchCategories();
    }, []);
    return(
        <>
            <div className={"containerr"}>
                {categories.map((i) => (
                    <div className={"wrapperr"}>
                        <img src={'data:image/jpeg;base64,' + i.categoryImage} alt="Images"/>
                    </div>
                ))}

            </div>
                        </>
    )
}
export default HeroSection