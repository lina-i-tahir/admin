import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductsQuery();
  console.log("data", data);

  const numberOfProducts = data ? data.length : 0;

  const handleRowClick = (params) => {
    const productId = params.row.ProductID;
    if (productId) {
      navigate(`/products/${productId}/stats`);
    } else {
      console.error("ProductID not found in params:", params);
    }
  };

  const columns = [
    {
      field: "ProductID",
      headerName: "Product ID",
      flex: 0.5,
    },
    {
      field: "SupplierID",
      headerName: "Supplier ID",
      flex: 0.5,
    },
    {
      field: "Brand",
      headerName: "Brand",
      flex: 0.5,
    },
    {
      field: "SupplierCategory",
      headerName: "Category",
      flex: 0.5,
    },
    {
      field: "Description",
      headerName: "Description",
      flex: 1.5,
    },
    {
      field: "UnitPrice",
      headerName: "Unit Price $",
      flex: 0.5,
    },
    {
      field: "UnitOfMeasurement",
      headerName: "UOM",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="PRODUCTS"
        subtitle={`No of Products: ${numberOfProducts}`}
      />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            cursor: "pointer", // Set the cursor to pointer
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
          borderRadius: ".5rem",
          boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Products;
// original
// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   Collapse,
// } from "@mui/material";
// import { useGetProductsQuery } from "state/api";
// import Header from "components/Header";

// const Product = ({
//   _id,
//   ProductID,
//   SupplierID,
//   Description,
//   UnitPrice,
//   UnitOfMeasurement,
// }) => {
//   const theme = useTheme();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const taxRate = 0.08;
//   const UnitPriceTaxed = UnitPrice + UnitPrice * taxRate;
//   return (
//     <Card
//       sx={{
//         backgroundImage: "none",
//         backgroundColor: theme.palette.background.alt,
//         borderRadius: "0.55rem",
//       }}
//     >
//       <CardContent>
//         <Typography
//           sx={{ fontSize: 14 }}
//           color={theme.palette.secondary[700]}
//           gutterBottom
//         >
//           {ProductID}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {Description}
//         </Typography>
//         <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
//           nett: ${Number(UnitPrice).toFixed(2)}
//           <br></br>
//           w/ gst: ${Number(UnitPriceTaxed).toFixed(2)}
//         </Typography>
//         <Typography
//           sx={{ mb: "1.5rem" }}
//           color={theme.palette.secondary[400]}
//         ></Typography>
//       </CardContent>
//       <Button
//         variant="primary"
//         size="small"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         See More
//       </Button>
//       <CardActions>
//         <Collapse
//           in={isExpanded}
//           timeout="auto"
//           unmountOnExit
//           sx={{
//             color: theme.palette.neutral[300],
//           }}
//         >
//           <CardContent>
//             <Typography>id: {_id}</Typography>
//             <Typography>Supplier ID: {SupplierID}</Typography>
//             <Typography>UOM: {UnitOfMeasurement}</Typography>
//             <Typography></Typography>
//           </CardContent>
//         </Collapse>
//       </CardActions>
//     </Card>
//   );
// };

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery();
//   const isNonMobile = useMediaQuery("(min-width: 1000px");
//   console.log("products:", data);

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="PRODUCTS" subtitle="see your products" />
//       {data && !isLoading ? (
//         <Box
//           mt="20px"
//           display="grid"
//           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//           justifyContent="space-between"
//           rowGap="20px"
//           columnGap="1.33%"
//           sx={{
//             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//           }}
//         >
//           {data.map(
//             ({
//               _id,
//               ProductID,
//               SupplierID,
//               Description,
//               UnitPrice,
//               UnitOfMeasurement,
//             }) => (
//               <Product
//                 key={_id}
//                 _id={_id}
//                 ProductID={ProductID}
//                 SupplierID={SupplierID}
//                 Description={Description}
//                 UnitPrice={UnitPrice}
//                 UnitOfMeasurement={UnitOfMeasurement}
//               />
//             )
//           )}
//         </Box>
//       ) : (
//         <>Loading...</>
//       )}
//     </Box>
//   );
// };

// export default Products;

// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
//   Rating,
//   useTheme,
//   useMediaQuery,
//   Collapse,
// } from "@mui/material";
// import { useGetProductsQuery } from "state/api";
// import Header from "components/Header";

// const Product = ({
//   _id,
//   name,
//   description,
//   price,
//   rating,
//   category,
//   supply,
//   stat,
// }) => {
//   const theme = useTheme();
//   const [isExpanded, setIsExpanded] = useState(false);
//   return (
//     <Card
//       sx={{
//         backgroundImage: "none",
//         backgroundColor: theme.palette.background.alt,
//         borderRadius: "0.55rem",
//       }}
//     >
//       <CardContent>
//         <Typography
//           sx={{ fontSize: 14 }}
//           color={theme.palette.secondary[700]}
//           gutterBottom
//         >
//           {category}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
//           ${Number(price).toFixed(2)}
//         </Typography>
//         <Rating value={rating} readOnly />
//         <Typography variant="body2">{description}</Typography>
//       </CardContent>
//       <Button
//         variant="primary"
//         size="small"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         See More
//       </Button>
//       <CardActions>
//         <Collapse
//           in={isExpanded}
//           timeout="auto"
//           unmountOnExit
//           sx={{
//             color: theme.palette.neutral[300],
//           }}
//         >
//           <CardContent>
//             <Typography>id: {_id}</Typography>
//             <Typography>Supply Left {supply}</Typography>
//             <Typography>
//               Yearly Sales This Year {stat.yearlySalesTotal}
//             </Typography>
//             <Typography>
//               Yearly Units Sold This Year {stat.yearlySalesTotal}
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </CardActions>
//     </Card>
//   );
// };

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery();
//   const isNonMobile = useMediaQuery("(min-width: 1000px");
//   console.log("products:", data);

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="PRODUCTS" subtitle="see your products" />
//       {data || !isLoading ? (
//         <Box
//           mt="20px"
//           display="grid"
//           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//           justifyContent="space-between"
//           rowGap="20px"
//           columnGap="1.33%"
//           sx={{
//             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//           }}
//         >
//           {data.map(
//             ({
//               _id,
//               name,
//               description,
//               price,
//               rating,
//               category,
//               supply,
//               stat,
//             }) => (
//               <Product
//                 key={_id}
//                 _id={_id}
//                 name={name}
//                 description={description}
//                 price={price}
//                 rating={rating}
//                 category={category}
//                 supply={supply}
//                 stat={stat}
//               />
//             )
//           )}
//         </Box>
//       ) : (
//         <>Loading...</>
//       )}
//     </Box>
//   );
// };

// export default Products;
