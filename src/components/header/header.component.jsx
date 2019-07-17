import React from "react";
import { Link } from "react-router-dom";

/* import auth from firebase, to enable users to signout */
import { auth } from "../../firebase/firebase.utils";

/* This is a special syntax in React for importing SVG. Next lesson will explain how this works */
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
