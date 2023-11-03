// CSV UPLOAD
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import FlexBetween from "components/FlexBetween";

const UploadCsv = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const [file, setFile] = useState(null);

  const TEMPLATE_SUPPLIER_URL = "http://localhost:3000/Template_Supplier.csv";
  const TEMPLATE_PRODUCT_URL = "http://localhost:3000/Template_Product.csv";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadSupplier = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5001/importSuppliers", {
      method: "POST",
      body: formData,
    });
    if (response) console.log("supplier CSV imported");
  };

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5001/importProducts", {
      method: "POST",
      body: formData,
    });
    if (response) console.log("product CSV imported");
  };

  const handleDownload = (url) => {
    console.log("Template downloaded");
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="UPLOAD" subtitle="By CSV" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="120px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* Supplier */}
        <Box gridColumn="span 6" gridRow="span 2">
          <Card
            sx={{
              mt: "20px",
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "0.55rem",

              boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
            }}
          >
            <CardContent>
              <Typography variant="h5" color={theme.palette.secondary[300]}>
                New Supplier
              </Typography>

              <Box
                sx={{
                  mt: "20px",
                  height: "7rem",
                  backgroundImage: "none",
                  backgroundColor: "transparent",
                  borderRadius: "0.55rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  accept="csv"
                  id="contained-button-file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload File
                  </Button>
                  <br />
                </label>
                <Typography variant="h5" color={theme.palette.secondary[300]}>
                  {file && (
                    <Container>
                      File selected:
                      {file.name}
                    </Container>
                  )}
                </Typography>
              </Box>
              <Box>
                <FlexBetween>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[500],
                      color: theme.palette.primary[600],
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "#e4dccd",
                        color: "#75695a",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      boxShadow:
                        "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .3)",
                    }}
                    onClick={() => {
                      handleDownload(TEMPLATE_SUPPLIER_URL);
                    }}
                  >
                    Supplier Template
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[500],
                      color: theme.palette.primary[600],
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "#e4dccd",
                        color: "#75695a",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      boxShadow:
                        "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .3)",
                    }}
                    onClick={handleUploadSupplier}
                  >
                    Upload
                  </Button>
                </FlexBetween>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Product */}
        <Box gridColumn="span 6" gridRow="span 2">
          <Card
            sx={{
              mt: "20px",
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "0.55rem",

              boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
            }}
          >
            <CardContent>
              <Typography variant="h5" color={theme.palette.secondary[300]}>
                New Product
              </Typography>

              <Box
                sx={{
                  mt: "20px",
                  height: "7rem",
                  backgroundImage: "none",
                  backgroundColor: "transparent",
                  borderRadius: "0.55rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  accept="csv"
                  id="contained-button-file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload File
                  </Button>
                  <br />
                </label>
                <Typography variant="h5" color={theme.palette.secondary[300]}>
                  {file && (
                    <Container>
                      File selected:
                      {file.name}
                    </Container>
                  )}
                </Typography>
              </Box>
              <Box>
                <FlexBetween>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[500],
                      color: theme.palette.primary[600],
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "#e4dccd",
                        color: "#75695a",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      boxShadow:
                        "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .3)",
                    }}
                    onClick={() => {
                      handleDownload(TEMPLATE_PRODUCT_URL);
                    }}
                  >
                    Product Template
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.secondary[500],
                      color: theme.palette.primary[600],
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "#e4dccd",
                        color: "#75695a",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      boxShadow:
                        "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .3)",
                    }}
                    onClick={handleUploadProduct}
                  >
                    Upload
                  </Button>
                </FlexBetween>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadCsv;
