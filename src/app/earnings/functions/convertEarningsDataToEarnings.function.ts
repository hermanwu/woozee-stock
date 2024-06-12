import { Earnings } from 'src/app/mock-data/earnings.mock';
import { TimeFrame } from 'src/app/shared/components/stats-display/stats-display.interface';
import { Earnings_Data } from '../types/earnings_data.type';

export const convertEarningsDataToEarnings = (
  earningsData: Earnings_Data
): Earnings => {
  return {
    endDate: earningsData.end_date,
    data: {
      revenues: {
        name: earningsData?.financials?.income_statement?.revenues?.label,
        value: earningsData?.financials?.income_statement?.revenues?.value,
        unit: earningsData?.financials?.income_statement?.revenues?.unit,
        timeFrame: TimeFrame.yoy,
      },
      grossProfit: {
        name: earningsData?.financials?.income_statement?.gross_profit?.label,
        value: earningsData?.financials?.income_statement?.gross_profit?.value,
        unit: earningsData?.financials?.income_statement?.gross_profit?.unit,
        timeFrame: TimeFrame.yoy,
      },
      operatingIncome: {
        name: earningsData?.financials?.income_statement?.operating_income_loss
          ?.label,
        value:
          earningsData?.financials?.income_statement?.operating_income_loss
            ?.value,
        unit: earningsData?.financials?.income_statement?.operating_income_loss
          ?.unit,
        timeFrame: TimeFrame.yoy,
      },
      netIncome: {
        name: earningsData?.financials?.income_statement?.net_income_loss
          ?.label,
        value:
          earningsData?.financials?.income_statement?.net_income_loss?.value,
        unit: earningsData?.financials?.income_statement?.net_income_loss?.unit,
        timeFrame: TimeFrame.yoy,
      },
    },
  };
};
