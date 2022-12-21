import Input from "../input/input";
import "../login-signup/file.css"
import backgroundImage from "../assest/bg-01.jpg"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [isSignInPage, changeSignIn] = useState(true)
    const [data , setData] = useState({
        ...(!isSignInPage && { name:""}), 
        ...(!isSignInPage && { email:""}), 
        username:"",
        password:""})
    
    const handleSubmit = async (e) => {
        console.log(isSignInPage)
        e.preventDefault()
        console.log(data)
        if(!isSignInPage){
            axios.post("http://localhost:3016/api/register",data).
            then((response)=>{
                console.log(response)
            }).catch((e)=>{
                console.log(e.message)
            })
        }else{
            const newData = {
                username:data.username,
                password:data.password
            }
            axios.post("http://localhost:3016/api/login",newData).
            then((response)=>{
                console.log(response)

                if(response.data.status === "success"){
                    localStorage.setItem("user:token",response.data.data.token)
                    navigate("/")
                }
            }).catch((e)=>{
                console.log(e.message)
            })
        }

    }
    return (
        <>
            <div className="form-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="form-login"></div>
                <div className="form">
                    <h1>Instaview</h1>
                    <h3>{isSignInPage ? "LOGIN" : "SIGN UP"}</h3>
                    <form>
                        {!isSignInPage &&
                            <div className="input-block">
                                <Input name="name" type="text" placeholder="Joe Smith" label="Name" classname="fa fa-user" onChange={(e)=>{setData({...data, name:e.target.value})}}/>
                            </div>
                        }
                        <div className="input-block">
                            <Input name="user_name" type="text" placeholder="@joeSmith" label="UserName" classname="fa fa-user-plus" onChange={(e)=>{setData({...data, username:e.target.value})}} />
                        </div>
                        {!isSignInPage &&
                            <div className="input-block">
                                <Input name="email" type="email" placeholder="JoeSmith@gmail.com" label="Email" classname="fa fa-envelope" onChange={(e)=>{setData({...data, email:e.target.value})}}/>
                            </div>
                        }
                        <div className="input-block">
                            <Input name="password" type="password" placeholder="" label="Password" classname="fa fa-key" onChange={(e)=>{setData({...data, password:e.target.value})}}/>
                        </div>
                        {!isSignInPage &&
                            <div className="input-block">
                                <Input name="c-password" type="password" placeholder="" label="Confirm Password" classname="fa fa-key" />
                            </div>
                        }
                        <div>
                            <button onClick={handleSubmit} className="button" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                Submit
                            </button>
                        </div>
                        <div className="bottom">
                            {isSignInPage ? 
                            <h4>Don't have An account ! <span style={{ "color": "#a64bf4" }} onClick={() => { changeSignIn(!isSignInPage) }}>Sign up</span></h4> :
                            <h4>Already have An account ! <span style={{ "color": "#a64bf4" }} onClick={() => { changeSignIn(!isSignInPage) }}>Sign in</span></h4>
                            }
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}
export default Login