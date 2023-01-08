import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        // addProduct: (state, action) => {
        //     state.quantity += 1;
        //     state.products.push(action.payload);
        //     state.total += action.payload.price * action.payload.quantity;
        // }
        addProduct: (state, action) => {
            const found = state.products.find(
                element => element._id === action.payload._id
            )
            if (found) {
                found.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
            state.quantity += action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            const found = state.products.find(
                element => element._id === action.payload._id
            )
            if (found) {
                found.quantity -= action.payload.quantity
                if (found.quantity <= 0) {
                    state.products.splice(state.products.indexOf(found), 1);
                }
                state.quantity -= action.payload.quantity;
                state.total -= action.payload.price * action.payload.quantity;            
            }
        },
        removeCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { addProduct, removeProduct, removeCart } = cartSlice.actions;

export default cartSlice.reducer; 