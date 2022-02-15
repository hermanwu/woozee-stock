import { Fact } from 'src/app/risks/models/fact.model';
import { EarningsReport } from 'src/app/stock/models/earnings.model';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';

export class FactsService {
  stock: StockAnalysis;
  earningsReport: EarningsReport;
  facts: Fact[] = [];

  constructor(stock: StockAnalysis) {
    this.stock = stock;
  }

  generateFacts(): void {}
}
