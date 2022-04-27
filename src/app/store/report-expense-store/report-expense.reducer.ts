import { createReducer, on } from '@ngrx/store';
import { reportExpenseEntityAdapter, reportExpenseInitialState } from '@store/report-expense-store/report-expense-state';
import * as ReportExpenseActions from './report-expense.actions';

export const reportExpenseReducer = createReducer(
	reportExpenseInitialState,

	on(ReportExpenseActions.loadReportExpenses, (state) => ({
		...state,
		isLoading: true,
	})),

	on(ReportExpenseActions.loadReportExpensesSuccess, (state, action) =>
		reportExpenseEntityAdapter.setAll(action.reportExpenseItems, {
			...state,
			isLoading: false,
			error: null,
		})
	),

	on(ReportExpenseActions.loadReportExpensesFailure, (state, action) => ({
		...state,
		isLoading: false,
		error: action.error,
	}))
);
