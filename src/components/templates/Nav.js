import React from 'react';
import "./Nav.scss"
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import {useState} from "react";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Nav = () => {
    const [showMenu,setShowMenu] = useState(false);

    const handleShowMenu = (e) => {
        e.preventDefault();
        setShowMenu(prevState => !prevState);
    }

    return (
                <nav>

                    <a className="mobile-menu" onClick={handleShowMenu}><FontAwesomeIcon icon={faBars}/></a>
                    <ul className={!showMenu?"hide":""}>
                        <li>
                            <Link className='nav_link' to={"/"}>Strona główna</Link>
                        </li>
                        <li>
                            <Link className='nav_link' to={"/about"}>O nas</Link>
                        </li>
                        <li>
                            <Link className='nav_link' to={"/animals"}>Zwierzęta</Link>
                        </li>
                        <li>
                            <Link className='nav_link' to={"/contact"}>Kontakt</Link>
                        </li>
                    </ul>
                </nav>

    )
}
