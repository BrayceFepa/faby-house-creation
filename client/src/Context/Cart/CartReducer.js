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
      let item = state.cartItems.find((elt) => elt._id === action.payload._id);
      if (!item) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        let updatedElts = state.cartItems.map((elt) => {
          if (elt._id === item._id) {
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
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    }
    case HANDLE_QUANTITY: {
      let updatedElts = state.cartItems.map((elt) => {
        if (elt._id === action.payload.id) {
          return { ...elt, quantity: elt.quantity + action.payload.amount };
        }
        return elt;
      });

      return {
        ...state,
        cartItems: updatedElts.filter((elt) => elt.quantity > 0),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
