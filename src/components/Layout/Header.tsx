import { Fragment } from "react";
import HeaderCartButton from './HeaderCartButton';

import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';

type Props = {
  onShowCart: () => void;
}

const Header = ({onShowCart}:Props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="header-img" />
      </div>
    </Fragment>
  );
};

export default Header;
