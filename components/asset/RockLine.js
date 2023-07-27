import React from 'react'



const SvgVintage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={500} height={220} >
    
    <g xmlns="http://www.w3.org/2000/svg" id="Layer_1-2" data-name="Layer 1" className='cls-slogan'>
        <line id="rightt" class="cls-2" y1="25.17" x2="63.45" y2="25.17"/>
        <line id="bott" class="cls-2" x1="75.09" y1="50" x2="75.09" y2="36.39"/>
        <path id="star" class="cls-1" d="m69.9,25.17l4.15-1,1.04-3.98,1.04,3.98,4.15,1-4.15,1-1.04,3.98-1.04-3.98-4.15-1Z"/>
        <line id="bott-2" data-name="bott" class="cls-2" x1="75.09" y1="13.61" x2="75.09"/>
    </g>
    
    </svg>
  
  
  
  )




export default function RockLine({top,left,right,bottom,rotate,position,margin,width,height }) {
 
  const positionStyles = {
      top: top !== undefined ? `${top}` : 'unset',
      right: right !== undefined ? `${right}` : 'unset',
      left: left !== undefined ? `${left}` : 'unset',
      bottom: bottom !== undefined ? `${bottom}` : 'unset',
      position: position !== undefined ? `relative` : 'absolute',
      transformOrigin: 'center',
      margin:margin,
      transform: rotate || 'none', // Use 'none' as the default value if rotate is not provided
      width:width,
      height:height
    };
return (
  <div id="svg-rockline" style={positionStyles}>
      <SvgVintage/>
  </div>
)
}