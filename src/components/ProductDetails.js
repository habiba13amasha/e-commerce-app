import Product from "./Product";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
function ProdcutDetails(){
    const url_api='https://fakestoreapi.com/products';
    const params=useParams();
    const[product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`${url_api}/${params.productId}`)
        .then((Response)=>{Response.json()})
        .then((product)=>{setProduct(product)})
    },[]);
    return(
       <Product product={product} showButton={false}/>
    )
}
export default ProdcutDetails;