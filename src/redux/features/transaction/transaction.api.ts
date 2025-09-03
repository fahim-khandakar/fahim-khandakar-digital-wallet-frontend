import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTransaction: builder.mutation({
      query: (userInfo) => ({
        url: "/transaction/create-transaction",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),

    getTransactions: builder.query({
      query: () => ({
        url: "/transaction/all-transactions",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    getMyTransactions: builder.query({
      query: () => ({
        url: "/transaction/my-transactions",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useCreateTransactionMutation,
  useGetTransactionsQuery,
  useGetMyTransactionsQuery,
} = transactionApi;
