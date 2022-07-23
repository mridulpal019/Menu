import React,{useState} from "react";



const Product=(props)=>{
       const{name}=props
    
    return (<div className="product" >
       <a href={"#"+props.id+"_cato"}>
       <p> {name}</p>
       </a>
    </div>);
        
    }



export default Product;