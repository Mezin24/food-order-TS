import classes from './CartItem.module.css';


interface CartItemProps {
  price: number,
  name: string,
  amount: number,
  onRemove:  () => void
  onAdd: () => void
}

const CartItem = ({price, amount, name, onRemove,onAdd}: CartItemProps) => {
  const formatedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formatedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
