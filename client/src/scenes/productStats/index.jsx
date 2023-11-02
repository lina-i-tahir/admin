import React, { useState } from "react";
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
} from "@mui/material";
import { useGetProductStatsQuery } from "state/api";
import Header from "components/Header";
import Daily from "scenes/daily";

const ProductStats = ({ ProductID, dailyData }) => {
  const theme = useTheme();
  const calculateProductStats = (dailyData) => {
    let totalUnits = 0;
    let totalPurchase = 0;

    dailyData.forEach((day) => {
      totalUnits += day.totalUnits;
      totalPurchase += day.totalPurchase;
    });

    return {
      totalUnits,
      totalPurchase,
    };
  };

  const productStats = calculateProductStats(dailyData);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Qty available: {productStats.totalUnits}{" "}
        </Typography>
        <Typography variant="h5" component="div">
          Amount Purchase: $ {productStats.totalPurchase}
        </Typography>
        <Daily ProductID={ProductID} />
      </CardContent>
    </Card>
  );
};

const ProductsStats = ({ ProductID }) => {
  const { data, isLoading } = useGetProductStatsQuery(ProductID);
  const isNonMobile = useMediaQuery("(min-width: 1000px");
  console.log(data);

  return (
    <Box m="1.5rem 2.5rem">
      {isLoading ? (
        <>Loading...</>
      ) : data && data.length > 0 ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(1, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 10" },
          }}
        >
          {data.map((product) => (
            <ProductStats
              key={product.ProductID}
              ProductID={product.ProductID}
              dailyData={product.dailyData}
            />
          ))}
        </Box>
      ) : (
        <Typography>No product statistics available.</Typography>
      )}
    </Box>
  );
};

export default ProductsStats;

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
// import { useGetProductStatsQuery } from "state/api";
// import { useGetProductsQuery } from "state/api";
// import Header from "components/Header";

// const ProductStats = ({
//   _id,
//   ProductID,
//   YearlyMTDTotalSales,
//   //   Description,
//   YearlyMTDTotalUnits,
//   monthlyData,
//   dailyData,
// }) => {
//   const theme = useTheme();
//   const [isExpanded, setIsExpanded] = useState(false);
//   //   const taxRate = 0.08;
//   //   const UnitPriceTaxed = UnitPrice + UnitPrice * taxRate;
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
//           {_id}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {/* {Description} */}
//         </Typography>
//         <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
//           {YearlyMTDTotalSales}
//           <br></br>
//           {YearlyMTDTotalUnits}
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
//             <Typography>{monthlyData}</Typography>
//             <Typography>{dailyData}</Typography>
//             <Typography></Typography>
//           </CardContent>
//         </Collapse>
//       </CardActions>
//     </Card>
//   );
// };

// const ProductsStats = () => {
//   const { data, isLoading } = useGetProductStatsQuery();
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
//               ProductID,
//               YearlyMTDTotalSales,
//               YearlyMTDTotalUnits,
//               monthlyData,
//               dailyData,
//             }) => (
//               <ProductStats
//                 key={_id}
//                 _id={ProductID}
//                 YearlyMTDTotalSales={YearlyMTDTotalSales}
//                 YearlyMTDTotalUnits={YearlyMTDTotalUnits}
//                 monthlyData={monthlyData}
//                 dailyData={dailyData}
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

// export default ProductsStats;

// import React, { useMemo, useState } from "react";
// import { Box, useTheme } from "@mui/material";
// import Header from "components/Header";
// import { ResponsiveLine } from "@nivo/line";
// import { useGetSalesQuery } from "state/api";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Daily = () => {
//   // adjust date
//   const [startDate, setStartDate] = useState(new Date("2021-02-01"));
//   const [endDate, setEndDate] = useState(new Date("2021-03-01"));
//   const { data } = useGetSalesQuery();
//   const theme = useTheme();

