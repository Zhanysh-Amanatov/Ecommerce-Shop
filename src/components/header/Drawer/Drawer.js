import React,{ useState } from "react";
import './Drawer.scss'
import { Link } from "react-router-dom";
import Basket from "../Basket/Basket";
import { GiHamburgerMenu } from 'react-icons/gi'
 
const Drawer = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }
  return (
      <>
      <GiHamburgerMenu onClick={handleDrawer}/>
    <div className="list">
      <Link to="/" className="link" onClick={setOpenDrawer(false)}>
        Logo
      </Link>
      <Link to="/" className="link" onClick={setOpenDrawer(false)}>
        +996700700700
      </Link>
      <Link to="/" className="link" onClick={setOpenDrawer(false)}>
        <Basket />
      </Link>
    </div>
    {/* </GiHamburgerMenu> */}
    </>
  );
};

export default Drawer;
