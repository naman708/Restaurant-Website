import { useContext } from 'react';
import CartContext from '../Cart/CartContext';
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css"


function HeaderCardButton({onClick}){
  let cartCtx = useContext(CartContext)

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );}
export default HeaderCardButton;