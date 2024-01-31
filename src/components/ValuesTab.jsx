import React from 'react';
import style from './ValuesTab.module.scss'
import {useSelector} from "react-redux";

const ValuesTab = () => {
    const {co2, temp, tempError, co2Error} = useSelector((state) => state.valuesReducer);

    return (
        <div
            className={`${style.valuesTab__container} ${co2Error || tempError ? style.valuesTab__container_alarm : ''}`}>
            <div className={style.valuesTab__value}>
                <h1 className={style.valuesTab__header}>{temp} &#176;C</h1>
                <p className={style.valuesTab__description}>Температура</p>
            </div>
            <div className={style.valuesTab__value}>
                <h1 className={style.valuesTab__header}>{co2} ppm</h1>
                <p className={style.valuesTab__description}>CO2</p>
            </div>
        </div>
    );
};

export default ValuesTab;