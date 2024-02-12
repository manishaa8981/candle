// import {Heart} from "lucide-react";
import axios from 'axios';
import {useState, useEffect} from 'react';
// import {useQuery} from "@tanstack/react-query";




const Category = () =>{

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
            {/*<div className={"m-10"}>*/}
            {/*    <div className={"text-black font-extrabold  text-center text-2xl font-sans m-3 bg-scroll"}> The Candle*/}
            {/*        Library*/}
            {/*    </div>*/}
            {/*    <div className={"text-1xl text-black-100 text-center pb-2"}>*/}
            {/*        The Candle Library is an online marketplace where you can find the best selection of scented candles*/}
            {/*        sourced from Australia and around the globe. We have handpicked each and every brand on our site –*/}
            {/*        we appreciate quality products produced by artisans; and we know that you do, too.*/}
            {/*        We are your go-to, one-stop shop – whether you’re looking for the perfect gift or just looking to*/}
            {/*        treat yourself.*/}
            {/*    </div>*/}
            {/*    <div className={"text-m text-black-100 text-center"}>*/}
            {/*        Quite simply, we love candles. A candle is special. No matter how advanced our world becomes,*/}
            {/*        nothing will replace it. The feeling of calm and comfort that comes with lighting a wick*/}
            {/*        and letting the aroma unfold around you; becoming entranced by the flicker of the flame – that can*/}
            {/*        never be replicated.*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className="m-auto flex gap-20 w-full bg-blue-100 max-w-8.2xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">*/}
            {/*    {Array.isArray(categories)&&*/}
            {/*    categories.map((category)=> (*/}
            {/*        <tr key={(category.id)}>*/}
            {/*            <img width={250} src={'data:image/jpeg;base64,'+ category.categoryImage}/>*/}
            {/*            <td>{category.name}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <h1 className={"text-5xl font-bold text-center "}>Our Collection</h1>
            <div className="mx-2 w-92% max-w-8.2xl items-center space-y-4 px-5 py-10 md:grid-cols-2 md:max-w-2xl  md:space-y-0 lg:grid-cols-4 flex justify-between ">
                {categories.map((i) => (
                    <div key={i} className=" flex justify-evenly  relative aspect[16] mx-5 w-1/3 rounded-md md:aspect-auto md:h-[400px]">
                        <img src={'data:image/jpeg;base64,' + i.categoryImage} alt="Images"
                             className="z-0 h-full w-full rounded-md object-cover "/>
                        <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-left">
                            <h1 className="text-lg font-semibold text-white">{i.name}</h1>
                            {/*<button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold  text-black  pr-5">*/}
                            {/*    <Heart size={20} className="m-3 "/> Wishlist*/}
                            {/*</button>*/}
                            <div className={"btn-style"}>
                                <h4><a>VIEW PRODUCTS</a></h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>





        </>
    )
}
export default Category