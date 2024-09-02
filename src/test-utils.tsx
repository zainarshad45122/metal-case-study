import { ThemeProvider } from "@mui/material/styles"
import { render, RenderOptions } from "@testing-library/react"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"

import { store } from "./redux/store" 
import theme from "./theme/theme"

interface AllProvidersProps {
  children: ReactNode;
}

const AllProviders: React.FC<AllProvidersProps> = ( { children } ) => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
    </Provider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render( ui, { wrapper: AllProviders, ...options } )

export * from "@testing-library/react"

export { customRender as render }
