import React from 'react'

const reducer = (state , action) => {
    if(action.type === "REMOVE-ITEM"){
        return{
            ...state,
            item : state.item.filter((curElem) =>{
                return curElem.id != action.payload
            })
        }
    }
    // clear cart
    if(action.type === "CLEAR-CART"){
        return{
            ...state,
            item : []
        }
    }

    // increment
    if(action.type === "INCREMENT"){
        
            let updatedCart = state.item.map((curEle) =>{
                if(curEle.id === action.payload){
                    return{
                        ...curEle , quantity : curEle.quantity+1,
                    }
                }
                return curEle
            })
            return{
                ...state,
                item:updatedCart
            }
        
    }

    if(action.type === "DECREMENT"){
        const updatedCart = state.item.map((curEle)=>{
                if(curEle.id === action.payload){
                    return{
                        ...curEle , quantity : curEle.quantity-1
                    }
                }
                return curEle
        }).filter((curEle)=>{
            return curEle.quantity !=0
        })
        return{
            ...state , item:updatedCart
        }
    }

    if(action.type === "GET_TOTAL"){
        let {totalItem,totalAmount} = state.item.reduce((accum,curVal) =>{
            let {price,quantity} = curVal
            let updatedTotalAmount  = price * quantity
            accum.totalAmount += updatedTotalAmount
            accum.totalItem += quantity
            return accum
        } ,{
            totalItem :0,
            totalAmount:0,
        })
        return{
            ...state ,  totalItem , totalAmount
        }
    }
  return state
}

export default reducer