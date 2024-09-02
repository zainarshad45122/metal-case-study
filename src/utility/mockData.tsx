import { GridColDef } from "@mui/x-data-grid"

export const mockRows = [
  { id: 1, investor: "Investor A", hq: "HQ A", contact: "Contact A", notes: "Notes A", investments: 10, portfolio: 5 },
  { id: 2, investor: "Investor B", hq: "HQ B", contact: "Contact B", notes: "Notes B", investments: 20, portfolio: 15 },
]
  
export const mockColumns: GridColDef[] = [
  { field: "investor", headerName: "Investor", width: 200 },
  { field: "hq", headerName: "Investor HQs", width: 200 },
  { field: "contact", headerName: "Contact Person", width: 150 },
  { field: "notes", headerName: "Notes", width: 250 },
  { field: "investments", headerName: "Lead Investments in Last 12 Months", type: "number", width: 250 },
  { field: "portfolio", headerName: "%age Portfolio Marked as Lead", type: "number", width: 250 },
]

export const mockInvestorsApi = {
  data: {
    investors: [
      {
        id: 1,
        investor: {
          name: "John Doe",
          isInvestorApproved: true,
          image: "url-to-image",
          additionalInfo: {
            website: "https://example.com",
            foundedYear: 2020,
          },
        },
        hq: "NYC",
        contact: "Jane Doe",
        notes: "Some notes",
        investments: 5,
        portfolio: 20,
      },
    ],
    totalCount: 1,
  },
  error: null,
  isLoading: false,
}
  
