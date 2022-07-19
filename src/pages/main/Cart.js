import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../../assets/scss/Cart.scss"
import emptylogo from "../../assets/images/cart_empty.png"

const Cart=()=>{
    
    
    return (<div className="cart">
       <h1>Your Cart</h1>
       <hr></hr>
       <div className="empty"> <img src={emptylogo}></img>
        <h2>Please select at least one product to place an order</h2></div>
      
    </div>);
        
    }



export default Cart;