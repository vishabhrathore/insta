import React from "react";
import { Route,Routes, Navigate } from "react-router-dom";
import PostView from "../postviewPage/post";
import Login from "../login-signup/login";

const To_Routes =()=>{
   const routes =[
    {
       id:1,
       mark:"home",
       path:"/",
       component:<PostView/>
   },
    {
       id:2,
       mark:"sign in",
       path:"/account/signin",
       component:<Login/>
   },
    {
       id:3,
       mark:"sign up",
       path:"/account/signup",
       component:<Login/>
   },
] 
   const PrivateRoute = ({children})=>{
     const isUserLoggedIn = window.localStorage.getItem('user:token') || false
     const isFormPages = window.location.pathname.includes("account")

     if(isUserLoggedIn && !isFormPages){
        return children
     }else if(!isUserLoggedIn && isFormPages){
        return children
     }else{
        const redirectURL = isUserLoggedIn ? "/" : "/account/signin"
        return <Navigate to={redirectURL} replace />
     }
   }
    return(
        <>
        <Routes>
           {
            routes.map(({id,mark,path,component})=>{
                return <Route key={id} path={path} element={<PrivateRoute>{component}</PrivateRoute>}/>
            })
           }
        </Routes>
        </>
    )
}

export default To_Routes