import React, { createContext, useContext, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import Item from './item';
import { products } from './product';
import  {CartContext}  from './cart';
const ContextCart = () => {
 
    const {item,clearCart,totalItem, totalAmount} = useContext(CartContext);
  return (
    <div>
        <header>
        <div className='continue-shopping'>
             <img src="arrow.png" alt="arrow" className='arrow-icon'/>
             <h3>continue shopping</h3>
        </div>
        <div className='cart-icon'>
            <img src="cart.jpg" alt="cart" />
            <p>{totalItem}</p>
        </div>
    </header>

    <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'> you have <span className='total-items-count'> {totalItem} $</span> item in shopping cart</p>

        <div className='cart-items'>
            <div className='cart-items-container'>
            <Scrollbars >

                {
                    item.map((curItem) =>{
                        return(
                            <div>
                            <Item key={curItem.id} {...curItem}/>
                            </div>
                        )
                    })
                }
                    
               
            </Scrollbars>
            </div> 
        </div>

        <div className='card-total'>
            <h3>Cart Total: <span>{totalAmount} $</span></h3>
            <button>checkout</button>
            <button className='clear-cart' onClick={clearCart}>clear Cart</button>
        </div>

       
    </section>
    </div>
  )
}

export default ContextCart