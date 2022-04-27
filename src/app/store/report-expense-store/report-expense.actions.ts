import { ReportExpenseItem } from '@models/report-expense/report-expense-item';
import { createAction, props } from '@ngrx/store';

export const loadReportExpenses = createAction('[ReportExpense] Load ReportExpenses', props<{ startDate: Date; endDate: Date }>());

export const loadReportExpensesSuccess = createAction(
	'[ReportExpense] Load ReportExpenses Success',
	props<{ reportExpenseItems: ReportExpenseItem[] }>()
);

export const loadReportExpensesFailure = createAction('[ReportExpense] Load ReportExpenses Failure', props<{ error: any }>());
