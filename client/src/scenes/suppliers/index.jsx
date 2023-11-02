import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetSuppliersQuery } from "state/api";
import Header from "components/Header";
import { Box, useTheme } from "@mui/material";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";

const Suppliers = () => {
  const theme = useTheme();

  // values to send BE
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  // temp state for search, only search when user press search button
  const [searchInput, setSearchInput] = useState("");

  // api request
  const { data, isLoading } = useGetSuppliersQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const numberOfSuppliers = data ? data.suppliers.length : 0;

  const columns = [
    {
      // to edit createdAt on mongo?
      field: "Name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "SupplierID",
      headerName: "Supplier ID",
      flex: 0.5,
    },
    {
      field: "Category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },

    // {
    //   // number of products this supplier has
    //   field: "products",
    //   headerName: "# of Products",
    //   flex: 0.5,
    //   renderCell: (params) => params.value.length,
    // },
  ];
  // console.log(("suppliers", data));
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="SUPPLIERS"
        subtitle={`No of Supplier: ${numberOfSuppliers}`}
      />
      <br />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
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
          rows={(data && data.suppliers) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: DataGridCustomToolbar }}
          slotProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Suppliers;
