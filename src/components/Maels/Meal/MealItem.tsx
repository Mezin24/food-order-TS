import { Meal } from "../AvailableMeals";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
type MealIttemProps = Meal

const MealItem = ({id, name, description, price}: MealIttemProps) => {
  const formatedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
  
  return ( <li className={classes.meal}>
    <div>
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{formatedPrice}</div>
    </div>
    <div>
    <MealItemForm id={id}/>
    </div>
  </li> );
}
 
export default MealItem;