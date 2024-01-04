import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const user = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getAll: builder.query({
			query: () => 'users',
		}),
	}),
});

export const { useGetAllQuery } = user;
