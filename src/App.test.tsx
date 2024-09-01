import "@testing-library/jest-dom"

import { act, screen, waitFor } from "@testing-library/react"

import App from "./App"
import { useGetAllInvestorsQuery } from "./services/investors" // Assuming this is the correct import path
import { render } from "./test-utils"

jest.mock( "./services/investors", () => ( {
  useGetAllInvestorsQuery: jest.fn(),
} ) )

describe( "App Component", () => {
  test( "renders and fetches data correctly", async () => {
    // Mock API data with expected structure
    ( useGetAllInvestorsQuery as jest.Mock ).mockReturnValue( {
      data: [
        { 
          id: 1, 
          investor: "John Doe", 
          hq: "NYC", 
          contact: "Jane Doe", 
          notes: "Some notes", 
          investments: 5, 
          portfolio: 20, 
        },
      ],
      error: null,
      isLoading: false,
    } )

    render( <App /> )

    // Check initial render
    expect( screen.getByText( "Investor Pipeline" ) ).toBeInTheDocument()

    // Check DataGrid renders with data
    await waitFor( () => expect( screen.getByText( "John Doe" ) ).toBeInTheDocument() )
  } )

  test( "handles error state", async () => {
    // Mock API error
    ( useGetAllInvestorsQuery as jest.Mock ).mockReturnValue( {
      data: null,
      error: true,
      isLoading: false,
    } )

    render( <App /> )

    expect( screen.getByText( "Error fetching data" ) ).toBeInTheDocument()
  } )

  test( "handles offline state with Snackbar", async () => {
    ( useGetAllInvestorsQuery as jest.Mock ).mockReturnValue( {
      data: [
        { 
          id: 1, 
          investor: "John Doe", 
          hq: "NYC", 
          contact: "Jane Doe", 
          notes: "Some notes", 
          investments: 5, 
          portfolio: 20, 
        },
      ],
      error: null,
      isLoading: false,
    } )
    render( <App /> )
    
    // Initially, should be online
    expect( screen.queryByText( "You are currently offline. Please check your internet connection." ) ).not.toBeInTheDocument()

    // Simulate going offline
    act( () => {
      jest.spyOn( navigator, "onLine", "get" ).mockReturnValueOnce( false )
      window.dispatchEvent( new Event( "offline" ) )
    } )

    // Snackbar should appear when offline
    await waitFor( () => expect( screen.getByText( "You are currently offline. Please check your internet connection." ) ).toBeInTheDocument() )
  } )

} )
