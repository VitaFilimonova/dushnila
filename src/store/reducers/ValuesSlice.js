import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    temp: 0,
    co2: 0,
    tempError: false,
    co2Error: false,
    isLoading: false,
    error: null
}
export const valuesSlice = createSlice({
    name: 'values',
    initialState,
    reducers: {
        updateValues: (state, action) => {
            // Заменяем текущее состояние новыми данными
            state.temp = parseFloat(action.payload.temp);
            state.co2 = Math.ceil(action.payload.co2);
            if (!isNaN(state.temp)) {
                // Округляем temp до одного знака после запятой
                state.temp = state.temp.toFixed(1);
            }
            state.temp > 27
                ? state.tempError = true
                : state.tempError = false

            state.co2 > 800
                ? state.co2Error = true
                : state.co2Error = false

        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export const {updateValues, setError, setLoading} = valuesSlice.actions;
export default valuesSlice.reducer