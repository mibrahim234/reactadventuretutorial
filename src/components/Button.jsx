import './Button.css'
import {Link} from 'react-router-dom';

export const Button = ({
    children,
     type, 
     onClick, 
     buttonStyle, 
     buttonSize})
      => {
          const checkButtonStyle = STYLES.inclides(buttonStyle) ? buttonStyle : STYLES[0]
      };