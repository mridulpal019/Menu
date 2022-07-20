import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";


const Product=(props)=>{
       const{name}=props
    //    const{id}=props.key
    //    console.log("key",props);
    
    return (<div className="product">
       <p> {name}</p>
    </div>);
        
    }



export default Product;