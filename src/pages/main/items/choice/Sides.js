import { faMarsDouble } from "@fortawesome/free-solid-svg-icons";
import React,{useState,useEffect} from "react";
// import "../../assets/scss/choice.scss"
// import ItemsCategoty from "./ItemsCatagory";
import "../../assets/scss/Options.scss"

const Sides=(props)=>{
    const {id}=props.id
    // console.log(props.Sides[props.id]['name_json'],"Sidesss",props.id,typeof(props.id))
    return (<div className="Options">


    {/* {props.Sides[props.id] ? <>
        <input type="radio" value={props.parts[props.id]['name_json'].english} name={props.option_name} /> 
    <div className="options-name">
        <div>{props.parts[props.id]['name_json'].english}</div>
         <div>{props.parts[props.id].price}</div>
         </div>
         
         </>
         :""} */}
    
    </div>);
        
    }

export default Sides;