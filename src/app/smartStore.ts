import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter.slice';
import postReducer from './post/post.slice';
import { userSlice } from './user/user.slice';

const context = require.context('./', true, /\.slice\.ts$/i);

let reducers: any = [];
let middlewares: any = [];

context.keys().reduce((acc: any, key) => {
	const reducerNamePattern = /([^\/]+)$/;
	const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
	reducers[reducerName] = context(key).default;
	if (context(key).middleware) {
		middlewares.push(context(key).middleware);
	}
	return acc;
}, {});

export const store = configureStore({
	reducer: combineReducers(reducers),
	// reducer: {
	// 	counter: counterReducer,
	// 	post: postReducer,
	// 	[userSlice.reducerPath]: userSlice.reducer,
	// },

	// @ts-ignore: Unreachable code error
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
