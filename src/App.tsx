import { Alert, CssBaseline, Snackbar, Typography } from "@mui/material"
import { Box, IconButton } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { useEffect, useState } from "react"

import { FilterToggleIcon } from "./assets"
import DataTable from "./components/common/DataTable"
import SideBar from "./components/common/SideBar/SideBar"
import useOnlineStatus from "./hooks/useOnlineStatus"
import { useGetAllInvestorsQuery } from "./services/investors"
import theme from "./theme/theme"
import { investorColumns } from "./utility/columns"

function App() {
  const [ open, setOpen ] = useState<boolean>( false )
  const [ page, setPage ] = useState<number>( 1 )
  const [ pageSize, setPageSize ] = useState<number>( 10 )
  const [ snackbarOpen, setSnackbarOpen ] = useState<boolean>( false )
  const [ snackbarMessage, setSnackbarMessage ] = useState<string>( "" )
  const isOnline = useOnlineStatus()

  const { data, error, isLoading } = useGetAllInvestorsQuery( {
    page,
    limit: pageSize,
  } )

  useEffect( () => {
    if( error ) {
      setSnackbarMessage( "Network error. Please try again later." )
      setSnackbarOpen( true )
    }
  }, [ error ] )

  const handlePageChange = ( newPage: number ) => {
    setPage( newPage + 1 )
  }

  const handlePageSizeChange = ( newPageSize: number ) => {
    setPageSize( newPageSize )
    setPage( 1 )
  }

  const investors = data?.investors || []

  return (
    <div>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <SideBar open={ open } onMenuClick={ () => setOpen( ! open ) }>
          <Box sx={ { padding: "20px", width: "100%" } }>
            <Box
              sx={ {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
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
                rows={ investors }
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

          <Snackbar
            open={ snackbarOpen }
            onClose={ () => setSnackbarOpen( false ) }
          >
            <Alert severity="error" sx={ { width: "100%" } }>
              { snackbarMessage }
            </Alert>
          </Snackbar>
        </SideBar>
      </ThemeProvider>
    </div>
  )
}

export default App
