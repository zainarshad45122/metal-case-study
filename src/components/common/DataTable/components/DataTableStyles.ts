
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/system"
import { DataGrid } from "@mui/x-data-grid"

export const StyledTextField = styled( TextField )( ( { theme } ) => ( {
  marginLeft: "100px",
  backgroundColor: "white",
  borderRadius: "24px",
  borderColor: "#AAB0BF",
  width: "30%",
  height: "45px",
  padding: "2px 8px 6px 16px",
  "& input": {
    color: theme.palette.text,
    padding: "6px 0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#AAB0BF",
      opacity: 1,
    },
    paddingRight: "8px",
  },
} ) )
  
export const StyledIconButton = styled( IconButton )( {
  color: "text.primary",
} )

export const DataGridWrapper = styled( "div" )( {
  height: 600,
  width: "100%",
  marginTop: -2,
} )

export const StyledButton = styled( Button )( ( { theme } ) => ( {
  borderColor: "#DAE4FE",
  borderRadius: "100px",
  color: "#AAB0BF",
  "&:hover": {
    borderColor: "#DAE4FE",
    backgroundColor: "transparent",
  },
  "& .MuiButton-endIcon": {
    marginLeft: theme.spacing( 1 ),
    "& img": {
      width: "24px",
      height: "24px",
    },
  },
} ) )

export const StyledStack = styled( Stack )( ( { theme } ) => ( {
  height: "66px",
  gap: "0px",
  borderRadius: "24px 24px 0px 0px",
  borderWidth: "1px 0px 0px 0px",
  borderStyle: "solid",
  borderColor: "transparent",
  opacity: 1,
  padding: theme.spacing( 2 ),
  paddingRight: theme.spacing( 4 ),
  backgroundColor: "#F5F8FF",
} ) )

export const StyledDataGrid = styled( DataGrid )( {
  height: 550,
 
  "& .MuiDataGrid-columnHeaders": {
    borderTop: "none", 
    borderBottom: "1px solid #DAE4FE",
  },
  "& .MuiDataGrid-columnHeader": {
    borderRight: "2px solid #DAE4FE",
  },
  
  "& .MuiDataGrid-cell:first-of-type": {
    borderRight: "2px solid #DAE4FE",
  },
  "& .MuiDataGrid-cell:last-of-type": {
    borderRight: "none",
  },
  "& .MuiDataGrid-columnHeader:last-child": {
    borderRight: "none",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-main": {
    border: "2px solid #DAE4FE",
  },

  "& .MuiDataGrid-row": {
    border: "1px solid #DAE4FE",
  },
} )
