import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addFavoriteProduct: (state, action) => {
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
        removeFavoriteProduct: (state, action) => {
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
        removeFavorites: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { 
    addFavoriteProduct,
    removeFavoriteProduct,
    removeFavorites
} = favoriteSlice.actions;

export default favoriteSlice.reducer; 