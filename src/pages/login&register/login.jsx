import "./login.css";
import { MdEmail } from "react-icons/md";
import HomeNavbar from "../component/homenavbar.jsx";
import { FaLock } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Use the goBack function to navigate to the previous page
        navigate(-1);
    };
    return (
        <>
    <HomeNavbar/>
    <div className={"login-main"}>
        <div className={"wrapper"}>
            <form action={""}>
                <div className={"cross-icon"}>
                    <h1>Login</h1>
                    <button onClick={handleGoBack} className={"cross-button"}>
                    <span >
                        <IoClose />
                    </span>
                    </button>
                </div>
                <div className={"input-box"}>
                    <input type={"text"} placeholder={"Email"} required/>
                    <MdEmail className={"icon"}/>
                </div>
                <div className={"input-box"}>
                    <FaLock className={"icon"}/>
                    <input type={"password"} placeholder={"Password"} required/>
                </div>
                <div className={"remember-forgot"}>
                    <label>
                        <input type={"checkbox"}/> Remember me
                    </label>
                    <a href={"#"}>Forgot Password?</a>
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