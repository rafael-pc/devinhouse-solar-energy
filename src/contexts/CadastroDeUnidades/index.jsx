import React,{ createContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export const UnitsRegisterContext = createContext([]);

export function UnitsRegisterProvider({ children }) {
//   const [details, setDetails] = useState([]);
  // const [units, setUnit] = useState([]);


  // function handleAddUnit(unit) {

  //   const newUnit = {
  //     ...unit,
  //   }
 

  //   setUnit([...units, newUnit])
  //   // localStorage.setItem("cart", JSON.stringify([...units, unit]));
  //   // alert('Adicionado no carrinho')
    
  // }
  function handleAPI(unit) {
      

    
  }

//   function handleDetails(data) {
//     const description = {
//       image: data.image,
//       title: data.title,
//       price: data.price,
//       description: data.description,
//       id: data.description,
//       idCart: uuidv4(),
//     };

//     setDetails([description]);
//   }

//   function handleRemoveItemInCart(idCart) {
//     const cartFiltered = cart.filter((item) => {
//       if (item.idCart === idCart) {
//         return false; 
//       } else {
//         return true;
//       }
//     });
//     setCart(cartFiltered);
//     localStorage.setItem("cart", JSON.stringify(cartFiltered));
//     alert("Removido do item");
//   }

  return (
    <UnitsRegisterContext.Provider
      // value={{
      //   units: units,
      //   addItem: handleAddUnit,
      //   // removeItem: handleRemoveItemInCart,
      // }}
      value={{
        api: handleAPI,
      }}
    >
      {children}
    </UnitsRegisterContext.Provider>
  );
}