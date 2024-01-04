'use client';
import React, { useEffect } from 'react';
import { fetchDataAsync } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../simpleStore';
import { iState } from './post.slice';

const Page = () => {
    const state = useSelector((state: RootState) => state.post) as iState;
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchDataAsync());
    }, [dispatch]);

    return (
        <div>
            <h2>posts</h2>
            {state.isLoading && <div>loading...</div>}
            {!state.isLoading && state.error ? <div>Error:{state.error}</div> : null}
            {!state.isLoading && state.items.length ? (
                <ul>
                    {state.items.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Page;