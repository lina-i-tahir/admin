import {
  Container,
  useTheme,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

const Error = () => {
  const theme = useTheme();
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
            minWidth: "350px",
          }}
        >
          <CardContent>
            <Container>
              <Box display="flex" alignItems="center" gap="0.75rem">
                <Typography variant="h5" fontSize="30px">
                  Page does not exist
                </Typography>
              </Box>
            </Container>
          </CardContent>
        </Card>
      </FlexBetween>
    </Box>
  );
};

export default Error;
