import { Box, Checkbox, Typography } from "@mui/material"
import { GridColDef } from "@mui/x-data-grid"

import { MarkIcon } from "../assets"

export const investorColumns: GridColDef[] = [
  {
    field: "investor",
    headerName: "Investor",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderHeader: () => (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography fontWeight={ 500 } textAlign="center" marginRight={ 1 }>
          Investor
        </Typography>
      </Box>
    ),
    renderCell: ( params ) => {
      const { isInvestorApproved, image, name } = params.row.investor
      return (
        <Box display="flex" alignItems="center" justifyContent="center" width="100%">
          <Checkbox color="primary" checked={ isInvestorApproved } />
          { image && (
            <img
              src={ image }
              alt={ name }
            
            />
          ) }
          
          <Typography marginLeft={ 2 }>{ name }</Typography>
        </Box>
      )
    },
  },
  {
    field: "hq",
    headerName: "Investor HQs",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "contact",
    headerName: "Contact Person",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderHeader: () => (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography fontWeight={ 500 } textAlign="center" marginRight={ 1 }>
          Contact Person
        </Typography>
        <img srcSet={ MarkIcon } src={ MarkIcon } alt="Mark" loading="lazy" />
      </Box>
    ),
    renderCell: ( params ) => {
      const contact = params.value
      return <span>{ contact || "Add" }</span>
    },
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 250,
    headerAlign: "center",
    align: "center",
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
    headerAlign: "center",
    align: "center",
  },
  {
    field: "portfolio",
    headerName: "%age Portfolio Marked as Lead",
    type: "number",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
]
