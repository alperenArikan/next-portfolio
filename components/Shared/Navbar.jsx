import React,{useState} from 'react';
import MenuLayer from "./MenuLayer"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from "next/link"
const NavbarComponent = () => {
const [toggle,setToggle] = useState(false);

const handleMenuToggle = ()=>{
    setToggle(!toggle);

}


const NavBrand = () =>
  <Link href="/">
    <a  className="navbar__brand noselect">Alperen Arıkan</a>
  </Link>

const ToggleButton = ()=>{
    return <span  onClick={handleMenuToggle} className={`toggle-container ${toggle ? "opened" : ""} `}>
        <span className="toggle-container-span"></span>
        <span className="toggle-container-span"></span>
        <span className="toggle-container-span"></span>
    </span>
}

    return (
        <div className="index">
            <nav className="navbar absolute">
                <NavBrand />
                <ToggleButton />
                {toggle ? <MenuLayer setToggle={setToggle} toggle={toggle} /> : ""}
            </nav>
        </div>
    );
}

export default NavbarComponent;
