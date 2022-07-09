import { DateRange } from '@models/api-forms/date-range';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { createAction, props } from '@ngrx/store';

export const loadReportExpenses = createAction('[ReportExpense] Load ReportExpenses', props<DateRange>());

export const loadReportExpensesSuccess = createAction(
	'[ReportExpense] Load ReportExpenses Success',
	props<{ reportExpenseItems: ReportExpenseItem[] }>()
);

export const loadReportExpensesFailure = createAction('[ReportExpense] Load ReportExpenses Failure', props<{ error: any }>());
