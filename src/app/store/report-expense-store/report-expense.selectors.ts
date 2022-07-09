import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	reportExpenseEntityAdapter,
	reportExpenseFeatureKey,
	ReportExpenseRootState,
	ReportExpenseState,
} from '@store/report-expense-store/report-expense-state';
import * as fromReportExpense from './report-expense.reducer';

const { selectIds, selectEntities, selectAll, selectTotal } = reportExpenseEntityAdapter.getSelectors();

export const selectReportExpenseState = createFeatureSelector<ReportExpenseState>(reportExpenseFeatureKey);

export const selectIsLoadingReportExpense = createSelector(selectReportExpenseState, (state: ReportExpenseState) => state.isLoading);

export const selectAccountsReportExpense = createSelector(selectReportExpenseState, (state: ReportExpenseState) => state.accounts);

export const selectAllReportExpense = createSelector(selectReportExpenseState, selectAll);
