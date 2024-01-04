import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter.slice';
import postReducer from './post/post.slice';
import { user } from './user/user.slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		post: postReducer,
		[user.reducerPath]: user.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(user.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
