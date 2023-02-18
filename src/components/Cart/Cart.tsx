import classes from './Cart.module.css'
import { DUMMY_MEALS } from '../../../data/data';
import Modal from '../UI/Modal';

interface CatrProps {
  onClose: () => void
}

const Cart = ({onClose}: CatrProps) => {
  const cartItems = <ul className={classes['cart-items']}>
    {DUMMY_MEALS.slice(0, 1).map(el => <li key={el.id}>{el.name}</li>)}
  </ul>
  return ( <Modal onClose={onClose}>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>$36.6</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onClose}>Close</button>
      <button className={classes['button']}>Order</button>
    </div>
  </Modal> );
}
 
export default Cart;