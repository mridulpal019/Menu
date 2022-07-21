import React,{useState,useEffect} from "react";
import Items from "./Items";
import Types from "./Types";
import Cart from "./Cart";
import "../../assets/scss/Main.scss"
import Menu from "../sample"



const Main=  ()=>{
    const [data, setData] = useState(Menu);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [cartProduct,setCartProduct]=useState([])
   console.log(cartProduct)
//    useEffect(() => {
//         fetch(`https://myqa.fleksa.com/pyapi/26/menu`)
//          .then((response) => response.json())
//          .then((actualData) => {console.log(actualData)
//                 setData(actualData);
                
//         })
//         .then(setLoading(false))
//          .catch((err) => {
//           console.log(err.message);
//          });
//        }, []);

       console.log(data,"data")
     const onAddProduct=(id)=>{
            var obj ;
            var i=0;
            do {
                obj=data["categories"][i]["products"].find(o => o.id === id);
                i++;
              }
              while (i < 21 && obj === undefined);
            setCartProduct(old=>[...old,{name:obj.name_json.english,price:obj.price,id:id,qty:1}])
            const addbut=document.getElementById(`${id}`);
            addbut.style.display="none";
            const incresebut=document.getElementById(`${id +"_a"}`)
            incresebut.style.display="inline-block"
    }
    const handleIncrease=(id)=>{
          console.log(id);
            var cog=cartProduct.findIndex(checkid);
            console.log(cog,"cog")
            function checkid(p) {
                return p.id==id;
              }
             let temp=cartProduct;
             temp[cog].qty+=1;
             setCartProduct(temp); 



    }

    return (<div className="main">
        <Types products={data}
               
         />
        <Items product_detail={data}
        onAddProduct={onAddProduct}
        onIncrease={handleIncrease} />
        <Cart product_list={cartProduct}/>

    </div>);
        
    }



export default Main;