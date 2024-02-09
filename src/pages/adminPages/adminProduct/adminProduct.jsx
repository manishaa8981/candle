import {useMutation} from "@tanstack/react-query";
import axios from "axios";

import {useForm} from "react-hook-form";


const AdminProduct = () => {
    //hitting server on port 8080
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm();

    const{errors} = formState;

    const useApiCall = useMutation({
        mutationKey:["POST_ITEM_DATA"],
        mutationFn:(payload)=>{
            console.log(payload)
            return axios.post("http://localhost:8081/product/save",payload)
        },onSuccess: () => {
            // notify();
            reset();

        }
    })

    const onSubmit=(value)=>{
        console.log(value);
        const fd= new FormData();
        fd.append("productName",value?.productName)
        fd.append("productPrice",value?.productPrice)
        fd.append("categoryId",value?.categoryId)
        fd.append("productDescription",value?.productDesciption)
        fd.append("productStatus",value?.productStatus)
        fd.append("productImage",value?.productImage[0])
        useApiCall.mutate(fd)
    }



    return(
                <div className="add-item-modal">
                    <div className="add-item-modal-content">
                        <h2>Add Item</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*<div className={"select-category"}>*/}
                                {/*<label>Category</label>*/}
                                {/*<select id={"category-option"} placeholder={""} {...register("categoryId", { required: true })}>*/}
                                {/*    <option>Select a Category</option>*/}
                                {/*    {categories &&*/}
                                {/*        categories.data.map((category) => (*/}
                                {/*            <option key={category.id} value={category.id}>*/}
                                {/*                {category.name}*/}
                                {/*            </option>*/}
                                {/*        ))}*/}
                                {/*</select>*/}
                            {/*</div>*/}
                            <div className={"item-name"}>
                                <label>Item Name</label>
                                <input type={"text"} placeholder={"Enter item Name"} {...register("productName",{required:"Item Name is required!!"})}/>
                                <h6 style={{paddingLeft:"3px"}}>{errors?.itemName?.message}</h6>
                            </div>
                            <div className={"item-price"}>
                                <label>Price</label>
                                <input type={"number"} placeholder={"Enter the Price"} {...register("productPrice",{required:"Price is required!!"})}/>
                                <h6 style={{paddingLeft:"3px"}}>{errors?.itemPrice?.message}</h6>
                            </div>
                            <div className={"item-image"}>
                                <label>Image</label>
                                <span>
                                    <input type={"file"} placeholder={"Add image here"} {...register("productImage",{required:"Item Image is required!!"})}/>
                                     <h6 style={{paddingLeft:"3px"}}>{errors?.itemImage?.message}</h6>
                                </span>
                            </div>
                            <div className={"item-image"}>
                                <label>Product Descpirtion</label>
                                <span>
                                    <input type={"text"} placeholder={"Add image here"} {...register("productDescription",{required:"Item Image is required!!"})}/>
                                     <h6 style={{paddingLeft:"3px"}}>{errors?.itemImage?.message}</h6>
                                </span>
                            </div>     <div className={"item-image"}>
                                <label>Product Status</label>
                                <span>
                                    <input type={"text"} placeholder={"Add image here"} {...register("productStatus",{required:"Item Image is required!!"})}/>
                                     <h6 style={{paddingLeft:"3px"}}>{errors?.itemImage?.message}</h6>
                                </span>
                            </div>
                            <div className={"item-image"}>
                                <label>CategoryId</label>
                                <span>
                                    <input type={"number"} placeholder={"Add image here"} {...register("categoryId",{required:"Item Image is required!!"})}/>
                                     <h6 style={{paddingLeft:"3px"}}>{errors?.itemImage?.message}</h6>
                                </span>
                            </div>

                            <div className={"item-name-add-btn"}>
                                <button type={"submit"}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
    );
};


export default AdminProduct