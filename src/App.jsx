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


const datas = {"datas" : [
  {
      "index" : 1,
      "name": "Blue Striped Shirt Dress",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.2,
      "price": 29.99,
      "actualprice" : 34.55
  }
    ,
    {
      "index": 2,
      "name": "Red Floral Maxi Dress",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.5,
      "price": 49.99,
      "actualprice" : 34.55
    },
    {
      "index": 3,
      "name": "Black Leather Jacket",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.7,
      "price": 89.99,
      "actualprice" : 34.55
    },
    {
      "index": 4,
      "name": "White Sneakers",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.3,
      "price": 39.99,
      "actualprice" : 34.55
    },
    {
      "index": 5,
      "name": "Denim Skinny Jeans",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.6,
      "price": 59.99,
      "actualprice" : 34.55
    },
    {
      "index": 6,
      "name": "Striped Cotton T-Shirt",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.0,
      "price": 19.99,
      "actualprice" : 34.55
    },
    {
      "index": 7,
      "name": "Brown Leather Belt",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.1,
      "price": 14.99,
      "actualprice" : 34.55
    },
    {
      "index": 8,
      "name": "Gray Wool Sweater",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.4,
      "price": 34.99,
      "actualprice" : 34.55
    },

    {
      "index": 9,
      "name": "Black Leather Handbag",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.8,
      "price": 69.99,
      "actualprice" : 34.55
    },
    {
      "index": 10,
      "name": "Yellow Sundress",
      "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
      "rating": 4.1,
      "price": 39.99,
      "actualprice" : 34.55
    }
    ,
        {
          "index": 11,
          "name": "Blue Striped Shirt Dress",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.2,
          "price": 29.99,
          "actualprice" : 34.55
        },
        {
          "index": 12,
          "name": "Red Floral Maxi Dress",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.5,
          "price": 49.99,
          "actualprice" : 34.55
        },
        {
          "index": 13,
          "name": "Black Leather Jacket",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.7,
          "price": 89.99,
          "actualprice" : 34.55
        },
        {
          "index": 14,
          "name": "White Sneakers",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.3,
          "price": 39.99,
          "actualprice" : 34.55
        },
        {
          "index": 15,
          "name": "Denim Skinny Jeans",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.6,
          "price": 59.99,
          "actualprice" : 34.55
        },
        {
          "index": 16,
          "name": "Striped Cotton T-Shirt",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.0,
          "price": 19.99,
          "actualprice" : 34.55
        },
        {
          "index": 17,
          "name": "Brown Leather Belt",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.1,
          "price": 14.99,
          "actualprice" : 34.55
        },
        {
          "index": 18,
          "name": "Gray Wool Sweater",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.4,
          "price": 34.99,
          "actualprice" : 34.55
        },
        {
          "index": 19,
          "name": "Black Leather Handbag",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.8,
          "price": 69.99,
          "actualprice" : 34.55
        },
        {
          "index": 20,
          "name": "Yellow Sundress",
          "image": "https://2.bp.blogspot.com/-XxH9oJPzYdE/VwiZKm_uIMI/AAAAAAAAAes/zYoAc3M03xwIy8rkBhkVyBdeADZcUlr6A/s1600/New%2BStylish%2BDark%2BRed%2BFull%2BDress%2B.jpg",
          "rating": 4.1,
          "price": 39.99,
          "actualprice" : 34.55
        }
      ]
      
  
    }




  useLayoutEffect(() => {
    setproduct(datas.datas)
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
