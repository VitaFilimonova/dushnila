import React from 'react';
import style from './HappyTab.module.scss'

const HappyTab = () => {
    return (
        <div className={style.happyTab__container}>
            <h1 className={style.happyTab__header}>Душнила доволен вами </h1>

            <p className={style.happyTab__description}>Все показатели в норме</p>
            {/*<p>`СО2 превышает норму`</p>*/}
        </div>
    );
};

export default HappyTab;