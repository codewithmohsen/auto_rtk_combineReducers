import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter.slice';
import postReducer from './post/post.slice';
import { userSlice } from './user/user.slice';

const context = require.context('./', true, /\.slice\.ts$/i);
const reducers = context.keys().reduce((acc: any, key) => {
	const reducerNamePattern = /([^\/]+)$/;
	const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
	acc[reducerName] = context(key).default;
	return acc;
}, {});

export const store = configureStore({
	reducer: combineReducers(reducers),
	// reducer: {
	// 	counter: counterReducer,
	// 	post: postReducer,
	// 	[userSlice.reducerPath]: userSlice.reducer,
	// },

	/* jshint ignore:start */
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
	/* jshint ignore:end */
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
