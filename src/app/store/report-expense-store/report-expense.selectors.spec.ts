import * as fromReportExpense from './report-expense.reducer';
import { selectReportExpenseState } from './report-expense.selectors';

describe('ReportExpense Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReportExpenseState({
      [fromReportExpense.reportExpenseFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
