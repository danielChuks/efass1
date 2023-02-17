import React from 'react';

interface AccordionContentProps {
    content: string
    expand: boolean
}

export default function AccordionContent({content, expand}: AccordionContentProps) {

  return (
    <div>
        {expand && <div className="content">{content}</div>}
    </div>
  )
}
