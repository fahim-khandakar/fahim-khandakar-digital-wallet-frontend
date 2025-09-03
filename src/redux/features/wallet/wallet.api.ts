import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query({
      query: () => ({
        url: "/wallet/all-wallets",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
  }),
});

export const { useGetWalletsQuery, useGetMyWalletQuery } = walletApi;
