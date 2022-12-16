import { DateRange } from '@models/api-forms/date-range';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { createAction, props } from '@ngrx/store';

export const loadReportExpenses = createAction('[ReportExpense] Load ReportExpenses', props<DateRange>());

export const loadReportExpensesSuccess = createAction(
	'[ReportExpense] Load ReportExpenses Success',
	props<{ reportExpenseItems: ReportExpenseItem[] }>()
);

export const loadReportExpensesFailure = createAction('[ReportExpense] Load ReportExpenses Failure', props<{ error: any }>());

export const createReportExpenses = createAction(
	'[ReportExpense] Create ReportExpenses',
	props<{ reportExpenseItem: ReportExpenseItem }>()
);

export const createReportExpensesSuccess = createAction(
	'[ReportExpense] Create ReportExpenses Success',
	props<{ reportExpenseItem: ReportExpenseItem }>()
);

export const createReportExpensesFailure = createAction('[ReportExpense] Load ReportExpenses Failure', props<{ error: any }>());
