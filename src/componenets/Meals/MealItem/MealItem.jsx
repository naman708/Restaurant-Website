import classes from './MealItem.module.css';
import CartContext from '../../Cart/CartContext';
import { useContext } from 'react';
const MealItem = ({id,name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)
  return (
    <li className={classes.meal}>
      {/* Left side: meal info */}
      <div className={classes.mealInfo}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>

      {/* Right side: button */}
      <button onClick={()=>cartCtx.addItem({id,name,description,price,amount:1})}>Add</button>
    </li>
  );
};

export default MealItem;
