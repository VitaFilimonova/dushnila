import React from 'react';
import style from "./DaysTab.module.scss"
import arrow from './../images/arrow_right.svg'

const DaysTab = () => {
    return (
        <div className={style.days__container}>
            <h4 className={style.days__header}>Дней без душноты 0</h4>
            <button className={style.days__button}>История
                <img src={arrow} alt='arrow'/>
            </button>
        </div>
    );
};

export default DaysTab;