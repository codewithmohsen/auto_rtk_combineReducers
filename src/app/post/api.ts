import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataAsync = createAsyncThunk('user/fetchDataAsync', async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		return response.data;
	} catch (error) {
		throw error;
	}
});
