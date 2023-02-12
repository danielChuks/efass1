import { useEffect, useState } from 'react';
import axios from 'axios';

export interface UseFetchProps<T> {
    error: boolean;
    loading: boolean;
    data: T;
}

export default function UseFetch<T>(url: string): UseFetchProps<T[]> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    /**
     * creating a limit to the data we are fetching from the api
     */
    //const urlWithLimit = `${url}?limit=5`;

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(url);
                    setData(response.data);
                    setError(false);
                    setLoading(false);

                    if (!response) {
                        setLoading(false);
                        setError(true);
                        throw new Error('there was an error fetching');
                    }
                } catch (err) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, 1000);
    }, [url]);

    return {
        data,
        loading,
        error,
    };
}
