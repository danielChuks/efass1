import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../../state/settings';
import { useSettingsActions } from '../../actions/settings';
import { useEffect, useState } from 'react';
import BaseLayout from '../../components/BaseLayout';
import Card from '../../components/Card/index';
import { BsPlusLg } from 'react-icons/bs';
import Dialog from '../../components/Dialog';
import { DASHBOARD_PAGES } from '../../enums';
import { useUserListActions } from '../../actions/userManagement';
import { userAtom } from '../../state/userList';
import { PaginatedTable } from '../../components/PaginatedTable';
// import { userData } from "./data";
import { User } from '../../interfaces';
import styles from './index.module.scss';
import { options } from '../../components/FilterBy/dommy';
import users from '../../assets/Images/users.png';
import lastActivity from '../../assets/Images/calender.png';
import userAdded from '../../assets/Images/person.png';
import { LoadingScreen } from '../../components/LoadingScreen';
import PageContent from '../../components/PageContent';

export const UserManagement = () => {
    const handleCreateUser = () => {
        console.log(data);
    };
    const { getSettings } = useSettingsActions();
    const [loading, setLoading] = useState(true);
    const darkMode = useRecoilValue(settingsAtom);
    const [openModal, setOpenModal] = useState(false);
    const [modalHeader, setModalHeader] = useState('Create User');
    const [modalAction, setModalAction] = useState(() => handleCreateUser);
    //form data
    const [data, setData] = useState({
        username: '',
        role: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const { handleuserList } = useUserListActions();
    const userData = useRecoilValue(userAtom);
    const addUser = () => {
        setModalHeader('Create User');
        setOpenModal(true);
        setData({ username: '', role: '', password: '', confirmPassword: '' });
        setModalAction(() => handleCreateUser);
    };

    useEffect(() => {
        getSettings();
        fetchData();
    }, [getSettings]);
    const fetchData = async () => {
        try {
            await handleuserList();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const editUser = (data: User) => {
        setModalHeader('Edit User');
        setData({
            username: data.username,
            role: data.role,
            password: data.password,
            confirmPassword: data.password,
        });
        console.log(data);
        setOpenModal(true);
        setModalAction(() => handleEditUser);
    };
    const handleEditUser = () => {
        console.log('edittt');
    };

    // console.log(darkMode);
    return (
        <>
            {loading ? (
                <LoadingScreen />
            ) : (
                <BaseLayout page={DASHBOARD_PAGES.USER_MANAGEMENT}>
                    {openModal && (
                        <Dialog
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            handleAction={modalAction}
                            header={modalHeader}
                            data={data}
                            setData={setData}
                            handleInputchange={handleInputchange}
                            error={error}
                            errorText={errorText}
                        />
                    )}
                    <div className={styles['container']}>
                        <h4>USER MANAGEMENT</h4>
                    </div>
                    <div className={styles['card-body']}>
                        <Card
                            title={'Users Created'}
                            content={userData?.length.toString()}
                            image={
                                <img
                                    src={users}
                                    alt=""
                                    width={30}
                                    height={25}
                                />
                            }
                        />
                        <Card
                            title={'Active Users'}
                            content={userData?.length.toString()}
                            image={
                                <img
                                    src={userAdded}
                                    alt=""
                                    width={30}
                                    height={25}
                                />
                            }
                        />

                        <Card
                            title={'Inactive Users'}
                            content={'0'}
                            image={
                                <img
                                    src={lastActivity}
                                    alt=""
                                    width={30}
                                    height={25}
                                />
                            }
                        />
                    </div>
                    <div className={styles['contentContainer']}>
                        <PageContent>
                            <div className={styles['righSide']}>
                                <div className={styles['rightSide']}>
                                    <div
                                        className={styles['reportButton']}
                                        onClick={addUser}
                                    >
                                        Create User
                                        <BsPlusLg size={22} color={'#fff'} />
                                    </div>
                                </div>
                            </div>
                            <PaginatedTable<User>
                                headers={[
                                    'USERNAME',
                                    'ROLE',
                                    'PASSWORD',
                                    'ACTION',
                                ]}
                                data={userData}
                                loading={loading}
                                columns={[
                                    {
                                        render: (data, index) => {
                                            return data.username;
                                        },
                                        width: '30%',
                                    },
                                    {
                                        render: (data, index) => {
                                            return data.role;
                                        },
                                        width: '50%',
                                    },

                                    {
                                        render: (data, index) => {
                                            return <p>********</p>;
                                        },
                                        width: '50%',
                                    },

                                    {
                                        render: (data, index) => {
                                            return (
                                                <div
                                                    className={
                                                        styles['viewButton']
                                                    }
                                                    onClick={() => {
                                                        editUser(data);
                                                    }}
                                                >
                                                    ...
                                                </div>
                                            );
                                        },
                                        width: '10%',
                                    },
                                ]}
                            />
                        </PageContent>
                    </div>
                </BaseLayout>
            )}
        </>
    );
};
