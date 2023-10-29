import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { BackHand, ThreeMp } from "@mui/icons-material";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();

  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1 rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.5rem"
      boxShadow={"0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)"}
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
