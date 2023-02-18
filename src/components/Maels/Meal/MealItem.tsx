import { Meal } from "../AvailableMeals";
import { useCartCtx } from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";

type MealIttemProps = Meal

const MealItem = ({id, name, description, price}: MealIttemProps) => {
  const {addItem} = useCartCtx()
  const formatedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  
  const onAddItem = (amount: number) => {
    addItem({
      id,
      amount,
      price,
      name
    })
  }

  return ( <li className={classes.meal}>
    <div>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formatedPrice}</div>
    </div>
    <div>
    <MealItemForm id={id} onAddItem={onAddItem}/>
    </div>
  </li> );
}
 
export default MealItem;