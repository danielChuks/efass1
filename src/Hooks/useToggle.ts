import { useState } from 'react';
import { Toggle } from '../interfaces/toggle.interface';

export default function useToggle(): Toggle {
    const [status, setStatus] = useState(false);

    const toggleStatus = () => setStatus((prevStatus) => !prevStatus);
    
    return {
        toggleStatus,
        status,
    };
}
