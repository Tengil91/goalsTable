export interface ICampaign {
  id: number,
  title: string,
  status: string,
  views: number,
  clickThroughs: number,
  ctr: number,
  conversions: number,
  conversionRate: number,
  dismissals: number,
  tags?: string[],
  expanded?: boolean
}

export interface ICampaigns {
  campaigns: ICampaign[]
}
