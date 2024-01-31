import React from 'react';
import style from './HappyTab.module.scss'
import {useSelector} from "react-redux";

const HappyTab = () => {
    const {tempError, co2Error} = useSelector((state) => state.valuesReducer);

    let messageHeader;
    // eslint-disable-next-line no-unused-expressions
    (co2Error || tempError) ? messageHeader = 'Душнила не доволен вами' : messageHeader = 'Душнила доволен вами'

    let messageDescription;
    if (co2Error && tempError) {
        messageDescription = "Температура и CO2 превышают норму";
    } else if (co2Error) {
        messageDescription = "CO2 превышает норму";
    } else if (tempError) {
        messageDescription = "Температура превышает норму";
    } else {
        messageDescription = "Все показатели в норме";
    }

    return (
        <div
            className={`${style.happyTab__container} ${(co2Error || tempError) ? style.happyTab__container_alarm : ''}`}>
            <h1 className={style.happyTab__header}>{messageHeader}</h1>
            <p className={style.happyTab__description}>{messageDescription}</p>
        </div>
    );
};

export default HappyTab;