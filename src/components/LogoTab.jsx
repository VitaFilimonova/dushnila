import React from 'react';
import style from './LogoTab.module.scss'
import logo from './../images/logo.svg'

const LogoTab = () => {
    return (
        <div className={style.logoTab__container}>
            <img className={style.logoTab__img} src={logo} alt='logo'/>
        </div>
    );
};

export default LogoTab;