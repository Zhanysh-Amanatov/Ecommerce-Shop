import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Categories.js/Dropdown";
import SearchBar from "./Search/SearchBar";
import Basket from "./Basket/Basket";
import SignInSignUp from "./SignIn|SignUp/SignInSignUp";
// import Drawer from './Drawer/Drawer'
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const mediaQuery = window.matchMedia("(max-width:400px)");
  useEffect(() => {
    handleMediaQueryChange(mediaQuery);
  });
  const handleMediaQueryChange = () => {
    if (mediaQuery.matches) {
      handleDrawer(true);
    } else {
      handleDrawer(false);
    }
  };
  //  const isMobile = () =>{
  //     if(window.screen.width && window.screen.height < 400)
  //    <Drawer/>}

  return (
    <>
      {/* {mediaQuery.matches ? (<Drawer/>) :( */}

      <div className="header">
        <Link to="/" className="link">
          Logo
        </Link>
        <Link to="" className="link">
          <Dropdown />
        </Link>
        <SearchBar />
        <Link to="/" className="link">
          +996700700700
        </Link>
        <Link to="/basket" className="link">
          <Basket />
        </Link>
        <Link to="/profileInfo" className="link">
          <SignInSignUp />
        </Link>
      </div>
      {/* )} */}
    </>
  );
};

export default Header;
