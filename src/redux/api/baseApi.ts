// api/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://green-nursery-backend.vercel.app/api' }),
  tagTypes: ['product', "category", "order"],
  endpoints: () => ({}),
});
