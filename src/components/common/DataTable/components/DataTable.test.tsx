import { GridColDef } from "@mui/x-data-grid"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"

import DataTable from "./DataTable"

const mockRows = [
  { id: 1, investor: "Investor A", hq: "HQ A", contact: "Contact A", notes: "Notes A", investments: 10, portfolio: 5 },
  { id: 2, investor: "Investor B", hq: "HQ B", contact: "Contact B", notes: "Notes B", investments: 20, portfolio: 15 },
]

const mockColumns: GridColDef[] = [
  { field: "investor", headerName: "Investor", width: 200 },
  { field: "hq", headerName: "Investor HQs", width: 200 },
  { field: "contact", headerName: "Contact Person", width: 150 },
  { field: "notes", headerName: "Notes", width: 250 },
  { field: "investments", headerName: "Lead Investments in Last 12 Months", type: "number", width: 250 },
  { field: "portfolio", headerName: "%age Portfolio Marked as Lead", type: "number", width: 250 },
]

describe( "InvestorDataGrid Component", () => {
  it( "renders correctly with provided props", () => {
    render(
      <DataTable
        rows={ mockRows }
        columns={ mockColumns }
        pageSize={ 10 }
        pagination= { true }
        rowsPerPageOptions={ [ 10, 20, 50 ] }
        paginationMode="server"
        onPageSizeChange={ () => {} }
        onPageChange={ () => {} }
        rowCount={ 2 }
        loading={ false }
      />
    )

    // Check if the data is rendered
    expect( screen.getByText( "Investor A" ) ).toBeInTheDocument()
    expect( screen.getByText( "Investor B" ) ).toBeInTheDocument()
    expect( screen.getByText( "HQ A" ) ).toBeInTheDocument()
    expect( screen.getByText( "HQ B" ) ).toBeInTheDocument()

    // Check if pagination controls are present
    // expect( screen.getByRole( "button", { name: /page 1 of 1/i } ) ).toBeInTheDocument()
  } )

} )
