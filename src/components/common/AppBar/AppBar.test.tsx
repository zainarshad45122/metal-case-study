import { fireEvent, render, screen } from "@testing-library/react"

import { appBarItems } from "../../../utility/menuLists"
import PrimaryAppBar from "./AppBar"

// Mock appBarItems array
jest.mock( "../../../utility/menuLists", () => ( {
  appBarItems: [
    { title: "Item1", icon: "path/to/icon1.svg" },
    { title: "Item2", icon: "path/to/icon2.svg" },
  ],
} ) )

describe( "PrimaryAppBar", () => {
  const handleDrawerOpen = jest.fn()

  test( "renders the app bar with logo and text", () => {
    render( <PrimaryAppBar open={ true } handleDrawerOpen={ handleDrawerOpen } /> )

    // Check if logo and text are rendered
    expect( screen.getByAltText( "Metal's Logo" ) ).toBeInTheDocument()
    expect( screen.getByText( "Powered by Crunchbase" ) ).toBeInTheDocument()
  } )

  test( "renders app bar items as icons", () => {
    render( <PrimaryAppBar open={ true } handleDrawerOpen={ handleDrawerOpen } /> )

    // Check if each item in appBarItems is rendered as an icon button
    appBarItems.forEach( item => {
      expect( screen.getByAltText( item.title ) ).toBeInTheDocument()
    } )
  } )

  test( "renders dropdown menu with options", () => {
    render( <PrimaryAppBar open={ true } handleDrawerOpen={ handleDrawerOpen } /> )

    // Check if select element is rendered and has correct value
    const selectElement = screen.getByRole( "combobox" )
    expect( selectElement ).toBeInTheDocument()

    // Open dropdown and check menu items
    fireEvent.mouseDown( selectElement )
    expect( screen.getByText( "Another Option" ) ).toBeInTheDocument()
  } )
} )
