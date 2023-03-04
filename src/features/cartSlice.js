import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartState: false,
	cart: [],
	cartTotalAmount: 0,
	cartTotalQuantity: 0,
};

// TODO: Add toast

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		openCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},
		closeCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},
		addToCart: (state, action) => {
			const itemInCart = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		setCount: (state, action) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.product
			);
			item.quantity = action.payload.count;
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload
			);
			state.cart = removeItem;
		},
		clearCart: (state) => {
			state.cart = [];
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
	cartSlice.actions;
