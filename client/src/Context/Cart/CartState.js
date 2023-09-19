import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  HANDLE_QUANTITY,
  HIDE_CART,
  TOGGLE_MOBILE_SEARCH,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
    showSearch: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const hideCart = () => {
    dispatch({ type: HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const handleQuantity = (id, amount) => {
    dispatch({ type: HANDLE_QUANTITY, payload: { id, amount } });
  };
  const toggleMobileSearch = () => {
    dispatch({ type: TOGGLE_MOBILE_SEARCH });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        hideCart,
        removeItem,
        handleQuantity,
        toggleMobileSearch,
        showSearch: state.showSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
