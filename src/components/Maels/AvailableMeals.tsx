import MealItem from './Meal/MealItem';
import {DUMMY_MEALS} from '../../../data/data'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';

export interface Meal {
  id: string;
  name: string;
  description?: string;
  price: number;
}

const AvailableMeals = () => {
  const content = DUMMY_MEALS.map(meal => <MealItem key={meal.id} {...meal} /> )
  
  return ( <section className={classes.meals}>
    <Card>
    <ul>
      {content}
    </ul>
    </Card>
  </section> );
}
 
export default AvailableMeals;