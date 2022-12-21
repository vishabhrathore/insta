import React, { useEffect, useState } from 'react';
import Card from './card/Card';

 
const Postviewnew = () => {
const [postData, setPostData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/user").then((res)=>{return res.json()}).then((data)=>{
      console.log(data)
      setPostData(data)
      }).catch((error)=>{
      console.log(error)
      })

      console.log()
  },[])
  
  return (
    <div>
      
      {postData.map((item,index)=>{
        return(
          <div>
            <Card name={item}/>
          </div>
        )
      })}
    </div>
  )
}

export default Postviewnew



