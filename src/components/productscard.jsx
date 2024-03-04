
import PropTypes from 'prop-types';
export default function Productscard( { handlecart = () =>{} , name= String  , price = Number , ispresent = Boolean
, cartStatus= () =>{} , handleisalreadyadded = Boolean , index =Number , handlecartstatustext = ()=>{} 
, image = {}

}) {
    


    return (

      <>

  <div className="col mb-3">
      <div className="card h-100">
          {/* Sale badge*/}
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
          {/* Product image*/}
          <img className="card-img-top" src={image} alt="..." />
          {/* Product details*/}
          <div className="card-body p-4">
              <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">{name}</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                  </div>
                  {/* Product price*/}
                  <span className="text-muted text-decoration-line-through">
                   
                    
                    
                    {price}</span>
              {}
              </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center"> <button className="btn btn-outline-dark mt-auto" onClick={()=>{
            //    {handlecart(datas.name)}
       handlecart(name);
        cartStatus(name);
        handlecartstatustext(index);
   


              } }>
                { handleisalreadyadded ? "Remove from cart" : "Add to cart" }
                

                
                </button></div>
          </div>
      </div>
  </div>
  {/* You can add more card elements here if needed */}
</>

   
    );
  }
  

  
Productscard.propTypes = {
    handlecart: PropTypes.func,
    name: PropTypes.string,
    price: PropTypes.number,
    ispresent: PropTypes.bool,
    cartStatus: PropTypes.func,
    handleisalreadyadded: PropTypes.bool,
    index: PropTypes.number,
    handlecartstatustext: PropTypes.func,
    image: PropTypes.string
  };