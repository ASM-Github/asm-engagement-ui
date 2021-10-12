import React from "react";
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link className="nav__logo" to="/">
            <i className='bx bx-layer nav__logo-icon'></i>
            <span className="nav__logo-name">ASM Engagement</span>
        </Link>
    )
}

export default Logo;