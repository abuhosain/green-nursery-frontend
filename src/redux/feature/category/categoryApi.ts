import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategory: builder.query({
          query: () => ({
            url: "/categories",
            method: "GET",
          }),
          providesTags: ["category"],
        }),
        deleteCategory: builder.mutation({
          query: (id) => ({
            url: `/categories/${id}`,
            method: "DELETE",
          }),
          invalidatesTags: ["category"],
        }),
        createCategory: builder.mutation({
          query: (newCategory) => ({
            url: "/categories",
            method: "POST",
            body: newCategory,
          }),
          invalidatesTags: ["category"],
        }),
        updateCategory: builder.mutation({
          query: ({ id, ...updatedCategory }) => ({
            url: `/categories/${id}`,
            method: "PUT",
            body: updatedCategory,
          }),
          invalidatesTags: ["category"],
        }),
      }),
      overrideExisting: false,
})

export const {useGetAllCategoryQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation} = categoryApi;