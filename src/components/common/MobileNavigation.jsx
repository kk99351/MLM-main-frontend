import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, NavLink } from "react-router-dom";
import UserNav from "@/views/account/components/UserAvatar";
import { BasketToggle } from "@/components/basket";
import Badge from "./Badge";
import {
  HOME,
  SIGNIN,
  SHOP,
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
} from "@/constants/routes";

const MobileNavigation = (props) => {
  const { isAuthenticating, basketLength, disabledPaths, user } = props;
  const { pathname } = useLocation();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="mobile-navigation">
      <div className="mobile-navigation-main">
        <div className="mobile-navigation-logo">
          <Link onClick={onClickLink} to={HOME}>
            <h2>EarthBound</h2>
          </Link>
        </div>

        <BasketToggle>
          {({ onClickToggle }) => (
            <button
              className="button-link navigation-menu-link basket-toggle"
              onClick={onClickToggle}
              disabled={disabledPaths.includes(pathname)}
              type="button"
            >
              <Badge count={basketLength}>
                <i
                  className="fa fa-shopping-bag"
                  style={{ fontSize: "2rem" }}
                />
              </Badge>
            </button>
          )}
        </BasketToggle>
        <ul className="mobile-navigation-menu">
          {user ? (
            <li className="mobile-navigation-item">
              <UserNav />
            </li>
          ) : (
            <>
              {pathname !== SIGNIN && (
                <li className="mobile-navigation-item">
                  <Link
                    className="navigation-menu-link"
                    onClick={onClickLink}
                    to={SIGNIN}
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </>
          )}
        </ul>
        {drawerVisible ? (
          <button className="drawer-close" onClick={closeDrawer}>
            <div className="close-button" onClick={toggleDrawer}>
              ✕
            </div>
          </button>
        ) : (
          <button className="menu-icon" onClick={toggleDrawer}>
            <div className="menu-icon">☰</div>
          </button>
        )}
      </div>

      {/* Drawer Content */}
      {drawerVisible && (
        <div className="drawer">
          <div className="drawer-content">
            {/* Add your drawer content here, such as additional navigation links */}
            <ul className="navigation-menu-main-mobile">
              <li onClick={closeDrawer}>
                <NavLink
                  activeClassName="navigation-menu-active"
                  exact
                  to={HOME}
                >
                  Home
                </NavLink>
              </li>
              <li onClick={closeDrawer}>
                <NavLink activeClassName="navigation-menu-active" to={SHOP}>
                  Shop
                </NavLink>
              </li>
              <li onClick={closeDrawer}>
                <NavLink
                  activeClassName="navigation-menu-active"
                  to={FEATURED_PRODUCTS}
                >
                  Mens
                </NavLink>
              </li>
              <li onClick={closeDrawer}>
                <NavLink
                  activeClassName="navigation-menu-active"
                  to={RECOMMENDED_PRODUCTS}
                >
                  Womens
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

MobileNavigation.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  basketLength: PropTypes.number.isRequired,
  disabledPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default MobileNavigation;
