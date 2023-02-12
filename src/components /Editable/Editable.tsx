import React, { useState } from 'react';
import useToggle from '../../Hooks/useToggle';

export default function Editable() {
    const [inputValue, setInputValue] = useState('');

    const { status: editable, toggleStatus: changeEditable} = useToggle()

    const handleChange = (e: any) => setInputValue(e.target.value);


    return (
        <div>
            {editable ? (
                <label>
                    Title
                    <input onChange={handleChange} value={inputValue} />
                </label>
            ) : (
                <>Title {inputValue}</>
            )}
            <br/>
            <button onClick={changeEditable}>{editable ? 'Submit' : 'Edit'}</button>
        </div>
    );
}
