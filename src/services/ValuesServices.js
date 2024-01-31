import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setError, setLoading} from "../store/reducers/ValuesSlice";

export const valuesApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://dushnila.gooddelo.com'}),
    endpoints: (build) => ({
        getValues: build.query({
            query: () => `/data9'`,
            pollingInterval: 60000,
            onQueryStarted: async (arg, { dispatch }) => {
                dispatch(setLoading(true));
            },
            onError: (error, { dispatch }) => {
                dispatch(setError(error));
            },

        }),
    }),
})

export const {useGetValuesQuery} = valuesApi