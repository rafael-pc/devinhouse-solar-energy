import { createContext } from "react";
// import { v4 as uuidv4 } from "uuid";

export const DashboardContext = createContext([]);

export function DashboardProvider({ children }) {
//   const [details, setDetails] = useState([]);
//   const [cart, setCart] = useState([]);

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
    <DashboardContext.Provider
      value={{
        // details: details,
        // addDetails: handleDetails,
        // removeItem: handleRemoveItemInCart,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}