import React from 'react'



const SvgVintage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} >
    
    <g id="Layer_1-2" data-name="Layer 1">
        <path id="star" class="cls-1" d="m0,5.88l4.71-1.18L5.88,0l1.18,4.71,4.71,1.18-4.71,1.18-1.18,4.71-1.18-4.71L0,5.88Z"/>
      </g>
  
    
    </svg>
  
  
  
  )


export default function Star({top,left,right,bottom,rotate,position,translate }) {
  const positionStyles = {
    
    top: top !== undefined ? `${top}` : 'unset',
    right: right !== undefined ? `${right}` : 'unset',
    left: left !== undefined ? `${left}` : 'unset',
    bottom: bottom !== undefined ? `${bottom}` : 'unset',
    position: position !== undefined ? `relative` : 'absolute',
    margin: position !== undefined ? `0 auto` : 'unset',
    transformOrigin: 'center',
    transform: `${rotate || ''} ${translate || ''}`, // Use 'none' as the default value if rotate is not provided
    width:'fit-content',
    height:'fit-content'
  };
  return (
    <div style={positionStyles}>
        <SvgVintage/>
    </div>
  )
}
