import classes from  './Header.module.css'
import mainImg from '../../assets/meals.jpg'
import Button from '../UI/Button';

interface HeaderProps {
  showModal: () => void
}

const Header = ({showModal}: HeaderProps) => {
  return ( <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <Button onOpen={showModal} />
    </header>
    <div className={classes['main-image']}>
    <img src={mainImg} alt="meal" />
    </div>
  </> );
}
 
export default Header;