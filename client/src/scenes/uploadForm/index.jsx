// CRUD
import Header from "components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const UploadForm = () => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <>
      <Box m="1.5rem 2.5rem">
        <Header title="UPLOAD" subtitle="By Form" />

        {/* MANUAL UPLOAD */}
        <Container maxWidth="sm">
          <Card
            sx={{
              mt: "20px",
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "0.55rem",
              boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
              justifyContent: "center",
              maxWidth: "700px",
            }}
          >
            <CardContent>
              <br />
              <Box
                component="form"
                onSubmit={() => {}}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <TextField
                  id="ProductID"
                  label="ProductID"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />

                <TextField
                  id="SupplierID"
                  label="SupplierID"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                />
                <TextField
                  id="productCategory"
                  label="Category"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  id="Brand"
                  label="Brand"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />

                <TextField
                  id="Description"
                  label="Description"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  id="UnitOfMeasurement"
                  label="Unit Of Measurement"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  id="ItemPrice"
                  label="Item Price"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  id="UnitPrice"
                  label="Unit Price"
                  variant="filled"
                  color="secondary"
                  defaultValue=""
                  autoComplete="off"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
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
                    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .3)",
                  }}
                >
                  Add Product
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default UploadForm;

// CSV
// import React, { useState } from "react";

// const Upload = () => {
//   const [file, setFile] = useState();

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch("http://localhost:5001/importSuppliers", {
//       method: "POST",
//       body: formData,
//     });
//     if (response) console.log("suss");
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default Upload;
