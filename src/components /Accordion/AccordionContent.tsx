import React from 'react'
import useToggle from '../../Hooks/useToggle'

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
