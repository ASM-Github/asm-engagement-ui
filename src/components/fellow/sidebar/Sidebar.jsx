import React, { useState } from 'react';
import ASMlogo from '../../../assets/images/logo/asm1667.png'
import items from './DATA';
import SidebarContent from './SidebarContent';
import '../../../assets/css/fellow-sidebar.css'
function Sidebar({ children }) {
    const [sidebar, setSidebar] = useState(true);

    const showSideBar = () => setSidebar(!sidebar);
    return (
        <>
            <div id="body-pd" onClick={showSideBar} className={
                sidebar ? ('sidebar close') : ('sidebar')
            }>
                <div className="logo-details">
                    <i className='bx bxl-nodejs'></i>
                    <span className="logo_name">ASM</span>
                </div>
                <ul className="nav-links">
                    {items && <SidebarContent items={items} />}
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content bg-white">
                    <i className='bx bx-menu' onClick={showSideBar}></i>
                    <span className="text">
                        <img src={ASMlogo} alt="asmlogo" height="50px"
                            className="pe-4" />
                        Akademi Sains Malaysia
                    </span>
                </div>
                {children}
            </section>

        </>
    )
}

export default Sidebar
