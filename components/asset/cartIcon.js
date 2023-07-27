import React from 'react'



const SvgVintage = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  >
    
    <g>
      <path class="cls-cart" d="m74.64,19.73c-2.36-.54-4.71.93-5.25,3.29l-5.06,22.02-38.16-.35L16.98,7.91c-.3-1.18-1.07-2.19-2.14-2.78L6.49.54C4.37-.62,1.71.15.54,2.27c-1.17,2.12-.39,4.78,1.73,5.95l6.67,3.67,9.37,37.46-5.04,3.98c-.6.48-.95,1.2-.95,1.97v6.26c0,1.37,1.1,2.49,2.47,2.5l7.07.1c-.98.91-1.61,2.21-1.61,3.66,0,2.77,2.24,5.01,5.01,5.01s5.01-2.24,5.01-5.01c0-1.39-.57-2.65-1.49-3.56l33.05.46c-.68.85-1.1,1.92-1.1,3.09,0,2.77,2.24,5.01,5.01,5.01s5.01-2.24,5.01-5.01c0-1.12-.38-2.15-1.01-2.98l4.31.06h.04c1.37,0,2.48-1.1,2.5-2.47.02-1.38-1.09-2.52-2.47-2.54l-56.79-.8v-2.58l4.17-3.29c.39.12.79.19,1.22.2l45.07.42h.04c2.04,0,3.81-1.41,4.27-3.4l5.85-25.46c.54-2.36-.93-4.71-3.29-5.25Z"/>
      <path class="cls-arrow" d="m55.68,21.5h-4.08v-11.79c0-1.45-1.17-2.62-2.62-2.62h-7.85c-1.44,0-2.61,1.17-2.61,2.62v11.79h-4.08c-1.8,0-2.4,1.18-1.32,2.63l3.03,4.07c1.08,1.45,2.84,3.81,3.92,5.26l3.03,4.07c1.08,1.45,2.84,1.45,3.92,0l3.03-4.07c1.08-1.45,2.84-3.81,3.92-5.26l3.03-4.07c1.08-1.45.48-2.63-1.32-2.63Z"/>
    </g>
    
    </svg>
  
  
  
  )


export default function CartIcon({top,left,right,bottom,rotate,position,translate,width,height }) {
  const positionStyles = {
    
    top: top !== undefined ? `${top}` : 'unset',
    right: right !== undefined ? `${right}` : 'unset',
    left: left !== undefined ? `${left}` : 'unset',
    bottom: bottom !== undefined ? `${bottom}` : 'unset',
    position: position !== undefined ? `relative` : 'absolute',
    margin: position !== undefined ? `0 auto` : 'unset',
    transformOrigin: 'center',
    transform: `${rotate || ''} ${translate || ''}`, // Use 'none' as the default value if rotate is not provided
    width:width,
    height:height
  };
  return (
    <div className="cart-svg" style={positionStyles}>
        <SvgVintage/>
    </div>
  )
}
