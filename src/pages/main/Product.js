import React,{useState} from "react";



const Product=(props)=>{
       const{name}=props
    
    return (<div className="product">
       <p> {name}</p>
    </div>);
        
    }



export default Product;