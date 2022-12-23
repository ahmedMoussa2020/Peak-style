import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import "../styles/Navigation.styles.scss";
import { UserContext } from "../contexts/User_context";
import { signOutUser } from "../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
