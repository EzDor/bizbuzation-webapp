import { DateRange } from '@models/api-forms/date-range';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { ExpenseType } from '@models/expense-type';
import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const loadReportExpenses = createAction(
	'[ReportExpense] Load ReportExpenses',
	props<{ dateRange: DateRange; expenseType: ExpenseType }>()
);

export const loadReportExpensesSuccess = createAction(
	'[ReportExpense] Load ReportExpenses Success',
	props<{ reportExpenseItems: ReportExpenseItem[] }>()
);

export const loadReportExpensesFailure = createAction('[ReportExpense] Load ReportExpenses Failure', props<{ error: any }>());

export const createReportExpenses = createAction(
	'[ReportExpense] Create ReportExpenses',
	props<{ reportExpenseItem: ReportExpenseItem; expenseType: ExpenseType }>()
);

export const createReportExpensesSuccess = createAction(
	'[ReportExpense] Create ReportExpenses Success',
	props<{ reportExpenseItem: ReportExpenseItem }>()
);

export const createReportExpensesFailure = createAction('[ReportExpense] Create ReportExpenses Failure', props<{ error: any }>());

export const editReportExpenses = createAction(
	'[ReportExpense] Edit ReportExpenses',
	props<{ reportExpenseItem: ReportExpenseItem; expenseType: ExpenseType }>()
);

export const editReportExpensesSuccess = createAction(
	'[ReportExpense] Edit ReportExpenses Success',
	props<{ update: Update<ReportExpenseItem> }>()
);

export const editReportExpensesFailure = createAction('[ReportExpense] Edit ReportExpenses Failure', props<{ error: any }>());
