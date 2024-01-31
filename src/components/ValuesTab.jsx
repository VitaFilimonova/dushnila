import React, {useEffect} from 'react';
import style from './ValuesTab.module.scss'
import {useGetValuesQuery} from "../services/ValuesServices";
import {useDispatch, useSelector} from "react-redux";
import {setError, setLoading, updateValues} from "../store/reducers/ValuesSlice";

const ValuesTab = () => {
    const {data, error, isLoading} = useGetValuesQuery(undefined, {
        pollingInterval: 2000,
    });
    const dispatch = useDispatch();
    const {co2, temp, tempError, co2Error} = useSelector((state) => state.valuesReducer);

    useEffect(() => {
        if (data) {
            dispatch(updateValues(data));
        }
        dispatch(setLoading(isLoading));
        dispatch(setError(error));
    }, [data, isLoading, error, dispatch]);
    
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