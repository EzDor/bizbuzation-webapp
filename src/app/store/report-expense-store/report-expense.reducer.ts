import { createReducer, on } from '@ngrx/store';
import { reportExpenseEntityAdapter, reportExpenseInitialState } from '@store/report-expense-store/report-expense-state';
import * as ReportExpenseActions from './report-expense.actions';

export const reportExpenseReducer = createReducer(
	reportExpenseInitialState,

	on(ReportExpenseActions.loadReportExpenses, (state) => ({
		...state,
		isLoading: true,
	})),

	on(ReportExpenseActions.loadReportExpensesSuccess, (state, action) => {
		const accounts = [...new Set(action.reportExpenseItems.map((item) => item.account))];
		return reportExpenseEntityAdapter.setAll(action.reportExpenseItems, {
			...state,
			isLoading: false,
			error: null,
			accounts,
		});
	}),

	on(ReportExpenseActions.loadReportExpensesFailure, (state, action) => ({
		...state,
		isLoading: false,
		error: action.error,
	})),

  on(ReportExpenseActions.createReportExpensesSuccess, (state, action) => {
    return reportExpenseEntityAdapter.addOne(action.reportExpenseItem, {
      ...state
    })
  }),

  on(ReportExpenseActions.createReportExpensesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
