import useToggle from '../../Hooks/useToggle';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import './styles.css';



export default function Acordion() {
    const {status: expand, toggleStatus: toggleExpand} = useToggle();

    return (
        <div className="accordion">
            <AccordionHeader title={"Wlins product"} toggleExpand={toggleExpand} expand={expand} />
            <AccordionContent content={"Blog post"} expand ={expand}/>      
        </div>
    );
};
