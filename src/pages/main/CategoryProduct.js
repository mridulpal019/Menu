import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";


const CategoryProudct=(props)=>{
    //  const [categoryProudct,setCategoryProduct]=useState(props.product.products);
    //  console.log(categoryProudct,"hii")   
    //    const{id}=props.key
    // const name=props.product.name_json.english;
    // const desc=props.product.description_json.english;
       console.log("key",props);
       const name=props.product.name_json.english;
       const desc=props.product.description_json.english;
       const price=props.product.price
    //    console.log(name,"it")
    
    return (<div className="CategoryProudct">
       <h6> {name}</h6>
       <p>{desc}</p>
       <small>{price} $</small>
        
       {/* <p>hi</p> */}
    </div>);
        
    }



export default CategoryProudct;