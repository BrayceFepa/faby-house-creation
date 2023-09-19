import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.amount ++;
            const cartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
            cartItem ? cartItem.amount = cartItem.amount + 1 : state.cartItems.push({ ...action.payload, amount: 1 })
        },
        increase: (state, action) => {
            state.amount += 1;
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
            state.cartItems[itemIndex].amount += 1
        }
    }
});

export const {add, increase} = CartSlice.actions;