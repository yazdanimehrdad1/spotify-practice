import AuthForm from "../components/authForm"
import Signup from "./signup"

const Signin = ()=>{
    return(
        <>
            <AuthForm mode="signin"></AuthForm>
        </>
    )
}

Signin.authPage = true
export default Signin