import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
// import { useGetUserByEmailQuery } from "state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Grab userId from Redux Toolkit's state
  const userId = useSelector((state) => state.global.userId);
  // const userEmail = useSelector((state) => state.global.userEmail);

  // Fetch user data
  const { data, error, isLoading } = useGetUserQuery(userId);
  // const { data, error, isLoading } = useGetUserByEmailQuery(userEmail);
  console.log(data);

  if (isLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the case where an error occurred
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    // Handle the case where data is still undefined (user not found)
    return <div>User not found.</div>;
  }

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        // undefined, send empty object
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
