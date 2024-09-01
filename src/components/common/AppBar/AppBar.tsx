import SearchIcon from "@mui/icons-material/Search"
import { Typography } from "@mui/material"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Box from "@mui/material/Box" // Import Box for layout
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem" // Import MenuItem for dropdown
import Select from "@mui/material/Select" // Import Select for dropdown
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Toolbar from "@mui/material/Toolbar"
import React from "react"

import {
  DocumentationIcon,
  MenuFilterIcon,
  MenuSettingsIcon,
  MetalLogo,
  NotificationIcon,
  UserAccountIcon } from "../../../assets/index"

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled( MuiAppBar, {
  shouldForwardProp: ( prop ) => prop !== "open",
} )<AppBarProps>( ( { theme, open } ) => ( {
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create( [ "width", "margin" ], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  } ),
  ...( open && {
    width: `calc(100% - ${ drawerWidth }px)`,
    transition: theme.transitions.create( [ "width", "margin" ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    } ),
  } ),
  boxShadow: "none",
} ) )

export default function PrimaryAppBar( {
  open,
  handleDrawerOpen,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
} ) {
  const [ dropdownValue, setDropdownValue ] = React.useState( "8Base" )

  const handleDropdownChange = ( event: React.ChangeEvent<{ value: unknown }> ) => {
    setDropdownValue( event.target.value as string )
  }

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
              fontFamily: "Circular Std", // Custom font family
              fontSize: "12px", // Custom font size
              fontWeight: 450, // Custom font weight
              lineHeight: "18px", // Custom line height
              textAlign: "left", // Custom text alignment
              marginTop: -2,
            } }
          >
            { "Powered by Crunchbase" }
          </Typography>
        </Box>

        <TextField
          variant="outlined"
          placeholder="Click Alt + K to start searching"
          sx={ {
           
            backgroundColor: "white",
            borderRadius: "12px",
            width: "460px", // Updated width for consistency with the design
            height: "45px", // Decrease height to 33px
            padding: "6px 8px 6px 16px", // Adjust padding to align with the new height
            "& input": {
              color: ( theme ) => theme.palette.text.primary,
              padding: "6px 0", // Adjust padding for input field to vertically center text
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "& .MuiInputBase-input::placeholder": {
                color: ( theme ) => theme.palette.text.primary,
                opacity: 1,
              },
              paddingRight: "8px", // Ensuring end adornment (icon) is properly aligned
            },
          } }
          InputProps={ {
            endAdornment: (
              <IconButton sx={ { color: "text.primary", padding: "0 6px" } }>
                <SearchIcon />
              </IconButton>
            ),
          } }
        />

        <Box sx={ { display: "flex", alignItems: "center", marginLeft: "auto" } }>
          { [
            { title: "Filter", icon: MenuFilterIcon },
            { title: "Documentation", icon: DocumentationIcon },
            { title: "User", icon: UserAccountIcon },
            { title: "Notification", icon: NotificationIcon },
            { title: "Settings", icon: MenuSettingsIcon },
          ].map( ( item ) => (
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
