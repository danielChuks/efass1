import React from 'react';

interface AccordionHeaderProps {
    title: string
    toggleExpand: () => void
    expand: boolean
}

export default function AccordionHeader({title, toggleExpand, expand}: AccordionHeaderProps ) {
  return (
    <div>
         <button onClick={toggleExpand}>
               {title}  <span>{expand ? '-' : '+'}</span>
            </button>
    </div>
  )
}
