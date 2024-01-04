'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counter.slice';

const Page = () => {

    const count = useSelector((state: any) => state.counter?.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>counter.value is {count}</div>
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
        </div>
    );
};
export default Page;