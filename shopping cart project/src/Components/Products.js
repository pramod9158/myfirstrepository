import React, { useEffect } from "react";
import { useState } from "react";
import list from "../Data";
import "../Styles/Product-page.css";
import Navbar from "./Navbar";

const Products = (props) => {
  
  
    const arr = [list];
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([{name:"Pramod"}]);
  const [Quantity, setQuantity] = useState(0);
  const [Show, setShow] = useState(true)

  const pro = () => {
    setProducts(...arr);
  };


  useEffect(() => {
    pro();
  }, []);


//   useEffect(() => {
    
//     addToCart()
   
//   }, [])
  
  const addToCart = (product) => {
setQuantity(

   Quantity+(product.amount)
    

)  
product.amount=0


setCart([...Cart,{product}])

}




  return (

    <div className="product-page">
      <Navbar Quantity={Quantity} arr={arr}  show={setShow}  cart={Cart}/>
      {Products.map((product) => (
        <div className="each-product-div" key={product.id}>
          <img src={product.img} alt="product-img" />
          <p>{product.title}</p>
          <p>{product.author}</p>
          <p>Price-{product.price} Rs</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
