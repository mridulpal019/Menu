import React,{useState,useEffect} from "react";
import Items from "./Items";
import Types from "./Types";
import Cart from "./Cart";
import "../../assets/scss/Main.scss"



const Main=  ()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [cartProduct,setCartProduct]=useState(null)

   useEffect(() => {
        fetch(`https://myqa.fleksa.com/pyapi/26/menu`)
         .then((response) => response.json())
         .then((actualData) => {console.log(actualData)
                setData(actualData);
                
        })
        .then(setLoading(false))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);

    //    console.log(data,"data")
     const onAddProduct=(id)=>{
        console.log(id);
        
            let obj = data["categories"].find(o => o.id === id);
            // let obj2=obj[products].find()
            console.log(obj);


    }

    return (<div className="main">
        <Types products={data}
               
         />
        <Items product_detail={data}
        onAddProduct={onAddProduct} />
        <Cart />

    </div>);
        
    }



export default Main;