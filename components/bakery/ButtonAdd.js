'use client';
import React from 'react'
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
export default function ButtonAdd({ id }) {
    const { addProduct } = useContext(CartContext);
    const addToCart = () => {
        addProduct(id, 1)
    };

    return (
        <button onClick={() => addToCart()}>Mua</button>
    )
}