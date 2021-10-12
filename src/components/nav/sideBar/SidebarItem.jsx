import React from "react";
import { NavLink } from 'react-router-dom'

function Items(props) {
    return (
        <>
            <NavLink to={props.route || '/errorpage'} className={props.active + " nav__link"} >
                <i className={props.icon + " nav__icon"}  ></i>
                <span className="nav__name">{props.name}</span>
            </NavLink >
        </>

    )
}

export default Items;