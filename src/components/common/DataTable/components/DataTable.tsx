import { Box, Stack } from "@mui/material"
import { DataGrid, GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid"
import React, { useCallback, useRef, useState } from "react"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import {
  AddColumnIcon,
  ArrowDownwardIcon,
  EditColumnIcon,
  SearchTableIcon,
} from "../../../../assets"
import { DataGridWrapper, StyledButton, StyledDataGrid, StyledIconButton, StyledStack, StyledTextField } from "./DataTableStyles"

interface DataTableProps {
  rows: any[];
  columns: GridColDef[];
  pageSize: number;
  pagination: boolean;
  rowsPerPageOptions: number[];
  paginationMode: "server" | "client";
  onPageSizeChange: ( newPageSize: number ) => void;
  onPageChange: ( newPage: number ) => void;
  rowCount: number;
  loading: boolean;
}

interface DraggableColumnHeaderProps {
  column: GridColDef;
  index: number;
  moveColumn: ( dragIndex: number, hoverIndex: number ) => void;
}

const DraggableColumnHeader: React.FC<DraggableColumnHeaderProps> = ( {
  column,
  index,
  moveColumn,
} ) => {
  const ref = useRef<HTMLDivElement>( null )

  const [ { isDragging }, drag ] = useDrag( {
    type: "COLUMN",
    item: { index },
    collect: ( monitor ) => ( {
      isDragging: monitor.isDragging(),
    } ),
  } )

  const [ , drop ] = useDrop( {
    accept: "COLUMN",
    hover: ( item: { index: number }, monitor ) => {
      if( ! ref.current ) return

      const dragIndex = item.index
      const hoverIndex = index

      if( dragIndex === hoverIndex ) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleX
        = ( hoverBoundingRect.left + hoverBoundingRect.right ) / 2

      const clientOffset = monitor.getClientOffset()
      if( ! clientOffset ) return
      const hoverClientX = clientOffset.x

      if( dragIndex < hoverIndex && hoverClientX < hoverMiddleX ) return
      if( dragIndex > hoverIndex && hoverClientX > hoverMiddleX ) return

      moveColumn( dragIndex, hoverIndex )

      item.index = hoverIndex
    },
  } )

  drag( drop( ref ) )

  return (
    <div ref={ ref } style={ { opacity: isDragging ? 0.5 : 1, cursor: "move" } }>
      { column.headerName }
    </div>
  )
}

const DataTable: React.FC<DataTableProps> = ( {
  rows,
  columns: initialColumns,
  pageSize,
  rowsPerPageOptions,
  paginationMode,
  onPageSizeChange,
  onPageChange,
  rowCount,
  loading,
  pagination = true,
} ) => {
  const [ columns, setColumns ] = useState<GridColDef[]>( initialColumns )

  const moveColumn = useCallback(
    ( dragIndex: number, hoverIndex: number ) => {
      const newColumns = [ ...columns ]
      const [ draggedColumn ] = newColumns.splice( dragIndex, 1 )
      newColumns.splice( hoverIndex, 0, draggedColumn )
      setColumns( newColumns )
    },
    [ columns ]
  )

  return (
    <DndProvider backend={ HTML5Backend }>
      <Box sx={ { width: "100%" } }>
        <StyledStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={ 2 }
        >
         
          <StyledTextField
            fullWidth
            variant="outlined"
            placeholder="Search by key words"
            InputProps={ {
              endAdornment: (
                <StyledIconButton>
                  <img
                    srcSet={ SearchTableIcon }
                    src={ SearchTableIcon }
                    alt={ "Search" }
                    loading="lazy"
                  />
                </StyledIconButton>
              ),
            } }
          />

          <Stack direction="row" spacing={ 2 }>
           
            <StyledButton
              variant="outlined"
              endIcon={ <img
                srcSet={ ArrowDownwardIcon }
                src={ ArrowDownwardIcon }
                alt={ "Move Column" }
                loading="lazy"
              /> }
            >
              Move to
            </StyledButton>
            <StyledButton
              variant="outlined"
            >
              Delete
            </StyledButton>
      
            <img
              srcSet={ EditColumnIcon }
              src={ EditColumnIcon }
              alt={ "Edit Column" }
              loading="lazy"
            />
            <img
              srcSet={ AddColumnIcon }
              src={ AddColumnIcon }
              alt={ "Add Column" }
              loading="lazy"
            />
          </Stack>
        </StyledStack>

        <DataGridWrapper>
          <StyledDataGrid
            rows={ rows }
            columns={ columns.map( ( column, index ) => ( {
              ...column,
              renderHeader: ( params: GridColumnHeaderParams ) => (
                <DraggableColumnHeader
                  column={ params.colDef }
                  index={ index }
                  moveColumn={ moveColumn }
                />
              ),
            } ) ) }
            sx={ {
              border: 2,
              borderColor: "#DAE4FE",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            } }
            pageSize={ pageSize }
            rowsPerPageOptions={ rowsPerPageOptions }
            pagination
            paginationMode={ paginationMode }
            onPageSizeChange={ onPageSizeChange }
            onPageChange={ onPageChange }
            rowCount={ rowCount }
            loading={ loading }
          />
        </DataGridWrapper>
      </Box>
    </DndProvider>
  )
}

export default DataTable
