import React from "react";
import "../postviewPage/files.css"
// import "../assest/bg-01.jpg"
import Postviewnew from "../postviewnew";
const PostView = () => {
    return (
        <>
            <div className="main">
                <div className="cont-1">
                    <div className="left">
                        <div className="left-1">
                            <img className="imgage" src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="logo" />
                            <div className="username-1">
                                Harsh Singh
                            </div>
                            <div className="username-2">
                                @harsh
                            </div>
                            <div className="post-1" >
                                5
                            </div>
                            <div className="post-2" >
                                post
                            </div>
                        </div>
                        <div className="left-2">
                            <div className="left-box">
                                <i className="fa fa-home" aria-hidden="true"></i>
                                <span>Home</span>
                            </div>
                            <div className="left-box">
                                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                <span>Feed</span>
                            </div>
                            <div className="left-box">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>Edit Profile</span>
                            </div>
                        </div>
                        <div className="left-box">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span>Log-Out</span>
                        </div>


                    </div>
                </div>
                <div className="cont-2">
                    <div className="search-bar">
                        <input className="inp-search" type="text" placeholder="Enter For Search" />
                        <i className="fa fa-search search" aria-hidden="true"></i>
                        <span>
                            <button className="post-btn"><i class="fa fa-plus plus" aria-hidden="true"></i> Create post</button>
                        </span>
                    </div>
                    <div className="post-bl">
                        <Postviewnew/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostView