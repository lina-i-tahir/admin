import React from "react";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";

const List = ({ id, product, setUpdateUI, updateMode }) => {
  const theme = useTheme();

  return (
    <li>
      {product}
      <Box>
        <EditOutlined
          sx={{ color: theme.palette.secondary[300], fontSize: "20px" }}
        />
        <DeleteOutline
          sx={{ color: theme.palette.secondary[300], fontSize: "20px" }}
        />
      </Box>
    </li>
  );
};

export default List;
