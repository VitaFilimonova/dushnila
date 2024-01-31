import {configureStore} from '@reduxjs/toolkit'
import {valuesSlice} from "./reducers/ValuesSlice";
import {valuesApi} from "../services/ValuesServices";

export const store = configureStore({
    reducer: {
        [valuesApi.reducerPath]: valuesApi.reducer,
        valuesReducer: valuesSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(valuesApi.middleware),
})
