import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReportExpense from './report-expense.reducer';

export const selectReportExpenseState = createFeatureSelector<fromReportExpense.ReportExpenseState>(
  fromReportExpense.reportExpenseFeatureKey
);
