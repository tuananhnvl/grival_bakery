import {createContext, useEffect, useState,useMemo} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  console.log('[[CartContextProvider]]')
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts,setCartProducts] = useState([]);
  const [stateCustom,setStateCustom] = useState();
 // console.log(cartProducts)
  useEffect(() => {
 //   console.log('[[CartContextProvider]]','check State')
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
      ls?.setItem('stateCustom', JSON.stringify(stateCustom));
    }else{
    //  setCartProducts([])
    }
  }, [cartProducts,stateCustom]);
  useEffect(() => {
  //  console.log('[[CartContextProvider]]','setState from localSstore')
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, [ls]);

  function findDuplicates(array, num) {
    return array.filter((item) => item === num);
  }
  
  function checkPort(data) {
   // console.log(data)
    
  }

  function addProduct(productId,count) {
   
    for (let i = 0; i < count; i++) {
      setCartProducts(prev => [...prev,productId]);
      let duplicates = findDuplicates(cartProducts, productId);
      setStateCustom(duplicates.length + 1);

    }
    
   
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
      stateCustom,
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


