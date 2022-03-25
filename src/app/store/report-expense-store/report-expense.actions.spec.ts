import * as fromReportExpense from './report-expense.actions';

describe('loadReportExpenses', () => {
  it('should return an action', () => {
    expect(fromReportExpense.loadReportExpenses().type).toBe('[ReportExpense] Load ReportExpenses');
  });
});
