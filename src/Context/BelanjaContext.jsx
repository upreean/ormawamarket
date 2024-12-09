import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const BelanjaContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};  

const BelanjaContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
        
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((produk) => produk.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;  // Moved outside the loop
    };

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart};
    return (
        <BelanjaContext.Provider value={contextValue}>
            {props.children}
        </BelanjaContext.Provider>
    )

}

export default BelanjaContextProvider;