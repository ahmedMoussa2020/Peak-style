import { React, useContext } from "react";
import "../styles/CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/Cart_context";


const CartIcon = () => {
  const {setIsCartOpen} = useContext(CartContext)
  
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
