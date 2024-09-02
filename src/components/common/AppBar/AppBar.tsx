import SearchIcon from "@mui/icons-material/Search"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Toolbar from "@mui/material/Toolbar"
import React from "react"

import { MetalLogo } from "../../../assets/index"
import { appBarItems } from "../../../utility/menuLists"
import { StyledIconButton } from "../DataTable/components/DataTableStyles"
import { AppBar, StyledTextField } from "./AppBarStyles"

export default function PrimaryAppBar( {
  open,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
} ) {
  const [ dropdownValue ] = React.useState( "8Base" )

  return (
    <AppBar position="fixed" open={ open }>
      <Toolbar>
        <Box display={ "flex" } flexDirection={ "column" }>
          <img
            srcSet={ MetalLogo }
            src={ MetalLogo }
            alt={ "Metal's Logo" }
            loading="lazy"
          />
          <Typography
            variant="subtitle1"
            component="h2"
            sx={ {
              fontSize: "12px",
              fontWeight: 450,
              lineHeight: "18px",
              textAlign: "left",
              marginTop: -2,
            } }
          >
            { "Powered by Crunchbase" }
          </Typography>
        </Box>

        <StyledTextField
          variant="outlined"
          placeholder="Click Alt + K to start searching"
          InputProps={ {
            endAdornment: (
              <StyledIconButton>
                <SearchIcon />
              </StyledIconButton>
            ),
          } }
        />

        <Box sx={ { display: "flex", alignItems: "center", marginLeft: "auto" } }>
          { appBarItems.map( ( item ) => (
            <IconButton color="inherit" key={ item.title } sx={ { marginRight: 2 } }>
              <img
                srcSet={ item.icon }
                src={ item.icon }
                alt={ item.title }
                loading="lazy"
              />
            </IconButton>
          ) ) }
          <Select
            value={ dropdownValue }
           
            variant="standard"
            sx={ {
              marginLeft: 1,
              color: "white",
              ".MuiSelect-icon": { color: "white" },
            } }
            disableUnderline
          >
            <MenuItem value="8Base">8Base</MenuItem>
            <MenuItem value="AnotherOption">Another Option</MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
