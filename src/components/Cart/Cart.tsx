import classes from './Cart.module.css'
import { DUMMY_MEALS } from '../../../data/data';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useCartCtx } from '../../store/cart-context';

interface CatrProps {
  onClose: () => void
}

const Cart = ({onClose}: CatrProps) => {
 const {items, addItem, removeItem, totalAmount} = useCartCtx()

  const content = <ul className={classes['cart-items']}>
    {items.map(item => (
      <CartItem 
        key={item.id}
        name={item.name} 
        price={item.price} 
        amount={item.amount} 
        onAdd={addItem.bind(null, {...item, amount: 1})}
        onRemove={removeItem.bind(null, item.id)}
        />))}
  </ul>
  return ( <Modal onClose={onClose}>
    {content}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>${totalAmount.toFixed(2)}</span>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={onClose}>Close</button>
      {items.length > 0 && <button className={classes['button']}>Order</button>}
    </div>
  </Modal> );
}
 
export default Cart;

