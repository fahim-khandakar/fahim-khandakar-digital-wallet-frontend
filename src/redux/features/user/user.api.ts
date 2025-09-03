import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (userInfo) => ({
        url: "/user/all-users",
        data: userInfo,
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const { useGetAllUserQuery } = userApi;
