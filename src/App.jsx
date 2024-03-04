import { useState } from 'react'
import { useLayoutEffect } from 'react'
import Navbar from './components/navbar'
import Productscard from './components/productscard'
import Shopboard from './components/shopboard'
import Cardcontainer from './components/cardcontainer'

function App() {


  const [products , setproduct] = useState([]);
  const [cart , setcart] = useState([]);
  const [cartcount , setcartcount] = useState(0);

  useLayoutEffect(() => {
    fetch("http://localhost:5173/datas.json").then((datas)=> datas.json()).then((prod)=> setproduct(prod.datas)).catch((err=>console.log(err)));
  }, []);
  
  
  function cartStatus(productname) {

    const isInCart = cart.some((item) => item === productname);
  

    if (!isInCart) {
      setcartcount((prevCount) => prevCount + 1);

      



    }

else if(isInCart)
{

var indexnum = cart.indexOf(productname);
cart.splice(indexnum , 1);
var cartduplicate = [...cart];
setcart(cartduplicate);
if(cartcount > 0) {
setcartcount((prevCount) => prevCount - 1);
}




}


  }
    
    
    
   
    
    
  function handlecart(product){
    var cartcopy = [...cart];
    cartcopy.push(product);
    setcart(cartcopy);
  

    
    
    }
  return (
    <>

    
      <section>


      <Navbar cartcount={cartcount}/>
<Shopboard/>

<Cardcontainer products={products} handlecart={handlecart} cart ={cart}
cartStatus ={cartStatus}

 />






      </section>



     



    </>
  )
}

export default App
