import "./login.css";
import { MdEmail } from "react-icons/md";
import HomeNavbar from "../component/homenavbar.jsx";
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import axios from "axios";
import {useForm} from "react-hook-form";
const LoginForm = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        // Use the goBack function to navigate to the previous page
        navigate("/");
    };
    const [loginSuccess, setLoginSuccess] = useState(false);

    const [loginError, setLoginError] = useState<string>('');

    const [forget_popup, setfPopup] = useState(false);

    const useApiCallLogin = useMutation({
        mutationKey: ["POST_USER_LOGIN"],
        mutationFn: (payload) => {
            console.log(payload);
            return axios.post("http://localhost:8081/user/save", payload);
        },
        onSuccess: (response) => {
            const userData = response.data;
            if (userData) {
                console.log("User Data:", userData);

                try {
                    localStorage.setItem("userDetails", JSON.stringify(userData));

                    handleLoginSuccess();
                    const data = JSON.parse(localStorage.getItem("userDetails"));
                    console.log(data);
                    console.log(typeof data);
                    setUser(data);
                    reset();

                    if (userData.roles === "ADMIN") {
                        // Redirect to admin page or perform admin-related actions
                        navigate('/AdminDashboard'); // Assuming you have a route for the admin page
                    } else {
                        console.error("User details not found in the response");
                    }
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        const errorMessage = error.response?.data?.message || 'Invalid email or password';
                        console.error('Failed to login:', errorMessage);
                        setLoginError((prevError) => {
                            console.log('Previous Error:', prevError); // Debug statement
                            console.log('New Error:', errorMessage); // Debug statement
                            return errorMessage;
                        });
                    }
                }
            }
        },
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm();

    const handleLoginSuccess = () => {
        setLoginSuccess(true);
    };


    useEffect(() => {
        // Close login popup when login success state is true
        if (loginSuccess) {
            setLoginSuccess(false);  // Reset login success state
        }
    }, [loginSuccess]);

    const onSubmit=(value)=>{
        useApiCall.mutate(value)
    }
    const onSubmitLogin = async (values) => {
        try {
            const response = await useApiCallLogin.mutate(values);
            console.log('Login API Response:', response);

            // Check if the response has data indicating a successful login
            if (response.data) {
                // Handle successful login (if needed)
                handleLoginSuccess();
            } else {
                // If no data is received, consider it an unsuccessful login
                throw new Error('Invalid email or password');
            }
        } catch (error) {
            console.error('Login Error:', error);

            // Check for specific error cases, such as 401 Unauthorized
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                setLoginError('Invalid email or password');
            } else {
                // Handle other error cases
                setLoginError('Invalid email or password');
            }
            setTimeout(() => {
                setLoginError('');
            }, 2000);
        }
    };
    const toggleforgetModal = () => {
        setfPopup(!forget_popup);
        setLModal(false); // Close the login modal
    };
    const difftoast =() => {
        toast.success("wow! you just register", {position: "top-center"})
    }

    return (
        <>
    <HomeNavbar/>
    <div className={"login-main"}>
        <div className={"wrapper"}>
            <div className={"cross-icon"}>
                <h1>Login</h1>
                <button onClick={handleGoBack} className={"cross-button"}>
                    <span>
                        <IoClose/>
                    </span>
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className={"input-box"}>
                    <input type={"email"} placeholder={"Email"}{...register("email")}/>
                    <MdEmail className={"icon"}/>
                </div>
                <div className={"input-box"}>
                    <FaLock className={"icon"}/>
                    <input type={"password"} placeholder={"Password"}{...register("password")}/>
                </div>
                <div className={"remember-forgot"}><label>
                    <input type={"checkbox"}/> Remember me</label>
                    <a href={"#"}>Forgot Password?</a>
                </div>
                <div className={'error-message top-error-message'}>
                    {loginError && <p>{loginError}</p>}
                </div>
                <button className={"login-button"} type={"submit"}> Login</button>
                <div className={"register-link"}>
                    <p>Don't have an account? <a className={"sign-up"} href={"/RegisterForm"}>Sign Up</a></p>
                </div>
                {/*<h3 className={"register-link"}>Don't have an account? </h3>*/}
                {/*<Link to={"/RegisterForm}><h3 className={"text-purple-700 ml-1 cursor-pointer transition-all"}>Sign*/}
                {/*    up</h3></Link>*/}


            </form>
        </div>
    </div>
        </>
    )

}
export default LoginForm