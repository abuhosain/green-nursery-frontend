import { Order, CreateOrderPayload } from "../../../types";
import { baseApi } from "../../api/baseApi";


const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, CreateOrderPayload>({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["order"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = orderApi;
