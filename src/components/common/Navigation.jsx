import { FilterOutlined, ShoppingOutlined } from "@ant-design/icons";
import * as ROUTE from "@/constants/routes";
import logo from "@/images/logo-full.png";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserAvatar from "@/views/account/components/UserAvatar";
import BasketToggle from "../basket/BasketToggle";
import Badge from "./Badge";
import FiltersToggle from "./FiltersToggle";
import MobileNavigation from "./MobileNavigation";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const scrollHandler = () => {
    if (navbar.current && window.innerWidth > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add("is-nav-scrolled");
      } else {
        navbar.current.classList.remove("is-nav-scrolled");
      }
    }
  };

  const resizeHandler = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
  ];

  if (store.user && store.user.role === "ADMIN") {
    return null;
  }

  if (isMobile) {
    return (
      <MobileNavigation
        {...store}
        disabledPaths={basketDisabledpathnames}
        pathname={pathname}
      />
    );
  }

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  const handleMouseEnter1 = () => {
    setShow1(true);
  };

  const handleMouseLeave1 = () => {
    setShow1(false);
  };
  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link onClick={onClickLink} to="/">
          <img alt="Logo" src={logo} />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <NavLink
            activeClassName="navigation-menu-active"
            exact
            to={ROUTE.HOME}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>
            Shop
          </NavLink>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.FEATURED_PRODUCTS}
          >
            Mens
          </NavLink>
        </li>

        <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <NavLink
            activeClassName="navigation-menu-active"
            to={ROUTE.RECOMMENDED_PRODUCTS}
          >
            Womens
          </NavLink>
        </li>
      </ul>
      {show && (
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "9%",
            width: "80%",
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <h2>SHOP BY CATEGORY</h2>
            </div>
            <div>
              <h2>SHOP BY SUB CATEGORY</h2>
            </div>
            <div
              style={{
                width: 200,
                height: 300,
              }}
            >
              <img
                style={{
                  height: 300,
                  padding: 10,
                }}
                src="https://th.bing.com/th/id/OIP.1Da7pJJda2K1V1vJtBQ5qAHaLH?rs=1&pid=ImgDetMain"
              ></img>
            </div>
            <div
              style={{
                width: 200,
                height: 280,
              }}
            >
              <img
                style={{
                  height: 300,
                  padding: 10,
                }}
                src="https://th.bing.com/th/id/OIP.1Da7pJJda2K1V1vJtBQ5qAHaLH?rs=1&pid=ImgDetMain"
              ></img>
            </div>
          </div>
        </div>
      )}

      {show1 && (
        <div
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
          style={{
            position: "absolute",
            top: "80%",
            left: "9%",
            width: "80%",
            height: 300,
            backgroundColor: "#fff",
            borderRadius: 5,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <h2>SHOP BY CATEGORY</h2>
            </div>
            <div>
              <h2>SHOP BY SUB CATEGORY</h2>
            </div>
            <div
              style={{
                width: 200,
                height: 300,
              }}
            >
              <img
                style={{
                  height: 300,
                  padding: 10,
                }}
                src="https://th.bing.com/th/id/OIP.ciquOhtTTgmcBZ71ExrKbgHaIi?rs=1&pid=ImgDetMain"
              ></img>
            </div>
            <div
              style={{
                width: 200,
                height: 280,
              }}
            >
              <img
                style={{
                  height: 300,
                  padding: 10,
                }}
                src="https://th.bing.com/th/id/OIP.ciquOhtTTgmcBZ71ExrKbgHaIi?rs=1&pid=ImgDetMain"
              ></img>
            </div>
          </div>
        </div>
      )}

      {(pathname === ROUTE.SHOP || pathname === ROUTE.SEARCH) && (
        <FiltersToggle>
          <button className="button-muted button-small" type="button" style={{margin: '1rem'}}>
            Filters &nbsp;
            <FilterOutlined />
          </button>
        </FiltersToggle>
      )}

      <SearchBar />

      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledpathnames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >
                <Badge count={store.basketLength}>
                  <ShoppingOutlined style={{ fontSize: "2.4rem" }} />
                </Badge>
              </button>
            )}
          </BasketToggle>
        </li>
        {store.user ? (
          <li className="navigation-menu-item">
            <UserAvatar />
          </li>
        ) : (
          <li className="navigation-action">
            {/* {pathname !== ROUTE.SIGNUP && (
              <Link
                className="button button-small"
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
                Sign Up
              </Link>
            )} */}
            {pathname !== ROUTE.SIGNIN && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Sign In
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
