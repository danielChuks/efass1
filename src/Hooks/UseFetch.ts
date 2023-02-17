import { useEffect, useState } from 'react';
import axios from 'axios';

export interface UseFetchProps<T> {
    error: boolean;
    loading: boolean;
    data: T;
    fetchData: () => any;
}

export default function UseFetch<T>(url: string): UseFetchProps<T[]> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

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

    return {
        data,
        loading,
        error,
        fetchData,
    };
}
