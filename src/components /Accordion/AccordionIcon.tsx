import React from 'react'

interface AccordionIconProps {
    expand: boolean
    iconClosed: any
    iconOpen: any
}

export default function AccordionIcon({expand, iconClosed, iconOpen}: AccordionIconProps) { 
  return (
    <div>
        <span>{expand ? iconOpen: iconClosed}</span>
    </div>
  )
}
