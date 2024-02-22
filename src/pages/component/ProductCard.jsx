import './ProductCard.css';
import {useEffect, useState} from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const ProductCard = ({ productData }) => {
    const [product,setProduct] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:8081/product/getAll');
        setProduct(response.data);
        console.log(response.data);
    }

    useEffect(()=>{
        fetchProducts();
    }, []);
    const handleAddToCart = (productName) => {
        // Implement your logic for adding the product to the cart here
        console.log(`Added ${productName} to cart`);
    };
    const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <>
            <div className={"product-main"}>
                <div className={"side-bar"}>
                    <aside className={"category-sidebar"}>
                        <div className={"sidebar-title"}>
                            Category
                        </div>
                        <div className={"sidebar-items"}>

                        </div>
                    </aside>
                </div>
                {/*<div className={"mid-div"}></div>*/}
                <div className="card">
                    <p className={"text-5xl mt-0 font-bold"}>Our collection</p>

                    <div className="card__container">
                        {product.map((i) => (
                            <article key={i} className="card__article">
                                <div className="card__data">
                                    <img src={'data:image/jpeg;base64,' + i.productImage} alt="card image"
                                         className="card__img"/>
                                    <h3 className="card__title">{i.productName}</h3>
                                    <p className="card__price">{i.productPrice}</p>
                                    <div className={"buttonss"}>
                                        <button className="add-to-cart-btn"
                                                onClick={() => handleAddToCart('Shield & Shining Star')}>
                                            Add to Cart
                                        </button>
                                        <button
                                            className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                            onClick={handleFavoriteClick} color={"red"}>
                                            <FaHeart/>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Fire Light Sword</h3>
                                <p className="card__price">Rs 230</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>
                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>
                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__price">Rs 870</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__price">Rs 750</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__price">Rs 560</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__price">Rs 550</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img_1.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__price">Rs 500</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </div>


        </>

    )
        ;
};

export default ProductCard;
