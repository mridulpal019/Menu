import React,{useState} from "react";
import "../../assets/scss/CategoryProduct.scss"

const CategoryProudct=(props)=>{
 
       const name=props.product.name_json.english;
       const desc=props.product.description_json.english;
       const price=props.product.price;
       const id=props.id;
       const onAddProduct=props.onAddProduct;
       const onIncrease=props.onIncrease;
      //  console.log(props,"it")
    
   //  const toggle=(e)=>{
   //    e.preventDefault();
   //    const addbutton=document.getElementById(`${id}`)
   //    // console.log(addbutton,"add");
   //    // addbutton.css.display="none"


   //  };

    return (<>
    <hr/>
    <div className="CategoryProduct">
      
      <div className="cat-product">
       <h1> {name}</h1>
       <p>{desc}</p>
       <h1>{price} $</h1>
       </div> 
       <div className="cat-addbutton" >
         <button className="addbutton" id={id} onClick={()=>onAddProduct(id)}>ADD </button>
         <span className="handleinput" id={id+"_a"}>
            <button className="minus">-</button> 
            <span className="qty"  >1</span> 
            <button className="plus" onClick={()=>onIncrease(id)}>+</button> 
         </span>


       </div>
    </div>
    </>);
        
    }



export default CategoryProudct;