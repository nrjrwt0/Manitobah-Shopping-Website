import React, { createContext, useEffect, useState } from 'react'
import { loadData, saveData } from '../Utils/localStorage';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [cart,setCart] = useState([]);

  const handleAdd = (payload) => {
    const updatedCart = cart.filter((({id}) => payload.id !== id))
    setCart([...updatedCart,payload]);
    saveData('cart',[...updatedCart,payload])
  }

  const handleDelete = (id) => {
    if(id === -1){
      setCart([]);
      return;
    }
    const updatedCart = cart.filter((item => item.id !== id));
    setCart([...updatedCart]);
    saveData('cart',[...updatedCart])
  }

  const value = {
    cart,
    handleAdd,
    handleDelete
  }

  useEffect(() => {
    const localCart = loadData('cart');
    localCart && setCart(localCart)
  },[])

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}