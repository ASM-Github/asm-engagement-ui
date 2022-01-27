import React, { Fragment } from 'react';
import './layout.css';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className="box-wrapper">
                <div className="box-inner">
                    {children}
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;