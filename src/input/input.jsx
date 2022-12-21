import React from "react";
import "../input/input.css"

const Input =(props)=>{
    return(
        <div className="wrapper">
            <div className="form-field">
            <label htmlFor={props.name}>{props.label}</label>
                <div className="inp-field">
                <i class={props.classname} aria-hidden="true"></i>
            <input type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
                </div>
            
            </div>
        </div>
    )
}
export default Input