import { createAction, props } from '@ngrx/store';

export const loadReportExpenses = createAction(
  '[ReportExpense] Load ReportExpenses'
);

export const loadReportExpensesSuccess = createAction(
  '[ReportExpense] Load ReportExpenses Success',
  props<{ data: any }>()
);

export const loadReportExpensesFailure = createAction(
  '[ReportExpense] Load ReportExpenses Failure',
  props<{ error: any }>()
);
