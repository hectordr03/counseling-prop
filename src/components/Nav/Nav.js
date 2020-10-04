import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <ul className={classes.list}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Nav;