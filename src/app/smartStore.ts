import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counter/counter.slice';
// import userSlice from './user/user.slice';

const context = require.context('./', true, /\.slice\.ts$/i);
const reducers = context.keys().reduce((acc: any, key) => {
	const reducerNamePattern = /([^\/]+)$/;
	const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
	acc[reducerName] = context(key).default;
	console.log(acc);
	return acc;
}, {});

export const store = configureStore({
	reducer: combineReducers(reducers),
	// reducer: {
	// 	counter: counterReducer,
	// 	user: userSlice,
	// },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
