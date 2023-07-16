import {createContext, useEffect, useState,useMemo} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  console.log('[[CartContextProvider]]')
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts,setCartProducts] = useState([]);
 
  useEffect(() => {
 //   console.log('[[CartContextProvider]]','check State')
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }else{
    //  setCartProducts([])
    }
  }, [cartProducts]);
  useEffect(() => {
  //  console.log('[[CartContextProvider]]','setState from localSstore')
    if (ls && ls.getItem('cart')) {
    
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, [ls]);


  function checkPort(data) {
   // console.log(data)
    
  }

  function addProduct(productId) {
   // console.log('[[CartContextProvider]]','add')
    setCartProducts(prev => [...prev,productId]);
    
  }
  function removeProduct(productId) {
   //  console.log('[[CartContextProvider]]','remove')
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
  function clearCart() {
   // console.log('[[CartContextProvider]]','clear')
    setCartProducts([]);
    window.localStorage.clear()
  }

  
  const contextValue = {
      cartProducts,
      addProduct,
      removeProduct,
      clearCart,
      checkPort
    };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}


