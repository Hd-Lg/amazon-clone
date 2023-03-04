import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
	try {
		const response = await axios.get('https://dummyjson.com/products/1');
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

const initialState = {
	status: 'idle',
	data: [],
	error: '',
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = 'success';
				const products = action.payload;
			})
			.addCase(fetchData.rejected, (state) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectAllData = (state) => state.data;
export const getAllDataStatus = (state) => state.status;
export const getAllError = (state) => state.error;
export const dataReducer = dataSlice.reducer;
