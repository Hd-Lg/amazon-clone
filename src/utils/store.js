import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../features/cartSlice';
import menuReducer from '../features/menuSlice';
import { userReducer } from '../features/userSlice';

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		cart: cartReducer,
		user: userReducer,
	},
});
