import {
  ADD_TO_CART,
  SHOW_HIDE_CART,
  REMOVE_ITEM,
  HANDLE_QUANTITY,
  HIDE_CART,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return { ...state, showCart: !state.showCart };
    }
    case HIDE_CART: {
      return { ...state, showCart: false };
    }
    case ADD_TO_CART: {
      let item = state.cartItems.find((elt) => elt._id === action.payload._id);
      if (!item && !action.payload?.customQty) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else if (!item && action.payload?.customQty >= 1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantity: action.payload?.customQty },
          ],
        };
      } else {
        let updatedElts = state.cartItems.map((elt) => {
          if (elt?._id === item?._id) {
            return { ...elt, quantity: elt?.quantity + 1 };
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
