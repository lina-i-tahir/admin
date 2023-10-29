import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "ProductStats",
    "Suppliers",
    "Sales",
    "Admins",
    "Performance",
    "Dashboard",
  ],

  // endpoints: (build) => ({
  //   getUserByEmail: build.query({
  //     query: async (email) => {
  //       // Assuming Google OAuth is used to get the user information
  //       const credentialResponse = await GoogleOAuthProvider.getCredential(); // Use the appropriate method to get the user's OAuth credential
  //       const userDetails = jwtDecode(credentialResponse.credential);

  //       // Modify the API call based on your backend endpoint for user information by email
  //       const response = await fetch(`general/user/${email}`);
  //       return response.json();
  //     },
  //     providesTags: ["User"],
  //   }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

    // getProducts: build.query({
    //   query: ({ page, pageSize, sort, search }) => ({
    //     url: "client/products",
    //     method: "GET",
    //     params: { page, pageSize, sort, search },
    //   }),
    //   providesTags: ["Products"],
    // }),

    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),

    getProductStats: build.query({
      query: (ProductID) => `client/products/${ProductID}`,
      providesTags: ["ProductStats"],
    }),

    getSuppliers: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/suppliers",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Suppliers"],
    }),

    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  // useGetUserByEmailQuery,

  useGetUserQuery,
  useGetProductsQuery,
  useGetProductStatsQuery,
  useGetSuppliersQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
