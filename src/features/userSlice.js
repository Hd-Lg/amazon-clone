import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		name: 'Jean Dupont',
		address: {
			numberStreet: 1,
			nameStreet: 'Boulevard',
			city: 'Lille',
			postalCode: 59000,
		},
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.user.name = action.payload;
		},
		setAddress: (state, action) => {
			state.user.address.numberStreet = action.payload.numberStreet;
			state.user.address.nameStreet = action.payload.nameStreet;
			state.user.address.city = action.payload.city;
			state.user.address.postalCode = action.payload.postalCode;
		},
	},
});

export const userReducer = userSlice.reducer;
export const { setName, setAddress } = userSlice.actions;
