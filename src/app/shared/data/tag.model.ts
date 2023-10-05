export enum TagType {
  stockTicker = 'Stock Ticker',
  People = 'People',
  Stock = 'Stock',
  Market = 'Market',
  Industry = 'Industry',
  Group = 'Group',
}

export interface Tag {
  uuid: string;
  type?: TagType;
  displayName: string;
  imageLink?: string;
  link?: string;
  ticker?: string;
}

export enum ThesisType {
  profitability = 'Profitability', // 盈利能力
  catalysts = 'Catalysts', // 催化剂
  valuation = 'Valuation', // 估值
  risks = 'Risks', // 风险
  growth = 'Growth', // 成长性
  switchCost = 'Switching Costs', // 切换成本
  networkEffect = 'Network Effect', // 网络效应
  macroEnvironment = 'Macro Environment', // 宏观环境
  management = 'Management', // 管理层
  famousInvestor = 'Famous Investor', // 投资者
  news = 'News', // 新闻
}
