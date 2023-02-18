import classes from './Button.module.css'
import {ReactComponent as CartIcon} from '../../assets/icons/cart.svg'
import { useCartCtx } from '../../store/cart-context'

interface ButtonProps {
  onOpen: () => void
}

const Button = ({onOpen}: ButtonProps) => {
  const {items} = useCartCtx()
  
  return ( <button className={classes.button} onClick={onOpen}>
    <span className={classes.icon}><CartIcon/></span>
    <span>Your cart</span>
    <span className={classes.badge}>{items.length}</span>
  </button> );
}
 
export default Button;