import classes from './Button.module.css'
import {ReactComponent as CartIcon} from '../../assets/icons/cart.svg'

interface ButtonProps {
  onOpen: () => void
}

const Button = ({onOpen}: ButtonProps) => {
  return ( <button className={classes.button} onClick={onOpen}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your cart</span>
    <span className={classes.badge}>3</span>
  </button> );
}
 
export default Button;