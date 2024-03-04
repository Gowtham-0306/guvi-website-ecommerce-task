
import React, { useEffect, useLayoutEffect, useState } from "react"
import Productscard from "./productscard"

export default function Cardcontainer({handlecart= () =>{} , products =[] , cart = [] 

, cartStatus= () =>{} , ispresent=Boolean} ){


function handleisalreadyadded(product={}){
  console.log(product);
 return cart.some((item) => item === product.name);
  


}

function ispresent(productname){

console.log(productname);


}

    return (
    
    
    
    <>

<section>

 
        <div className="container-fluid px-12 px-lg-12 mt-5">
          <div className="row gx-4 gx-lg-12 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center" id="cardcontainer">
           
{
  
products.map((datas , ind) => (


<Productscard  key={`${datas.name}-${ind}`} name ={datas.name} actualpriceprice = {datas.actualprice} 
price = {datas.price}
handlecart = {handlecart}
handleisalreadyadded= {handleisalreadyadded(datas)}
handlecartstatustext ={handleisalreadyadded}
index = {datas.index}
image ={datas.image}
cartStatus={cartStatus}

/>



))


}
    




</div>
          </div>
     
      </section>
    
    
    
    
    
    
    
    </>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    )
    
    
    
    
    
    
    }