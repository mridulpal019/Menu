import React,{useState} from "react";
import Items from "./Items";
import Types from "./Types";
import Cart from "./Cart";
import "../../assets/scss/Main.scss"



const Main=()=>{
    
    
    return (<div className="main">
        <Types/>
        <Items/>
        <Cart/>

    </div>);
        
    }



export default Main;