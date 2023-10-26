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

const ProductStats = ({
  _id,
  ProductID,
  YearlyMTDTotalSales,
  //   Description,
  YearlyMTDTotalUnits,
  monthlyData,
  dailyData,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  //   const taxRate = 0.08;
  //   const UnitPriceTaxed = UnitPrice + UnitPrice * taxRate;
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {ProductID}
        </Typography>
        <Typography variant="h5" component="div">
          {/* {Description} */}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {YearlyMTDTotalSales}
          <br></br>
          {YearlyMTDTotalUnits}
        </Typography>
        <Typography
          sx={{ mb: "1.5rem" }}
          color={theme.palette.secondary[400]}
        ></Typography>
      </CardContent>
      <Button
        variant="primary"
        size="small"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        See More
      </Button>
      <CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <CardContent>
            <Typography>id: {_id}</Typography>
            <Typography>{monthlyData}</Typography>
            <Typography>{dailyData}</Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </CardActions>
    </Card>
  );
};

const ProductsStats = () => {
  const { data, isLoading } = useGetProductStatsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px");
  console.log("products:", data);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="see your products" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              ProductID,
              YearlyMTDTotalSales,

              YearlyMTDTotalUnits,
              monthlyData,
              dailyData,
            }) => (
              <ProductStats
                key={_id}
                _id={_id}
                YearlyMTDTotalSales={YearlyMTDTotalSales}
                YearlyMTDTotalUnits={YearlyMTDTotalUnits}
                monthlyData={monthlyData}
                dailyData={dailyData}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default ProductsStats;
