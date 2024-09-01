import "./App.css"

import { Alert, Checkbox, Snackbar, Typography } from "@mui/material"
import { Box, IconButton } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { GridColDef } from "@mui/x-data-grid"
import { useState } from "react"

import { FilterToggleIcon } from "./assets"
import DataTable from "./components/common/DataTable"
import SideBar from "./components/common/SideBar/SideBar"
import useOnlineStatus from "./hooks/useOnlineStatus"
import { useGetAllInvestorsQuery } from "./services/investors"
import theme from "./theme/theme"

export const investorColumns: GridColDef[] = [
  {
    field: "investor",
    headerName: "Investor",
    width: 250,
    renderCell: ( params ) => {
      const { isInvestorApproved, image, name } = params.row.investor
      return (
        <div style={ { display: "flex", alignItems: "center" } }>
          <Checkbox color="primary" checked={ isInvestorApproved } />
          { image && (
            <img
              src={ image }
              alt={ name }
              style={ { width: 40, height: 40, borderRadius: "50%", marginRight: 8 } }
            />
          ) }
          <span>{ name }</span>
        </div>
      )
    },
  },
  { field: "hq", headerName: "Investor HQs", width: 200 },
  {
    field: "contact",
    headerName: "Contact Person",
    width: 150,
    renderCell: ( params ) => {
      const contact = params.value
      return <span>{ contact || "Add" }</span>
    },
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 250,
    renderCell: ( params ) => {
      const notes = params.value
      return <span>{ notes || "Add Notes +" }</span>
    },
  },
  {
    field: "investments",
    headerName: "Lead Investments in Last 12 Months",
    type: "number",
    width: 250,
  },
  {
    field: "portfolio",
    headerName: "%age Portfolio Marked as Lead",
    type: "number",
    width: 250,
  },
]

function App() {
  const [ open, setOpen ] = useState<boolean>( false )
  const [ page, setPage ] = useState<number>( 1 )
  const [ pageSize, setPageSize ] = useState<number>( 10 )
  const isOnline = useOnlineStatus()

  const { data, error, isLoading } = useGetAllInvestorsQuery( {
    page,
    limit: pageSize,
  } )

  const handlePageChange = ( newPage: number ) => {
    setPage( newPage + 1 )
  }

  const handlePageSizeChange = ( newPageSize: number ) => {
    setPageSize( newPageSize )
    setPage( 1 )
  }

  const investors = data?.investors || []
  if( error ) return <div>Error fetching data</div>

  console.log( "data", data )

  return (
    <div>
      <ThemeProvider theme={ theme }>
        <SideBar open={ open } onMenuClick={ () => setOpen( ! open ) }>
          <Box sx={ { padding: "20px", width: "100%" } }>
            <Box
              sx={ {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 4,
              } }
            >
              <Typography variant="h1" color="black">
                Investor Pipeline
              </Typography>
              <IconButton
                sx={ { marginRight: "0px" } }
                aria-label="settings"
              >
                <img
                  srcSet={ FilterToggleIcon }
                  src={ FilterToggleIcon }
                  alt={ "Filter Toggle" }
                  loading="lazy" />
              </IconButton>
            </Box>
            <Box sx={ { height: 600, width: "100%" } }>
              <DataTable
                rows={ investors } // Pass the investors array here
                columns={ investorColumns }
                pageSize={ pageSize }
                rowsPerPageOptions={ [ 10, 20, 50 ] }
                pagination
                paginationMode="server"
                onPageSizeChange={ handlePageSizeChange }
                onPageChange={ handlePageChange }
                rowCount={ data?.totalCount || 0 }
                loading={ isLoading }
              />
            </Box>
          </Box>

          <Snackbar open={ ! isOnline } autoHideDuration={ 6000 }>
            <Alert severity="warning" sx={ { width: "100%" } }>
              You are currently offline. Please check your internet connection.
            </Alert>
          </Snackbar>
        </SideBar>
      </ThemeProvider>
    </div>
  )
}

export default App
