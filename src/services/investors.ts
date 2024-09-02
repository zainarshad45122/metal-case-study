import { InvestorData, Investors, InvestorsResponse } from "../types/investor"
import { PaginationParams } from "../types/pagination"
import { investorsApi } from "./investorsApi"

const getAllInvestors = ( { page, limit }: PaginationParams ) => ( {
  url: `/investors?_limit=${ limit }&_page=${ page }`,
  method: "GET",
} )

const investors = investorsApi.injectEndpoints( {
  endpoints: ( build ) => ( {
    getAllInvestors: build.query<Investors, PaginationParams>( {
      query: getAllInvestors,
      transformResponse: ( response: InvestorsResponse ): Investors => ( {
        page: response.page,
        limit: response.limit,
        totalCount: response.totalCount,
        investors: response.investors.map( ( investor : InvestorData ) => ( {
          id: investor.id,
          investor: {
            name: investor.investor.name,
            isInvestorApproved: investor.investor.isInvestorApproved,
            image: investor.investor.image,
            additionalInfo: investor.investor.additionalInfo,
          },
          hq: investor.hq,
          contact: investor.contact,
          notes: investor.notes,
          investments: investor.investments.total,
          portfolio: investor.portfolio.total,
        } ) ),
 
      } ),
    } ),
  } ),
  overrideExisting: true,
} )

export const {
  useGetAllInvestorsQuery,
} = investors
