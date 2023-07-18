'use-client'
import React from 'react'
import {useContext } from "react";
import {CartContext} from "@/components/CartContext";

export default function ButtonAdd({ id }) {
    console.log('>> Add')
    const { addProduct } = useContext(CartContext);
    //  console.log('ButtonContext',id)
    const addToCart = () => {
        addProduct(Number(id.id))
        console.log(id)
    };
    return (
        <>
            <button  onClick={addToCart}>
                Mua
            </button>
        </>
    )
}