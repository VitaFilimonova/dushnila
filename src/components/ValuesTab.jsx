import React from 'react';
import style from './ValuesTab.module.scss'
import {useSelector} from "react-redux";

const ValuesTab = () => {
    const {co2, temp, tempError, co2Error} = useSelector((state) => state.valuesReducer);

    return (
        <div
            className={`${style.valuesTab__container} ${co2Error || tempError ? style.valuesTab__container_alarm : ''}`}>
            {/*<div className={style.valuesTab__value}>*/}
            {/*    <h1 className={style.valuesTab__header}>{temp} &#176;C</h1>*/}
            {/*    <p className={style.valuesTab__description}>Температура</p>*/}
            {/*</div>*/}
            <div className={style.valuesTab__value}>
                {/*<h1 className={style.valuesTab__header}>{co2} ppm</h1>*/}
                {/*<p className={style.valuesTab__description}>CO2</p>*/}
                {/*<div style{{"display":"flex"}}>*/}


                <a href="https://t.me/vitafilimonova">Открыть чат в Telegram</a>
                <a href="skype:live:redkozubov_egor?call">Открыть чат в Skype</a>
                <a href="https://wa.me/7927294" target="_blank" rel="noreferrer">
                    {/*<img src="whatsapp_button_image.jpg" alt="WhatsApp" width="100" height="100">*/}
                Whatsapp
                </a>
                <a href="tel:+79376536070">Позвонить</a>
            {/*</div></div>*/}
                </div>
        </div>
    );
};

export default ValuesTab;