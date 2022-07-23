import React,{useState,useEffect} from "react";
import "../../../../assets/scss/Choice.scss"
import Parts from "./Parts"
import Options from "./Options";

const Choice=(props)=>{
  
    // console.log(props.data,"data",)
    return (
    <>
   
    
    <hr/>
    <div className="choice">
        <div className="choice-head">
     <div className="heading">
    {props.name}
    </div>
    <div className="option-type">Choose one</div>
    </div>
    {props.data.choice ?  (props.data.choice.map((option)=>{
                return <Parts 
                id={option}
                option_name={props.name}
                parts={props.parts}
                sides={props.sides}
                key={option}
                  /> }))  :"no" }


<div onChange="">
        {/* <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other */}
      
    {props.data.options ? (props.data.options.map((option)=>{
                return <Options 
                option={option}
                option_name={props.name}
                id={option.id} 
                key={option.id}
                  />} ) ) :''}

</div>
side_products_json

<hr/>
<div className="add-but-opt">
    ADD
</div>

    </div>
  
    </>);
        
    }



export default Choice;