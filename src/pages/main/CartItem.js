import React,{useState,useEffect} from "react";
import "../../assets/scss/CartItem.scss"


const CartItem=(props)=>{
   const [qty,setQty]=useState(props.qty);
   if(qty!=props.qty){
    setQty(props.qty);
   }
   console.log(props,"cart")
  
    return (<div className="cart-item">
        <div className="cart-item-head"><h3>{props.name}</h3>
        </div>
         <div className="increase-button"><button className="minus">-</button> <span className="qty"  >{qty}</span> <button className="plus">+</button></div>
        <div className="price">{props.price}</div>
        
       
    </div>);
        
    }



export default CartItem;