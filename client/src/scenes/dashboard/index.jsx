// VERSION 1
import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  CategoryOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import { useGetProductsQuery } from "state/api";
import StatBox from "components/StatBox";
import Products from "scenes/products";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data: dashboardData, isLoading: isLoadingDashboard } =
    useGetDashboardQuery();
  const { data: productData, isLoading: isLoadingProduct } =
    useGetProductsQuery();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  const numberOfProducts = productData ? productData.length : 0;

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="AT A GLANCE" subtitle={`as of ${formattedDate}`} />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
          }}
        >
          <FlexBetween>
            <Typography
              variant="h5"
              sx={{ color: theme.palette.secondary[100] }}
            >
              Products By Category
            </Typography>
            <CategoryOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          </FlexBetween>
          <Box
            sx={{
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <BreakdownChart isDashboard={true} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              mt="13px"
              display="flex"
              justifyContent="right"
              sx={{ color: theme.palette.secondary[300] }}
            >
              as of {formattedDate}
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          sx={{
            borderRadius: "0.5rem",
            boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
          }}
        >
          <FlexBetween>
            <Typography
              variant="h5"
              sx={{ color: theme.palette.secondary[100] }}
            >
              Products
            </Typography>
            <ShoppingCartOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          </FlexBetween>

          <Products isDashboard={true} />
        </Box>
        <StatBox
          sx={{
            borderRadius: "10rem",
            boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
          }}
          title="Total Products"
          value={`${numberOfProducts}`}
          increase="+14%"
          description="as of "
          icon={
            <ShoppingCartOutlined
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;

// VERSION 2
// import React from "react";
// import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
// import {
//   CategoryOutlined,
//   FileUploadOutlined,
//   ShoppingCartOutlined,
//   PointOfSale,
//   // PersonAdd,
//   // Traffic,
// } from "@mui/icons-material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import {
//   Box,
//   Button,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   Container,
// } from "@mui/material";
// import BreakdownChart from "components/BreakdownChart";
// // import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
// import { useGetProductsQuery } from "state/api";
// import StatBox from "components/StatBox";
// import Products from "scenes/products";
// import UploadCsv from "scenes/uploadCsv";

// const Dashboard = () => {
//   const theme = useTheme();
//   const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
//   const { data: dashboardData, isLoading: isLoadingDashboard } =
//     useGetDashboardQuery();
//   const { data: productData, isLoading: isLoadingProduct } =
//     useGetProductsQuery();

//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleString();
//   const numberOfProducts = productData ? productData.length : 0;

//   return (
//     <Box m="1.5rem 2.5rem">
//       <FlexBetween>
//         <Header title="AT A GLANCE" subtitle={`as of ${formattedDate}`} />
//       </FlexBetween>

//       <Box
//         mt="20px"
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="160px"
//         gap="20px"
//         sx={{
//           "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
//         }}
//       >
//         {/* ROW 1 */}
//         {/* CSV */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 3"
//           backgroundColor={theme.palette.background.alt}
//           p="1.5rem"
//           sx={{
//             borderRadius: "0.5rem",
//             boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
//           }}
//         >
//           <FlexBetween>
//             <Typography
//               variant="h5"
//               sx={{ color: theme.palette.secondary[100] }}
//             >
//               Upload Csv
//             </Typography>
//             <FileUploadOutlined
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           </FlexBetween>
//           <Box
//             sx={{
//               justifyContent: "center",
//               width: "100%",
//               marginTop: "20px",
//             }}
//           >
//             <UploadCsv isDashboard={true} />
//           </Box>
//           {/* <Box>
//             <Typography
//               variant="h6"
//               mt="13px"
//               display="flex"
//               justifyContent="right"
//               sx={{ color: theme.palette.secondary[300] }}
//             >
//               as of {formattedDate}
//             </Typography>
//           </Box> */}
//         </Box>
//         {/* PRODUCTS TABLE */}
//         <Box
//           gridColumn="span 8"
//           gridRow="span 4"
//           backgroundColor={theme.palette.background.alt}
//           p="1.5rem"
//           sx={{
//             borderRadius: "0.5rem",
//             boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
//           }}
//         >
//           <FlexBetween>
//             <Typography
//               variant="h5"
//               sx={{ color: theme.palette.secondary[100] }}
//             >
//               Products
//             </Typography>
//             <ShoppingCartOutlined
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           </FlexBetween>

//           <Products isDashboard={true} />
//         </Box>

//         {/* ROW 2 */}
//         {/* PRODUCTS BY CATEGORY */}
//         <Box
//           gridColumn="span 4"
//           gridRow="span 3"
//           backgroundColor={theme.palette.background.alt}
//           p="1.5rem"
//           sx={{
//             borderRadius: "0.5rem",
//             boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
//           }}
//         >
//           <FlexBetween>
//             <Typography
//               variant="h5"
//               sx={{ color: theme.palette.secondary[100] }}
//             >
//               Products By Category
//             </Typography>
//             <CategoryOutlined
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           </FlexBetween>
//           <Box
//             sx={{
//               justifyContent: "center",
//               width: "100%",
//               marginTop: "20px",
//             }}
//           >
//             <BreakdownChart isDashboard={true} />
//           </Box>
//           <Box>
//             <Typography
//               variant="h6"
//               mt="13px"
//               display="flex"
//               justifyContent="right"
//               sx={{ color: theme.palette.secondary[300] }}
//             >
//               as of {formattedDate}
//             </Typography>
//           </Box>
//         </Box>

//         {/* TOTAL PRODUCTS */}

//         <StatBox
//           sx={{
//             borderRadius: "10rem",
//             boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
//           }}
//           title="Total Products"
//           value={`${numberOfProducts}`}
//           increase="+14%"
//           description="as of "
//           icon={
//             <ShoppingCartOutlined
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />
//         <StatBox
//           title="Sales Today"
//           value="93"
//           increase="+21%"
//           description="Since last month"
//           icon={
//             <PointOfSale
//               sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//             />
//           }
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

// ///////////////////////////////////////////////////////////////////////////////extras //
// <StatBox
//   title="Monthly Sales"
//   value={data && data.thisMonthStats.totalSales}
//   increase="+5%"
//   description="Since last month"
//   icon={
//     <PersonAdd
//       sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
//     />
//   }
// />
// <StatBox
//   title="Yearly Sales"
//   value={data && data.yearlySalesTotal}
//   increase="+43%"
//   description="Since last month"
//   icon={
//     <Traffic
//       sx={{
//         color: theme.palette.secondary[300],
//         fontSize: "26px",
//       }}
//     />
//   }
// />

// <Box
//   gridColumn="span 8"
//   gridRow="span 3"
//   sx={{
//     "& .MuiDataGrid-root": {
//       border: "none",
//     },
//     "& .MuiDataGrid-cell": {
//       borderBottom: "none",
//     },
//     "& .MuiDataGrid-columnHeaders": {
//       backgroundColor: theme.palette.background.alt,
//       color: theme.palette.secondary[100],
//       borderBottom: "none",
//     },
//     "& .MuiDataGrid-virtualScroller": {
//       backgroundColor: theme.palette.primary.light,
//     },
//     "& .MuiDataGrid-footerContainer": {
//       backgroundColor: theme.palette.background.alt,
//       color: theme.palette.secondary[100],
//       borderTop: "none",
//     },
//     "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//       color: `${theme.palette.secondary[200]} !important`,
//     },
//     borderRadius: ".5rem",
//     boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0, .8)",
//   }}
// >
//   <DataGrid
//     loading={isLoading || !data}
//     getRowId={(row) => row._id}
//     rows={(data && data.suppliers) || []}
//     columns={columns}
//     rowCount={(data && data.total) || 0}
//     rowsPerPageOptions={[20, 50, 100]}
//   />
// </Box>
