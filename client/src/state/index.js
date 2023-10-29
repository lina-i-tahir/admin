import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userDetails: {
    name: "",
    email: "",
  },

  userId: "63701cc1f03239b7f700000e", // Setting the initial user ID to an empty string
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setUserDetails: (state, action) => {
      const { name, email, picture } = action.payload;
      state.userDetails.name = name;
      state.userDetails.email = email;
      state.userDetails.picture = picture;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setMode, setUserDetails, setUserId } = globalSlice.actions;

export default globalSlice.reducer;

// export default globalSlice.reducer;

// // ori
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   mode: "dark",
//   userId: "63701cc1f03239b7f700000e",
// };

// export const globalSlice = createSlice({
//   name: "global",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },
//   },
// });

// export const { setMode } = globalSlice.actions;

// export default globalSlice.reducer;
