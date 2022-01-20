import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo-dark.svg' : 'assets/layout/images/logo-white.svg'} alt="logo"/>
                <span>Cavaquinho</span>
            </Link>


                <ul className={classNames("layout-topbar-menu lg:flex origin-top")}>
                    <li>
                        <Link to="/cadastro" className="p-link layout-topbar-button">
                            <i className="pi pi-user"/>
                            <span>Profile</span>
                        </Link>
                    </li>
                </ul>
        </div>
    );
}
