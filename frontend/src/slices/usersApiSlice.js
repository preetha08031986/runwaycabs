import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';
const ADMIN_URL = '/api/admin';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/registration`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})
export const { useLoginMutation } = userApiSlice;
export const {adminLoginMutation} = adminApiSlice;