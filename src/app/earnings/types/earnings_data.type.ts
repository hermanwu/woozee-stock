export type Earnings_Data = {
  end_date: string;
  financials?: {
    income_statement?: {
      revenues?: {
        label?: string;
        value: number;
        unit?: string;
      };
      net_income_loss?: {
        label?: string;
        value: number;
        unit?: string;
      };
      operating_income_loss?: {
        label?: string;
        value: number;
        unit?: string;
      };
      gross_profit?: {
        label?: string;
        value: number;
        unit?: string;
      };
    };
  };
};
