import { reportExpenseReducer, initialState } from './report-expense.reducer';

describe('ReportExpense Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reportExpenseReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
