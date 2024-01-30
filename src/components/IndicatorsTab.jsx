import React from 'react';
import style from './IndicatorsTab.module.scss'
const IndicatorsTab = () => {
    return (
        <div className={style.indicatorsTab__container}>
            <div>
                <h1 className={style.indicatorsTab__header}>{700} &#176;C</h1>
                <p className={style.indicatorsTab__description}>Температура</p>
            </div>


            <h1 className={style.indicatorsTab__header}>{700} ppm</h1>
            <p className={style.indicatorsTab__description}>CO2</p>
        </div>
    );
};

export default IndicatorsTab;