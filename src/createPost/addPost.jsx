import React, { useState } from "react";
import "../createPost/addposts.css"
// import input from "../input/input";


const CreatePost = () => {

    const [postData ,setPostData] = useState({caption:"",desc:"",img:""})
    const uploadImage = async() =>{
        const formData =new FormData()
        formData.append('file',)
    }
    //https://api.cloudinary.com/v1_1/${cloudName}/upload ,,, dpdkzg4ld
    const handleSubmit=(e)=>{
    e.preventDefault()
    }
    return (
        <>
            <div className="post-wrapper">
                <div className="wrapper-form">
                    <form onSubmit={handleSubmit}> 
                    <div className="postinp">
                    <input name="caption" type="text" placeholder="Caption" />
                        
                    </div>
                    <div className="postinp">
                    <textarea name="description" cols={50} rows={4} placeholder="Add Description"></textarea>

                    </div>
                    <div className="postinp">
                        <label htmlFor="post-img">Upload Image</label>
                        <input id="post-img" className="inptfile" name="post-img" type="file" />
                    </div>
                    <div>
                        <button type="submit">
                            CreatePost
                        </button>
                    </div>

                    </form>
                </div>

            </div>

        </>
    )
}

export default CreatePost