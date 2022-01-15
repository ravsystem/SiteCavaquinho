import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';

// import { Dashboard } from './components/Dashboard';
// import { ButtonDemo } from './components/ButtonDemo';
// import { ChartDemo } from './components/ChartDemo';
// import { Documentation } from './components/Documentation';
// import { FileDemo } from './components/FileDemo';
// import { FloatLabelDemo } from './components/FloatLabelDemo';
// import { FormLayoutDemo } from './components/FormLayoutDemo';
// import { InputDemo } from './components/InputDemo';
// import { ListDemo } from './components/ListDemo';
// import { MenuDemo } from './components/MenuDemo';
// import { MessagesDemo } from './components/MessagesDemo';
// import { MiscDemo } from './components/MiscDemo';
// import { OverlayDemo } from './components/OverlayDemo';
// import { MediaDemo } from './components/MediaDemo';
// import { PanelDemo } from './components/PanelDemo';
// import { TableDemo } from './components/TableDemo';
// import { TreeDemo } from './components/TreeDemo';
// import { InvalidStateDemo } from './components/InvalidStateDemo';
// import { BlocksDemo } from './components/BlocksDemo';
// import { IconsDemo } from './components/IconsDemo';

import { Crud } from './pages/Crud';
import { EmptyPage } from './pages/EmptyPage';
import { TimelineDemo } from './pages/TimelineDemo';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/layout/flags/flags.css';
import './assets//layout/layout.scss';
import './App.scss';

const App = () => {

    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;


    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames({
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === true,
        'layout-theme-light': layoutColorMode === 'light'
    });

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>

            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick}s />

            <div className="layout-main-container">
                <div className="layout-main">
                    

                </div>
                <AppFooter layoutColorMode={layoutColorMode} />
            </div>

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;
