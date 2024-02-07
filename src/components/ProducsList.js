import { useEffect, useState } from "react";
import Product from "./Product";
function ProductsList(){
  const url_api='https://fakestoreapi.com/products';
  const[products,setProducets]=useState([]);
  useEffect(()=>{
    fetch(url_api)
     .then((Response)=>{Response.json()})
     .then((data)=>{setProducets(data)});
  },[]);
  
  return(
     <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
          <div className="row">
          {products?.map((product)=>{
                return(
                  <div className="col-3" key={product.id}>
                    <Product product={product} showButton={true}/>
                  </div>
                );
            })}
          </div>
        </div>
          
        
     </>
  );
}
export default ProductsList;