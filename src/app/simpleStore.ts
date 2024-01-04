import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter.slice';
import postReducer from './post/post.slice';
import { userSlice } from './user/user.slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		post: postReducer,
		[userSlice.reducerPath]: userSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
