import "@testing-library/jest-dom"

import { act, screen, waitFor } from "@testing-library/react"

import App from "./App"
import { useGetAllInvestorsQuery } from "./services/investors" 
import { render } from "./test-utils"
import { mockInvestorsApi } from "./utility/mockData"

jest.mock( "./services/investors", () => ( {
  useGetAllInvestorsQuery: jest.fn(),
} ) )

describe( "App Component", () => {
  test( "renders and fetches data correctly", async () => {
    // Mock API data 
    ( useGetAllInvestorsQuery as jest.Mock ).mockReturnValue( mockInvestorsApi )

    render( <App /> )

    // Check initial render
    expect( screen.getByText( "Investor Pipeline" ) ).toBeInTheDocument()
    // Wait for the data to be loaded and rendered
    expect( await screen.findByText( "John Doe" ) ).toBeInTheDocument()
    expect( screen.getAllByRole( "row" ) ).toHaveLength( 2 ) 
   
  } )

  test( "handles error state", async () => {
    // Mock API error
    ( useGetAllInvestorsQuery as jest.Mock ).mockReturnValue( {
      data: null,
      error: true,
      isLoading: false,
    } )

    render( <App /> )

    expect( screen.getByText( "Network error. Please try again later." ) ).toBeInTheDocument()
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
