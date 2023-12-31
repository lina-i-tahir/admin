import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Collapse,
  Container,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setUserDetails } from "state";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 1000px");

  const handleButtonClick = () => {
    navigate("/dashboard");
  };

  // const notify = () => toast("This is a toast notification !");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <FlexBetween>
        <Card
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "1rem",
            boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
            minWidth: "400px",
          }}
        >
          <CardContent>
            <Container>
              <Box display="flex" alignItems="center" gap="0.75rem">
                <SpaceDashboardIcon sx={{ fontSize: "100px" }} />
                <Typography variant="h4" fontSize="30px">
                  SpaceHub
                </Typography>
              </Box>
              <p></p>
              <GoogleOAuthProvider clientId="1079839591574-nh4e6plla99dmv9n92m1dj7gafd3kfhr.apps.googleusercontent.com">
                <GoogleLogin
                  theme="filled_black"
                  shape="pill"
                  width={"350px"}
                  onSuccess={(credentialResponse, tokenResponse) => {
                    const userDetails = jwtDecode(
                      credentialResponse.credential
                    );
                    console.log("token", tokenResponse);
                    console.log("userdetails:", userDetails);
                    const userName = userDetails.name;
                    const userEmail = userDetails.email;
                    const userPicture = userDetails.picture;
                    dispatch(
                      setUserDetails({
                        name: userName,
                        email: userEmail,
                        picture: userPicture,
                      })
                    );
                    // console.log(userPicture);

                    navigate(`/dashboard`);
                    // window.location.href = "/dashboard";
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              <p></p>

              <Button variant="text" size="small" onClick={handleButtonClick}>
                Test account
              </Button>
            </Container>
          </CardContent>
        </Card>
      </FlexBetween>
    </Box>
  );
};

export default Login;
