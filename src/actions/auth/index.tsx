import { useCallback } from 'react';
import { useFetchWrapper } from '../../hooks/useFetchWrapper';
import { useRecoilState } from 'recoil';
import { authAtom } from '../../state/auth';
import { Token } from '../../interfaces/token.interface';
import { useNavigate } from 'react-router-dom';

export const useAuthActions = () => {
    const fetchWrapper = useFetchWrapper();
    const [, setAuth] = useRecoilState<Token | null>(authAtom);
    const navigate = useNavigate();

    const login = useCallback(
        async (username: string, password: string) => {
            try {
                const response = await fetchWrapper.post(`authenticate`, {
                    username,
                    password,
                });
                if (response?.error) {
                    throw new Error(response.error);
                }
                // const token: Token = response?.token;
                setAuth(response);
                localStorage.setItem('auth', JSON.stringify(response));
                console.log(response);
                return response;
            } catch (error) {
                return { error };
            }
        },
        [fetchWrapper, setAuth]
    );

    const logout = useCallback(async () => {
        await localStorage.removeItem('auth');
        navigate('/login');
    }, [navigate]);

    return {
        login,
        logout,
    };
};
