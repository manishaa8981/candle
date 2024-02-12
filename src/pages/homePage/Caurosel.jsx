import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import {useEffect, useState} from "react";
import axios from "axios";

const Carousels = () => {


const [categories,setCategories] = useState([]);

const fetchCategories = async () => {
    const response = await axios.get('http://localhost:8081/category/findAll');
    setCategories(response.data);
    console.log(response.data);
}
useEffect(()=>{
    fetchCategories();
}, []);

    <Carousel fade className="banner" interval={2000}>
        {/* Set interval prop to the desired time in milliseconds (e.g., 5000 for 5 seconds) */}
        {categories.map((i) => (
            <Carousel.Item key={i}>
                <img className="d-block w-100" src={'data:image/jpeg;base64,' + i.categoryImage} alt="Slide" />
                <Carousel.Caption className="banner__desc container-div">
                    <Link to="/shop">
                        <button>View Collection</button>
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
};

export default Carousels;