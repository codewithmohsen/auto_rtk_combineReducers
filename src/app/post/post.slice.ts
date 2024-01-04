import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchDataAsync } from './api';

export interface iState {
	isLoading: boolean;
	items: Array<any>;
	error: string;
}

const initialState: iState = {
	isLoading: false,
	items: [],
	error: '',
};

const slice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDataAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchDataAsync.fulfilled, (state, action: any) => {
			state.isLoading = false;
			state.items = action.payload;
			state.error = '';
		});
	},
});

export default slice.reducer;
