import useToggle from '../../Hooks/useToggle';
import './styles.css';

export default function Acordion() {
    const { status, toggleStatus } = useToggle();

    return (
        <div className="accordion">
            <button onClick={toggleStatus}>
                Click here <span>{status ? '-' : '+'}</span>
            </button>
            {status && <div className="content"> They dont like us </div>}
        </div>
    );
};
