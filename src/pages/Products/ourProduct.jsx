import { useState, useEffect } from "react";
import "../css/ourMenu.css";
import MenuCard from "./menuPage/menuCard.jsx";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.jsx";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SidebarProductCategory from "./sidebarProductCategory.jsx";
interface Product{
    category: {
        name: string;
    };
}

const OurProduct= () => {
    const location = useLocation();

    const { data: Product2 } = useQuery({
        queryKey: ["GET_PRODUCT_DATA"],
        queryFn() {
            return axios.get<Product[]>("http://localhost:8081/product/findAll");
        },
    });

    const [productData, setProductData] = useState<Product[]>([]);
    const [productList, setProductList] = useState<string[]>([]);
    P

    useEffect(() => {
        if (Product2?.data) {
            setproductData(Product2.data);

            const uniqueCategories = [
                ...new Set(
                    Product2.data.map((curElem) => curElem?.category?.name || "Uncategorized")
                ),
                "All",
            ];
            setProductList(uniqueCategories);
        }
    }, [Product2?.data]);

    const filterProduct = (category: string) => {
        if (category === "All") {
            setProductData(Product2?.data || []);
            return;
        }

        const updatedList = Product2?.data?.filter((curElem) => {
            return curElem?.category?.name === category;
        }) || [];

        setProductData(updatedList);
    };

    return (
        <>
            <div className={"menu-page-div"}>
                <HomeNavbar />
                <div className={"menu-contents"}>
                    <SidebarProductCategory filterProduct={filterProduct} productList={productList} />
                    <MenuCard menuData={productData} />
                </div>
            </div>
        </>
    );
};

export default OurProduct;