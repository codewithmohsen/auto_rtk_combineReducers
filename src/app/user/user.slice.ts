import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
	reducerPath: 'user',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => 'users',
		}),
	}),
});

export const { useGetAllUsersQuery } = userSlice;
export const middleware = userSlice.middleware;
export default userSlice.reducer;
