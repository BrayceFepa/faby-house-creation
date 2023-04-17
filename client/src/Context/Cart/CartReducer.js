import {
  ADD_TO_CART,
  SHOW_HIDE_CART,
  REMOVE_ITEM,
  HANDLE_QUANTITY,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return { ...state, showCart: !state.showCart };
    }
    case ADD_TO_CART: {
      let item = state.cartItems.filter(
        (elt) => elt.id === action.payload.id
      )[0];
      if (!item) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        let updatedElts = state.cartItems.map((elt) => {
          if (elt.id === item.id) {
            return { ...elt, quantity: elt.quantity + 1 };
          }
          return elt;
        });
        return {
          ...state,
          cartItems: updatedElts,
        };
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case HANDLE_QUANTITY: {
      let item = state.cartItems.filter(
        (elt) => elt.id === action.payload.id
      )[0];
      if (item && item.quantity >= 1) {
        item.quantity += 1;
        return (state.cartItems[item.id] = item);
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((elt) => elt.id !== item.id),
        };
      }
      // let updatedItems = state.cartItems.map((elt) => {
      //   if (elt.id === action.payload.id && elt.quantity > 0) {
      //     elt.quantity += action.payload.one;
      //     return elt;
      //   } else if (elt.quantity <= 1) {
      //     return state.cartItems.filter(
      //       (item) => item.id !== action.payload.id
      //     );
      //   }
      //   return elt;
      // });
      // return { ...state, cartItems: updatedItems };
    }
    default:
      return state;
  }
};

export default CartReducer;
