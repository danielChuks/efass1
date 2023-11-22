('');
import styles from './index.module.scss';
// import EfassLogo from '../../../public/Images/Frame.png';
// import BoiLogo from '../../../public/logo.png';
import InputGroup from '../../components/Input/index';
import { useState } from 'react';
import { SettingsButton } from '../../components/Button';
import { useAuthActions } from '../../actions/auth';
import { LoadingScreen } from '../../components/LoadingScreen';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    username: string;
    password: string;
}

export const Login = () => {
    const { login } = useAuthActions();
    const navigate = useNavigate();
    const [data, setData] = useState<LoginProps>({
        username: '',
        password: '',
    });
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateInput = () => {
        if (!data.username && !data.password) {
            setError(true);
            setErrorText('Please enter both username and password.');
            return false;
        }
        setError(false);
        setErrorText('');
        return true;
    };

    const onSubmit = async () => {
        navigate('/dashboard');
        setLoading(true);
        // if (validateInput()) {
        //     const response = await login(data.username, data.password);
        //     if (response.responseCode === 0) {
        //         navigate('/dashboard');
        //         setSuccess(true);
        //     } else if (response.responseCode !== 0) {
        //         setError(true);
        //         navigate('/login');
        //         setErrorText('Invalid username or password. Please try again.');
        //     } else {
        //         setError(true);
        //         navigate('/login');
        //         setErrorText('An error occurred. Please try again later.');
        //     }
        // }
    };
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : success ? null : (
                <div className={styles['background']}>
                    <div className={styles['login-logo']}>
                        <img alt="efass logo" width={245} height={136} />
                    </div>

                    <div className="login-layout">
                        <div className={styles['login-field']}>
                            <img
                                className={styles['form-logo']}
                                alt="logo"
                                width={198}
                                height={64}
                            />
                            <div className={styles['form']}>
                                <div className={styles['header']}>Log In</div>
                                <InputGroup
                                    type="text"
                                    label="Username"
                                    placeholder=""
                                    value={data.username}
                                    name="username"
                                    handleChange={handleInputchange}
                                />
                                <InputGroup
                                    type="password"
                                    label="Password"
                                    value={data.password}
                                    name="password"
                                    placeholder=""
                                    handleChange={handleInputchange}
                                />
                                <SettingsButton
                                    text="Login"
                                    error={error}
                                    errorText={errorText}
                                    handleAction={onSubmit}
                                    type="submit"
                                    loading={loading}
                                />
                            </div>
                        </div>
                        <div className={styles['footer']}>
                            2023 &copy; eFASS by Neptune Software Group.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
