import { Action, createReducer, on } from '@ngrx/store';
import * as ReportExpenseActions from './report-expense.actions';

export const reducer = createReducer(
  initialState,

  on(ReportExpenseActions.loadReportExpenses, state => state),
  on(ReportExpenseActions.loadReportExpensesSuccess, (state, action) => state),
  on(ReportExpenseActions.loadReportExpensesFailure, (state, action) => state),

);
