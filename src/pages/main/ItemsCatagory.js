import React,{useState} from "react";
import CategoryProudct from "./CategoryProduct";
import "../../assets/scss/ItemsCategory.scss"

const ItemsCategoty=(props)=>{
     const [categoryProduct,setCategoryProduct]=useState(props.product.products);
    const name=props.product.name_json.english;
    const desc=props.product.description_json.english;
    
    return (<div className="ItemsCategoty">
      <div className="category-head">
       <h1 > {name}</h1>
       </div>
       <p className="cat-desc">{desc}</p>
       
       {categoryProduct ? (categoryProduct.map((product)=>{
                return <CategoryProudct 
                product={product}
                id={product.id} 
                onAddProduct={props.onAddProduct}
                key={product.id}
                  />} ) ) :''}
    </div>);
        
    }



export default ItemsCategoty;