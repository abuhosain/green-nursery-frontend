// src/redux/feature/product/productApi.ts
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: '/products',
        method: 'GET',
        params: params,
      }),
      providesTags: ["product"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = productsApi;
