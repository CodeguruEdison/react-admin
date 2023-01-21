import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPagination } from 'models/common/common.type'
import { ICustomer } from 'models/customer/customer.type'
import { IUser } from 'models/user/user.type'
import { IProduct } from 'scenes/products/product.type'
import { ITransactionResponse } from 'scenes/transactions/transaction.type'

export const api = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Customers', 'Products', 'Transactions'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  endpoints: (builder) => ({
    getUser: builder.query<IUser, string>({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProducts: builder.query<IProduct[], void>({
      query: () => 'client/products',
      providesTags: ['Products'],
    }),
    getCustomers: builder.query<ICustomer[], void>({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
    getTransactions: builder.query<ITransactionResponse, IPagination>({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort: JSON.stringify(sort), search },
      }),
      providesTags: ['Transactions'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetCustomersQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} = api
