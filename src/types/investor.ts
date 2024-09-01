import { PaginationParams } from "./pagination"

export interface AdditionalInfo {
  website: string;
  foundedYear: number;
}

export interface Investments {
  total: number;
  recent: number;
}

export interface Portfolio {
  total: number;
  active: number;
}

export interface Investor {
  id: number;
  investor: {
    name: string;
    isInvestorApproved: boolean;
    image: string;
    additionalInfo: AdditionalInfo;
  };
  hq: string;
  contact: string;
  notes: string;
  investments: number;
  portfolio: number;
}

export interface InvestorData {
  id: number;
  investor: {
    name: string;
    isInvestorApproved: boolean;
    image: string;
    additionalInfo: AdditionalInfo;
  };
  hq: string;
  contact: string;
  notes: string;
  investments: Portfolio;
  portfolio: Investments;
}

export interface Investors extends PaginationParams {
  investors: Investor[];
}

export interface InvestorsResponse extends PaginationParams {
  investors: InvestorData[];
}
