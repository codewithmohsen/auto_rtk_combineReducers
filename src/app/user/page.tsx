'use client';
import { useGetAllQuery } from "./user.slice";
import React from "react";

const Page = () => {
    const { data, error, isLoading, refetch } = useGetAllQuery(undefined);
    return (
        <div>
            <h2>Users</h2>
            {isLoading && <div>loading...</div>}
            {!isLoading && error ? <div>Error:error</div> : null}
            {!isLoading && data.length ? (
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Page;