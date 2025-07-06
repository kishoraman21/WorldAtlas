import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Headers() {
    const [isActive, setIsActive] = useState(false);

    const handleButtonToggle = () => {
        // const nav = document.querySelector("nav");
        // nav.classList.toggle("active");
        return setIsActive(!isActive);
    }
    return (

        <header>
            <div className="container">
                <div className="grid navbar-grid" >
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WorldAtlas</h1>
                        </NavLink>

                    </div>

                    <nav className={isActive ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="about">About</NavLink></li>
                            <li><NavLink to="country">Country</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>

                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}