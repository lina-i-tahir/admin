import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  // SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  // ReceiptLongOutlined,
  // PublicOutlined,
  // PointOfSaleOutlined,
  // TodayOutlined,
  // CalendarMonthOutlined,
  // AdminPanelSettingsOutlined,
  // TrendingUpOutlined,
  // PieChartOutlined,
} from "@mui/icons-material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Suppliers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Upload Form",
    icon: <FileUploadOutlinedIcon />,
  },
  {
    text: "Upload Csv",
    icon: <FileUploadOutlinedIcon />,
  },
];
const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const userDetails = useSelector((state) => state.global.userDetails);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box
                  onClick={() => {
                    navigate(`/dashboard`);
                    console.log("clicked logo");
                  }}
                  display="flex"
                  alignItems="center"
                  gap="0.75rem"
                  sx={{ cursor: "pointer" }}
                  color={theme.palette.secondary[100]}
                >
                  <SpaceDashboardIcon sx={{ fontSize: "35px" }} />
                  <Typography variant="h4" fontSize="20px">
                    SpaceHub
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List sx={{ mt: "6rem" }}>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{
                      height: "100px",
                    }}
                  >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        height: "70px",
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[500]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem" justifyContent="center">
            <Box>
              <Divider
                variant="middle"
                // sx={{ position: "flex", marginRight: "100px" }}
              />
            </Box>
            <FlexBetween
              textTransform="none"
              gap="1rem"
              m="1.5rem 4.8rem 0 3rem"
            >
              <Box
                component="img"
                alt="profile"
                src={userDetails.picture}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {userDetails.name}
                </Typography>
                {/* <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography> */}
              </Box>
              {/* <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              /> */}
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