//   const [formattedData] = useMemo(() => {
//     if (!data) return [];

//     const { dailyData } = data;
//     const totalSalesLine = {
//       iPurchase",
//       color: theme.palette.secondary.main,
//       data: [],
//     };
//     const totalUnitsLine = {
//       id: "totalUnits",
//       color: theme.palette.secondary[600],
//       data: [],
//     };

//     Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
//       const dateFormatted = new Date(date);
//       if (dateFormatted >= startDate && dateFormatted <= endDate) {
//         const splitDate = date.substring(date.indexOf("-") + 1);

//         totalSalesLine.data = [
//           ...totalSalesLine.data,
//           { x: splitDate, y: totalSales },
//         ];
//         totalUnitsLine.data = [
//           ...totalUnitsLine.data,
//           { x: splitDate, y: totalUnits },
//         ];
//       }
//     });

//     const formattedData = [totalSalesLine, totalUnitsLine];
//     return [formattedData];
//   }, [data, startDate, endDate]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="DAILY SALES" subtitle="Chart of daily sales" />
//       <Box height="75vh">
//         <Box display="flex" justifyContent="flex-end">
//           <Box>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               selectsStart
//               startDate={startDate}
//               endDate={endDate}
//             />
//           </Box>
//           <Box>
//             <DatePicker
//               selected={endDate}
//               onChange={(date) => setEndDate(date)}
//               selectsEnd
//               startDate={startDate}
//               endDate={endDate}
//               minDate={startDate}
//             />
//           </Box>
//         </Box>

//         {data ? (
//           <ResponsiveLine
//             data={formattedData}
//             theme={{
//               axis: {
//                 domain: {
//                   line: {
//                     stroke: theme.palette.secondary[200],
//                   },
//                 },
//                 legend: {
//                   text: {
//                     fill: theme.palette.secondary[200],
//                   },
//                 },
//                 ticks: {
//                   line: {
//                     stroke: theme.palette.secondary[200],
//                     strokeWidth: 1,
//                   },
//                   text: {
//                     fill: theme.palette.secondary[200],
//                   },
//                 },
//               },
//               legends: {
//                 text: {
//                   fill: theme.palette.secondary[200],
//                 },
//               },
//               tooltip: {
//                 container: {
//                   color: theme.palette.primary.main,
//                 },
//               },
//             }}
//             colors={{ datum: "color" }}
//             margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
//             xScale={{ type: "point" }}
//             yScale={{
//               type: "linear",
//               min: "auto",
//               max: "auto",
//               stacked: false,
//               reverse: false,
//             }}
//             yFormat=" >-.2f"
//             curve="catmullRom"
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               orient: "bottom",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 90,
//               legend: "Month",
//               legendOffset: 60,
//               legendPosition: "middle",
//             }}
//             axisLeft={{
//               orient: "left",
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: "Total",
//               legendOffset: -50,
//               legendPosition: "middle",
//             }}
//             enableGridX={false}
//             enableGridY={false}
//             pointSize={10}
//             pointColor={{ theme: "background" }}
//             pointBorderWidth={2}
//             pointBorderColor={{ from: "serieColor" }}
//             pointLabelYOffset={-12}
//             useMesh={true}
//             legends={[
//               {
//                 anchor: "top-right",
//                 direction: "column",
//                 justify: false,
//                 translateX: 50,
//                 translateY: 0,
//                 itemsSpacing: 0,
//                 itemDirection: "left-to-right",
//                 itemWidth: 80,
//                 itemHeight: 20,
//                 itemOpacity: 0.75,
//                 symbolSize: 12,
//                 symbolShape: "circle",
//                 symbolBorderColor: "rgba(0, 0, 0, .5)",
//                 effects: [
//                   {
//                     on: "hover",
//                     style: {
//                       itemBackground: "rgba(0, 0, 0, .03)",
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//           />
//         ) : (
//           <>Loading...</>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Daily;
