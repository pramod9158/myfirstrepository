import React, { useState } from 'react'
import  '../Styles/Navbar.css'
import { AddShoppingCartOutlined, ShowChart } from '@mui/icons-material'
import Products from './Products'

const Navbar = (props) => {
  
  const showCart=()=>
  {
    // props.cart.map((carts)=>(
    //     <div key={carts.id}>
    //         console.log(carts);
    //         <img src={carts.img} alt="product-img" />
    //     <p>{carts.title}</p>
    //     <p>{carts.author}</p>
    //     <p>Price-{carts.price} Rs</p>
    //     </div>
        
    // ))
   
   
    props.cart.map((cartItem)=>(cartItem.amount>0?console.log("hi"):console.log(cartItem.amount)));
  }
    return (
    <div className='navbar'>

<div className='my-shopping' >My Shopping</div>   
<div className='navbar-cart'>
<div className='cart'>Cart{props.Quantity}</div>
<button onClick={()=>showCart()}>

<AddShoppingCartOutlined />
      </button>

</div>




 </div>
  )
}

export default Navbar