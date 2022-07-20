import React,{useState} from "react";
import CategoryProudct from "./CategoryProduct";
// import { useNavigate } from "react-router-dom";


const ItemsCategoty=(props)=>{
     const [categoryProduct,setCategoryProduct]=useState(props.product.products);
    //  console.log(categoryProudct,"hii")   
    //    const{id}=props.key
    const name=props.product.name_json.english;
    const desc=props.product.description_json.english;
    //    console.log("key",props.product.name_json.english);
    //    console.log(name,"it")
    
    return (<div className="ItemsCategoty">
       <h3> {name}</h3>
       <p>{desc}</p>
       {categoryProduct ? (categoryProduct.map((product)=>{
                return <CategoryProudct 
                product={product}
                id={product.id} 
                key={product.id}
                  />} ) ) :''}
       {/* <p>hi</p> */}
    </div>);
        
    }



export default ItemsCategoty;