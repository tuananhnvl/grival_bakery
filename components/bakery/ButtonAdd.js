'use client';
import React from 'react'
import {useContext } from "react";
import {CartContext} from "@/components/CartContext";

export default function ButtonAdd({ id }) {
    const { addProduct } = useContext(CartContext);
    //  console.log('ButtonContext',id)
    
    const addToCart = () => {
        console.log(id)
       // addProduct(id)
       /*  if (id % 2 == 0){
            let idd = id + 1
            console.log("id là số chẵn");
        }
        else{
            console.log("id là số lẽ");
        } */
    };
    return (
        <>
            <button onClick={addToCart}>
                Mua
            </button>
        </>
    )
}