import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models/user/user.type';

export const api = createApi({
    reducerPath: 'adminApi',
    tagTypes: ["User"],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getUser: builder.query<IUser, string>({
            query: (id) => `general/user/${id}`,
            providesTags: ['User']
        }),
    }),
})

export const {
    useGetUserQuery
} = api;
