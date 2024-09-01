import { screen } from "@testing-library/react"

import { render } from "../../../test-utils"
import SideBar from "./SideBar"

describe( "SideBar Component", () => {
  test( "renders sidebar content correctly", () => {
    render(
      <SideBar open={ true } onMenuClick={ jest.fn() }>
        <div>Sidebar Content</div>
      </SideBar>
    )

    expect( screen.getByText( "Sidebar Content" ) ).toBeInTheDocument()
  } )
} )
