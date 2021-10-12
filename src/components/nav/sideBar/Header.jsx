import React from "react";

function Header() {
    return (
        <header className="header" id="header">
            <div className="header__toggle">
                <i className='bx bx-menu' id="header-toggle"></i>
            </div>

            <div className="header__img">
                <img src="assets/img/perfil.jpg" alt="" />
            </div>
        </header>
    )
}

export default Header;