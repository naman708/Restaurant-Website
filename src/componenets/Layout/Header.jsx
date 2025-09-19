
import classes from "./Header.module.css"

import HeaderCartButton from "./HeaderCartButton";

function Header({onShowCart}){
 return(
 <>
 <header className={classes.header}>
    <h1>React Meals</h1>
    <HeaderCartButton onClick={onShowCart}/>
 </header>
 <div className={classes['main-image']}>
  <img src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" />
 </div>
 </>
 )

}
export default Header;