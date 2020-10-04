import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    const clicked = (e) => {
        console.log(`${e.target.getAttribute("name")} button has been clicked!`)
    }

    return (
        <div className={classes.Nav}>
            <ul className={classes.list}>
                <li name="home" onClick={clicked}>Home</li>
                <li name="about" onClick={clicked}>About</li>
                <li name="contact" onClick={clicked}>Contact</li>
            </ul>
        </div>
    );
}

export default Nav;