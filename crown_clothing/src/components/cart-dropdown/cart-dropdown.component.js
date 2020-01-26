import React from "react";

import CustomButon from "../custom-button/custon-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButon>GO TO CHECKOUT</CustomButon>
    </div>
  </div>
);

export default CartDropdown;
