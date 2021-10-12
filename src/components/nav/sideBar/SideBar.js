import React from "react";
import { Fragment } from "react";

import Items from './SidebarItem';
import Header from './Header';
import Logo from './Logo';
import './sidebar.css'

const SideBar = ({ children }) => {
    return (
        <Fragment>
            <div id="body-pd" className="main-body">
                <Header />
                <div className="l-navbar" id="nav-bar">
                    <nav className="nav">
                        <div>
                            <Logo />
                            <div className="nav__list">
                                <Items name="Dashboard" icon="bx bx-grid-alt" route="/dashboard" />
                                <Items name="User" icon="bx bx-user" route="/user" />
                                <Items name="Fellow" icon="bx bx-id-card" route="/fellow" />
                                <Items name="Program" icon="bx bx-pie-chart" route="/program" />
                                <Items name="Activity" icon="bx bx-trophy" route="/activity" />
                            </div>
                        </div>
                        <Items name="Log Out" icon="bx bx-log-out" />
                    </nav>
                </div>
                <div style={{ padding: 0 }}>
                    {children}
                </div>
            </div>
        </Fragment>
    );
};

export default SideBar;