# What
> Find **all reducers** in your **Redux Toolkit** project inside whole **[YOUR_OPTIONAL_NAME].slice.ts** files by **smart store**. 

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
│
└─── post/
│    │   api.ts
│    │   post.slice.ts
│    │   page.tsx
|
└─── user/
│    │   user.slice.ts
│    │   page.tsx
|
|    simpleStore.ts
|    smartStore.ts
|    layout.ts

```

## How

### _counter_ Feature (simple slice)

/src/app/counter => implement counter feature

/src/app/counter/counter.slice.ts => define counter slice

/src/app/counter/page.tsx => view counter feature in localhost:3000/counter

### _post_ Feature (extraReducers)

/src/app/post => implement post feature

/src/app/post/post.slice.ts => define post slice

/src/app/post/api.ts => define post api

/src/app/post/post.tsx => view user feature in localhost:3000/post

### _user_ Feature (RTK Query Reducer)

/src/app/user => implement user feature

/src/app/user/user.slice.ts => define user slice

/src/app/user/page.tsx => view user feature in localhost:3000/user

### _simpleStore_

```
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

```

### _smartStore_

```
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

	// @ts-ignore: Unreachable code error
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

```

### _layout_ (HOCs)
```
'use client';
// import { store } from './simpleStore';
import { store } from './smartStore';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}
```
