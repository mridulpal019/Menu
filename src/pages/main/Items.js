import React,{useState,useEffect} from "react";
// import { useNavigate } from "react-router-dom";
import "../../assets/scss/Items.scss"
import ItemsCategoty from "./ItemsCatagory";


const Items=(props)=>{
    // useEffect(() => {
    //     fetch(`https://myqa.fleksa.com/pyapi/26/menu`)
    //      .then((response) => console.log(response));
    //    }, []);
    const [products,setProducts]=useState(null);

    if (props.product_detail !==null && products ===null){
        var productList=[];
        for (let i=0 ;i<21 ;i++){
            productList.push(props.product_detail["categories"][i])

        }
        setProducts(productList);
    }
    console.log(products,"items")
  
    return (<div className="items">
        {products ? (products.map((product)=>{
                return <ItemsCategoty 
                product={product}
                id={product.id} 
                key={product.id}
                  />} ) ) :'not'}
       
    </div>);
        
    }



export default Items;