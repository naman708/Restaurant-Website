import classes from './MealItem.module.css';

const MealItem = ({ name, description, price, onAdd }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      {/* Left side: meal info */}
      <div className={classes.mealInfo}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>

      {/* Right side: button */}
      <button onClick={onAdd}>Add</button>
    </li>
  );
};

export default MealItem;
