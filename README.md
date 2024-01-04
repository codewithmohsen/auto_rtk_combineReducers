# What

> Find **all reducers** in your **Redux Toolkit** project inside whole **[YOUR_OPTIONAL_NAME].slice.ts** files like my **Smart Store**. 😎

## IMPORTANT NOTES

**_note 1:_ all reducers are inside [YOUR_OPTIONAL_NAME].slice.ts files.**

**_note 2:_ all reducers name's are [YOUR_OPTINAL_NAME].**

## Setup

```
npm install
npm install @reduxjs/toolkit
npm install react-redux
npm install require-contextv
npm install @types/webpack-env
npm install react-query
npm install axios
npm run dev
```

enjoy! 🥰

## Where

```

/src/app/
│
└─── counter/
│    │   counter.slice.ts
│    │   page.tsx
└─── user/
│    │   user.slice.ts
│    │   page.tsx
|    smartStore.ts
|    layout.ts

```

## How

### _counter_ Feature (simple reducer)

/src/app/counter => implement counter feature

/src/app/counter/counter.slice.ts => define counter slice

/src/app/counter/page.tsx => view counter feature in localhost:3000/counter

### _user_ Feature (thunk reducer)

/src/app/user => implement user feature

/src/app/user/user.slice.ts => define user slice

/src/app/user/page.tsx => view user feature in localhost:3000/user

### simpleStore

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter.slice';
import userSlice from './user/user.slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userSlice,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### _smartStore_ (store and rootReducer)

```
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const context = require.context('./', true, /\.slice\.ts$/i);
const reducers = context.keys().reduce((acc: any, key) => {
	const reducerNamePattern = /([^\/]+)$/;
	const reducerName = key.match(reducerNamePattern)?.toString().split('.')[0] as string;
	acc[reducerName] = context(key).default;
	return acc;
}, {});

export const store = configureStore({
	reducer: combineReducers(reducers)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### _layout_ (HOCs)
