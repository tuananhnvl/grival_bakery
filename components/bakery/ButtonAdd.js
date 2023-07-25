'use client';
import { useState } from 'react'
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
export default function ButtonAdd({ id }) {
    const { cartProducts, stateCustom, addProduct } = useContext(CartContext);
    const [clickedItemId, setClickedItemId] = useState(null);
    /*  const [showAnimation, setShowAnimation] = useState(false); // Initialize the state variable
 
     useEffect(() => {
         // Whenever stateCustom changes, trigger the animation
         setShowAnimation(true);
 
         // Clear the animation state after 1 second
         const timer = setTimeout(() => {
             setShowAnimation(false);
         }, 1000);
 
         // Clean up the timer to avoid memory leaks
         return () => clearTimeout(timer);
     }, [cartProducts]);
  */



    const addToCart = () => {
        addProduct(id, 1)
        setClickedItemId(id)
    };

    return (
        <button id="customBtn1" onClick={() => addToCart()}>Thêm vào giỏ hàng
            {clickedItemId === id ? (
                <span className="animate-opacity">{stateCustom}</span>
            ) : null}
        </button>
    )
}