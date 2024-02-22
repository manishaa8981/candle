import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import "./register.css"
import HomeNavbar from "../component/homenavbar.jsx";
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import {useNavigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState,
        reset
    }=useForm()
    const {errors}=formState;

    //
    const{refetch} = useQuery({
        queryKey:["GETDATA"],
    })

    const useApiCall = useMutation({
        mutationKey:["POST_CATEGORY_MANAGECATEGORY"],
        mutationFn:(payload)=>{
            return axios.post("http://localhost:8089/user/save",payload)
        },onSuccess: () => {
            reset();
            refetch();
        }
    })

    const onSubmit=(value ) => {
        useApiCall.mutate(value)
    }
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Use the goBack function to navigate to the previous page
        navigate(-1);
    };

    return(<>
        <HomeNavbar/>
            <div className={"register-main "}>
                <div className={"wrapper"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={"cross-icon"}>
                            <h1>Sign Up</h1>
                            <button onClick={handleGoBack} className={"cross-button"}>
                    <span>
                        <IoClose/>
                    </span>
                            </button>
                        </div>
                        <div className={"input-box"}>
                            <input type={"text"}
                                   placeholder={"Name"} {...register('username', {required: 'Name is required'})} />
                            <IoIosPerson className={"icon"}/>
                        </div>
                        <div className={"input-box"}>
                            <input type={"email"} placeholder={"Email"} {...register("email")}/>
                            {errors.email && (
                            <p className="error-message">{errors?.email?.message}
                            </p>
                        )}
                            <MdEmail className={"icon"}/>
                        </div>
                        <div className={"input-box"}>
                            <input type={"password"} placeholder={"Password"}  {...register("password", {
                                required: "Password is required!!",
                                minLength: {
                                    value: 6,
                                    message: "Password should be at least 6 characters long",
                                },
                            })}/>
                            {errors.password && (
                                <p className="error-message">{errors?.password?.message}</p>
                            )}
                            <FaLock className={"icon"}/>
                        </div>
                        <div className={"input-box"}>
                            <input type={"password"} placeholder={"Confirm Password"} {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: {
                                    matchesPassword: (value) =>
                                        value === watch("password") || "Confirm Password does not match Password",
                                },
                            })}/>
                            {errors.confirmPassword && (
                                <p className="error-message">{errors?.confirmPassword?.message}
                                </p>
                            )}
                            <FaLock className={"icon"}/>
                        </div>
                        <button className={"login-button"} type={"submit"}>Sign Up</button>
                        <div className={"register-link"}>
                            <p>Already have an account? <a  className={"login"} href={"/LoginForm"}>Login</a></p>
                        </div>
                        <ToastContainer/>
                    </form>
                </div>
            </div>
    </>)
}
export default RegisterForm