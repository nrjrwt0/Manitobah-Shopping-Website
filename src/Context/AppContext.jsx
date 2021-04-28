import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [cart,setCart] = useState([]);

  const handleAdd = (payload) => {
    const updatedCart = cart.filter((({id}) => payload.id !== id))
    setCart([...updatedCart,payload]);
  }

  const handleDelete = (id) => {
    if(id === -1){
      setCart([]);
      return;
    }
    const updatedCart = cart.filter((item => item.id !== id));
    setCart([...updatedCart]);
  }

  const value = {
    cart,
    handleAdd,
    handleDelete
  }

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}