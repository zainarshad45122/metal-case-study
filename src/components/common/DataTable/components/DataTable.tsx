import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import React from "react"

interface DataTableProps {
  rows: any[]
  columns: GridColDef[]
  pageSize: number
  pagination: boolean
  rowsPerPageOptions: number[]
  paginationMode: "server" | "client"
  onPageSizeChange: ( newPageSize: number ) => void
  onPageChange: ( newPage: number ) => void
  rowCount: number
  loading: boolean
}

const DataTable: React.FC<DataTableProps> = ( {
  rows,
  columns,
  pageSize,
  rowsPerPageOptions,
  paginationMode,
  onPageSizeChange,
  onPageChange,
  rowCount,
  loading,
  pagination= true,
} ) => {
  return (
    <Box sx={ { height: 600, width: "100%" } }>
      <DataGrid
        rows={ rows }
        columns={ columns }
        pageSize={ pageSize }
        rowsPerPageOptions={ rowsPerPageOptions }
        pagination
        paginationMode={ paginationMode }
        onPageSizeChange={ onPageSizeChange }
        onPageChange={ onPageChange }
        rowCount={ rowCount }
        loading={ loading }
      />
    </Box>
  )
}

export default DataTable
