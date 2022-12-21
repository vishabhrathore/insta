import React, { useState } from "react";
import "../card/card.css";

const Card = (props) =>{
    const link = props.name.post
    const [like, setLike] = useState({state:false, class:"fa fa-heart-o"})

    const click =()=>{
      if(like.state === false)
      setLike({state:true, class:"fa fa-heart"})
      else
      setLike({state:false, class:"fa fa-heart-o"})

      console.log(like)
    }
    return(
      <div className="card">
    <section className="card-head"><div><img className="image-icon" src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="logo" /></div><div className="side">
      <div className="nme">{props.name.name}<i class="fa fa-ellipsis-h" aria-hidden="true"></i> </div>
      <div className="location" >{props.name.location}</div>
    </div>
  
      

    </section>
    <section className="image" >
      <img src={require(`../images/${link}`)} alt="place"/>
    </section>

    <section>
      <div className="likes">
        <div><i onClick={click} className={like.class} aria-hidden="true"></i>
        <i class="fa fa-location-arrow" aria-hidden="true"></i>
        </div>
        <div>
          {props.name.date}
        </div>
        </div>
        <div className="like">{props.name.likes} likes</div>
        <div className="desc">{props.name.description}</div>
    </section>
      </div>
    )
}

export default Card