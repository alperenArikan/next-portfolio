import React from 'react';
import Link  from "next/link"
const MenuLayer = ({toggle, setToggle}) => {
    return (
        <div className={`menu-layer ${toggle ? "show": ""}` }>
            <div className="menu-layer-menu">
                <ul className="menu-layer-ul">
                    <li className="menu-layer-list">
                        <Link href="/" className="menu-layer-link" >
                            <a onClick={()=> setToggle()} className="menu-layer-link noselect">deneme</a>
                        </Link>
                    </li>
                    <li className="menu-layer-list">
                        <Link href="/" className="menu-layer-link">
                            <a onClick={()=> setToggle()} className="menu-layer-link noselect">deneme</a>
                        </Link>
                    </li>
                    <li className="menu-layer-list" >
                        <Link href="/" className="menu-layer-link">
                            <a onClick={()=> setToggle()} className="menu-layer-link noselect">deneme</a>
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default MenuLayer;
