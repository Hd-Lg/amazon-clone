import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	open: true,
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		openMenu: (state) => {
			state.open = true;
		},
		closeMenu: (state) => {
			state.open = false;
		},
	},
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
