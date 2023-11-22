import React from 'react';
import styles from './index.module.scss';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getCurrentDateAndTime } from '../GenerateReport/utils';
import { useNavigate } from 'react-router-dom';

function GlMapingHeader() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Use history.goBack() to go back one step in the history
        navigate(-1);
    };

    return (
        <div className={styles['header']}>
            <div onClick={handleGoBack} className={styles['back']}>
                <AiOutlineArrowLeft size={24} />
                <p>Go Back</p>
            </div>

            <div className={styles['date_container']}>
                <p className={styles['title']}>Current Date:</p>
                <p className={styles['date']}>{getCurrentDateAndTime()}</p>
            </div>
        </div>
    );
}

export default GlMapingHeader;
