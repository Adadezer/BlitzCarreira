import React from 'react';
import './css/Button.css'
const Button = ({children, onClick}) => {
  return ( 
    <button onClick={onClick} className='button-add'>
      {children}
    </button>
  );
}
 
export default Button;