// src/redux/feature/product/productApi.ts
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params: params,
      }),
      providesTags: ["product"],
    }),
    createProduct : builder.mutation({
      query : ({ ...createdProductData}) => ({
        url : `/products`,
        method : "POST",
        body : createdProductData
      }),
      invalidatesTags: () => [{ type: 'product' }],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    updateProduct : builder.mutation({
      query : ({id, ...updatedProduct}) => ({
        url : `/products/${id}`,
        method: "PUT",
        body : updatedProduct
      }),
      invalidatesTags: ( { id }) => [{ type: 'product', id }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ( id) => [{ type: 'product', id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useDeleteProductMutation, useUpdateProductMutation, useCreateProductMutation } = productsApi;
