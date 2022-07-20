import React,{useState,useEffect} from "react";
import Items from "./Items";
import Types from "./Types";
import Cart from "./Cart";
import "../../assets/scss/Main.scss"



const Main=  ()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
//   console.log(data)
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
       
        // if (!loading){
        // var products=[]
        //   for (let i = 0; i < data["catagories"].length; i++) {
        //       products.push(data["categories"][i]["name_json"])
        //   }
        //   console.log(products)

        //  }
    //     var products=[]
    //     for (let i = 0; i < data["catagories"].length; i++) {
    //           products.push(data["categories"][0]["name_json"])
    //       }
    //    console.log(data["categories"])

    return (<div className="main">
        <Types products={data}
               
         />
        <Items product_detail={data} />
        <Cart />

    </div>);
        
    }



export default Main;