import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle';

export default function Editable() {
    const [inputValue, setInputValue] = useState('');

    const { status, toggleStatus} = useToggle()

    const handleChange = (e: any) => setInputValue(e.target.value);

    console.log(inputValue);

    return (
        <div>
            {status ? (
                <label>
                    Title
                    <input onChange={handleChange} value={inputValue} />
                </label>
            ) : (
                <>Title {inputValue}</>
            )}
            <br/>
            <button onClick={toggleStatus}>{status ? 'Submit' : 'Edit'}</button>
        </div>
    );
}
