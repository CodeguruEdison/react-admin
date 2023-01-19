
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICustomer } from 'models/customer/customer.type';
import { IUser } from 'models/user/user.type';

export const api = createApi({
    reducerPath: 'adminApi',
    tagTypes: ["User", "Customers","Products"],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

    endpoints: (builder) => ({
        getUser: builder.query<IUser, string>({
            query: (id) => `general/user/${id}`,
            providesTags: ['User']
        }),
        getProducts:builder.query<any[],void>({
            query:()=>'client/products',
            providesTags:['Products']
        }),
        getCustomers: builder.query<ICustomer[], void>({
            query: () => "client/customers",
            providesTags: ["Customers"]
        })
    }),
})

export const {
    useGetUserQuery,
    useGetCustomersQuery,
    useGetProductsQuery
} = api;
