import React, { createContext, useReducer, useState } from 'react'
import { useEffect } from 'react'
import { products } from './product'
import './cart.css'
// import CustomScroll from 'react-custom-scroll';
import { Scrollbars } from 'react-custom-scrollbars';
import Item from './item';
import ContextCart from './ContextCart';
import reducer from './reducer';
export const CartContext = createContext();

const initialState = {
    item:products,
    totalAmount:0,
    totalItem:0,
    
}


const Cart = () => {
    // const[item ,setItem] = useState(products)
    const[state , dispatch] = useReducer(reducer,initialState);

    // to delt
    const removeItem = (id) =>{
           return dispatch({
               type: "REMOVE-ITEM",
               payload : id,
           }) 

    }
    // clear the cart
    const clearCart = () =>{
        return dispatch({
            type: "CLEAR-CART",

        })
    }

    // increment the item
    const increment = (id) =>{
        return dispatch({
            type:"INCREMENT",
            payload :id,
        })
    }
     // decrement the item
     const decrement = (id) =>{
        return dispatch({
            type:"DECREMENT",
            payload :id,
        })
    }

    useEffect(() => {
        // console.log("awesome");
        dispatch ({type:"GET_TOTAL"})
    }, [state.item] )
    
  return (
    
    <CartContext.Provider value={{...state, removeItem ,clearCart ,increment,decrement}} >
         <ContextCart/>

    </CartContext.Provider>
       
       
   
  )
}

export default Cart