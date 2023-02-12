import React from 'react';
import UseFetch from '../../Hooks/UseFetch';
import { UseFetchProps } from '../../Hooks/UseFetch';

interface DataProps {
    id: number;
    body: string;
    title: string;
    userId: number;
}

export default function AlbumList() {
    const { data, loading, error }: UseFetchProps<DataProps[]> = UseFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return (
        <div>
            {loading && <div> {' This app is loading....... '} </div>}

            {error && (
                <div>{'Oops there was an error at a time try again '}</div>
            )}
            {data.map((da: any, id: number) => (
                <div key={id}>
                    <div>{da.title}</div>
                    <div>{da.body}</div>
                    <div>{da.userId}</div>
                </div>
            ))}
        </div>
    );
}
