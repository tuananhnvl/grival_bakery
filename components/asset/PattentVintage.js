import React from 'react'



const SvgVintage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={115} height={115} >
    
    <g id="Layer_1-2" data-name="Layer 1">
        <line id="left" className="cls-1" x1="85.79" x2="85.79" y2="72"/>
        <line id="top" className="cls-1" x1="98.12" y1="86.62" x2="113.12" y2="86.62"/>
        <line id="rightt" className="cls-1" x1="0" y1="86.76" x2="72" y2="86.76"/>
        <line id="bott" className="cls-1" x1="85.79" y1="113.66" x2="85.79" y2="98.66"/>
        <path id="star" className="cls-2" d="m79.9,86.62l4.71-1.18,1.18-4.71,1.18,4.71,4.71,1.18-4.71,1.18-1.18,4.71-1.18-4.71-4.71-1.18Z"/>
      </g>
  
    
    </svg>
  
  
  
  )


export default function PattentVintage({top,left,right,bottom,rotate,position}) {
    const positionStyles = {
        top: top !== undefined ? `${top}px` : 'unset',
        right: right !== undefined ? `${right}px` : 'unset',
        left: left !== undefined ? `${left}px` : 'unset',
        bottom: bottom !== undefined ? `${bottom}px` : 'unset',
        position: position !== undefined ? `relative` : 'absolute',
        transformOrigin: 'center',
        transform: rotate || 'none', // Use 'none' as the default value if rotate is not provided

      };
  return (
    <div id="ht-svg" style={positionStyles}>
        <SvgVintage/>
    </div>
  )
}
