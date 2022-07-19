import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/scss/Poster.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faPenToSquare,faTag } from '@fortawesome/free-solid-svg-icons'


const Poster=()=>{
    
    
    return (<div className="poster-section">
   <div className="poster">
        <div className="background-image">
        <div className="foreground">
        <div className="foreground-content">
            <div className="title">
             <h1>Smart Pizza Rodguru</h1>
             <p>Italian style pizza, Burgers, 100% Halal</p>
             <button> <FontAwesomeIcon icon={faPlateWheat} /> <span>Pick Up</span> <FontAwesomeIcon icon={ faPenToSquare } /></button>
             </div>
             <div className="offer">
                <h1>Offer</h1>
                <p>  <FontAwesomeIcon icon={faTag} /> 
                    <span className="coupon">PIZZA50</span>
                    <span>Discount of 50% on orders above $5</span>
                </p>

             </div>
        </div>
        </div>
        </div>
        
     
    </div>
    </div>);
        
    }



export default Poster;