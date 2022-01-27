import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DATA from './DATA';
import NavItems from './NavItems';
import { signout } from '../../auth/Login/helpers';
import '../../assets/css/sidebar.css'

function Sidebar({ children }) {
    let navigate = useNavigate();
    // hook change styles
    const [sidebar, setSidebar] = useState(true);
    // true false by clicking button
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div id="body-pd" className={
                sidebar ? ('main-body') : ('main-body body-pd')
            }>
                <header className={
                    sidebar ? ('header') : ('header body-pd')
                } >
                    <div className="header__toggle">
                        <i className={
                            sidebar ? ('bx bx-menu') : ('bx bx-x')
                        } id="header-toggle" onClick={showSidebar}></i>
                    </div>

                    <div className="header__img">
                        <img src="assets/img/perfil.jpg" alt="" />
                    </div>
                </header>

                <div className={
                    sidebar ? ('l-navbar') : ('l-navbar show')
                }>
                    <nav className="asm-nav">
                        <div>
                            <a href="/dashboard" className="nav__logo">
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className="nav__logo-name">ASM Engagement</span>
                            </a>
                            <div className="nav__list">
                                {
                                    DATA.map(data => (
                                        <NavItems
                                            key={data.name}
                                            route={data.route}
                                            icon={data.icon}
                                            name={data.name} />
                                    ))
                                }
                            </div>
                        </div>

                        <a href="/" className="nav__link" onClick={() => {
                            signout(() => {
                                navigate('/');
                            });
                        }}>
                            <i className='bx bx-log-out nav__icon' ></i>
                            <span className="nav__name">Log Out</span>
                        </a>
                    </nav>
                </div>
                <div style={{ padding: 0 }} className="cs-main pt-4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Sidebar;
