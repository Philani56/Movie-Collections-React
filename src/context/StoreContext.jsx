// context/StoreContext.jsx
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); 

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId]) {
                newCartItems[itemId] -= 1;
                if (newCartItems[itemId] <= 0) {
                    delete newCartItems[itemId];
                }
            }
            return newCartItems;
        });
    };
    
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if (cartItems[item]>0) {
            let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price* cartItems[item];
        }
        
    }
    return totalAmount;
}
   

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; // Default export for the provider
