import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {setError, updateValues} from "../store/reducers/ValuesSlice";

export const valuesApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://dushnila.gooddelo.com'}),
    endpoints: (build) => ({
        getValues: build.query({
            query: () => `/data`,
            pollingInterval: 60000,
            onQueryStarted: async (args, {queryFulfilled, dispatch}) => {
                try {
                    const response = await queryFulfilled;
                    // Обновление значений в Redux Store
                    dispatch(updateValues(response.data));
                } catch (error) {
                    // Обработка ошибок запроса
                    const errorInfo = {
                        status: error.error.status,
                        originalStatus: error.error.originalStatus,
                    };
                    dispatch(setError(errorInfo));
                }
            }
        }),
    }),
})

export const {useGetValuesQuery} = valuesApi;