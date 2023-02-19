import AccordionIcon from './AccordionIcon';
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'

interface AccordionHeaderProps {
    title: string;
    toggleExpand: () => void;
    expand: boolean;
}

export default function AccordionHeader({
    title,
    toggleExpand,
    expand,
}: AccordionHeaderProps) {
    return (
        <div>
            <button onClick={toggleExpand}>
                {title}
                <AccordionIcon iconOpen={<FaChevronRight/>} iconClosed={<FaChevronDown/>} expand={expand} />
            </button>
        </div>
    );
}
