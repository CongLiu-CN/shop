import React from "react";
import { Link } from "react-router-dom";

/* connect is a High Order Component, which enable component to have access to redux */
import { connect } from "react-redux";

/* a new type of selector */
import { createStructuredSelector } from "reselect";

/* import auth from firebase, to enable users to signout */
import { auth } from "../../firebase/firebase.utils";

/* This is a special syntax in React for importing SVG. Next lesson will explain how this works */
import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {/* conditionally render a sign-out button if the user is signed in, or vice versa.*/}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

/* this result will be passed into Header component */
export default connect(mapStateToProps)(Header);
