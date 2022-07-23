import React,{useState} from "react";
import "../../../assets/scss/CategoryProduct.scss"
import Choice from "./choice/Choice";
import Sides from "./choice/Sides";

const CategoryProudct=(props)=>{
 
       const name=props.product.name_json.english;
       const desc=props.product.description_json.english;
       const price=props.product.price;
       const id=props.id;
       const onAddProduct=props.onAddProduct;
       const onIncrease=props.onIncrease;
       const onDecrease=props.onDecrease;
       console.log(props.product,"it")
      const onMultiProduct=props.onMultiProduct
       
      const getProduct=(product)=>{
            console.log(product,"pr")
            if(product.price ==0){
              product.price=price
            }
            onMultiProduct(product,name,id);
      }
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
            <button className="minus" onClick={()=>onDecrease(id)}>-</button> 
            <span className="qty" id={id+"_q"} data-qty={String(1)} >1</span> 
            <button className="plus" onClick={()=>onIncrease(id)}>+</button> 
         </span>


       </div>
    </div>
   
    {props.product.choice.length>0 ?
    <div className="choice-box">
      hi
     {(props.product.choice.map((product)=>{
                return <Choice 
                ongetProduct={getProduct}
                name={product.name_json.english}
                id={product.id} 
                data={product}
                parts={props.parts}
                sides={props.sides}
                key={product.id}
                  />
                  } ) )}</div> :''}
    
    {props.product.side_products_json.length>0 ?
    <div className="choice-box">
     {(props.product.side_products_json.map((product)=>{
                return <Sides 
                name={product.name_json.english}
      
                data={product}
                parts={props.parts}
                sides={props.sides}
                key={product.id}
                  />
                  } ) )}</div> :''}


    </>);
        
    }



export default CategoryProudct;