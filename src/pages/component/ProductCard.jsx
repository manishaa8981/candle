// ProductCard.js

import './ProductCard.css';
import {useEffect, useState} from "react";
import { FaRegHeart } from "react-icons/fa";
// import axios from "axios"; // Import your CSS file

const ProductCard = () => {
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

                <div className="card">
                    <div className="card__container">
                        {product.map((i) => (
                            <article key={i} className="card__article">
                                <div className="card__data">
                                    <img src={'data:image/jpeg;base64,' + i.productImage} alt="card image"
                                         className="card__img"/>
                                    <h3 className="card__title">{i.productName}</h3>
                                    <p className="card__description">{i.productDescription}</p>
                                    <div className={"buttonss"}>
                                        <button className="add-to-cart-btn"
                                                onClick={() => handleAddToCart('Shield & Shining Star')}>
                                            Add to Cart
                                        </button>
                                        <button
                                            className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                            onClick={handleFavoriteClick} color={"red"}>
                                            <FaRegHeart/>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Fire Light Sword</h3>
                                <p className="card__description">element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
                                    </button>
                                </div>
                            </div>
                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>
                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__description">Beautiful card, with hover effects</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__description">Beautiful card, with hover effects</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__description">Beautiful card, with hover effects</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__description">Beautiful card, with hover effects</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
                                    </button>
                                </div>
                            </div>

                        </article>
                        <article className="card__article">
                            <div className="card__data">
                                <img src="src/assets/img.png" alt="card image" className="card__img"/>

                                <h3 className="card__title">Incoming Messages</h3>
                                <p className="card__description">Beautiful card, with hover effects</p>
                                <div className={"buttonss"}>
                                    <button className="add-to-cart-btn"
                                            onClick={() => handleAddToCart('Shield & Shining Star')}>
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`heart-button ${isFavorite ? 'favorite' : ''}`}
                                        onClick={handleFavoriteClick} color={"red"}>
                                        <FaRegHeart/>
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
