import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { mockColumns, mockRows } from "../../../../utility/mockData"
import DataTable from "./DataTable"

describe( "InvestorDataGrid Component", () => {
  const renderWithDndProvider = ( component: React.ReactNode ) => {
    return render( <DndProvider backend={ HTML5Backend }>{ component }</DndProvider> )
  }

  const onPageChangeMock = jest.fn()
  it( "renders correctly with provided props", () => {
    renderWithDndProvider(
      <DataTable
        rows={ mockRows }
        columns={ mockColumns }
        pageSize={ 10 }
        pagination={ true }
        rowsPerPageOptions={ [ 10, 20, 50 ] }
        paginationMode="server"
        onPageSizeChange={ onPageChangeMock }
        onPageChange={ onPageChangeMock }
        rowCount={ 2 }
        loading={ false }
      />
    )

    // Check if the data is rendered
    expect( screen.getByText( "Investor A" ) ).toBeInTheDocument()
    expect( screen.getByText( "Investor B" ) ).toBeInTheDocument()
    expect( screen.getByText( "HQ A" ) ).toBeInTheDocument()
    expect( screen.getByText( "HQ B" ) ).toBeInTheDocument()

    expect( screen.getAllByRole( "row" ) ).toHaveLength( mockRows.length + 1 ) 

    expect(
      screen.getByRole( "button", { name: /next page/i } )
    ).toBeInTheDocument()
  } )

  it( "handles pagination change", () => {
    const onPageChangeMock = jest.fn()

    renderWithDndProvider(
      <DataTable
        rows={ mockRows }
        columns={ mockColumns }
        pageSize={ 1 } // Setting pageSize to 1 for testing
        pagination={ true }
        rowsPerPageOptions={ [ 1, 10, 20, 50 ] }
        paginationMode="server"
        onPageSizeChange={ onPageChangeMock }
        onPageChange={ onPageChangeMock }
        rowCount={ 2 }
        loading={ false }
      />
    )

    // Simulate clicking the "Next Page" button
    const nextPageButton = screen.getByRole( "button", { name: /next page/i } )
    fireEvent.click( nextPageButton )

    // Check if the onPageChange callback is called
    expect( onPageChangeMock ).toHaveBeenCalled()
  } )
} )
