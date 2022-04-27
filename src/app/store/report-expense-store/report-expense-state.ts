import { ReportExpenseItem } from '@models/report-expense/report-expense-item';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RootState } from "@store/root-state";

export const reportExpenseFeatureKey = 'reportExpense';

export interface ReportExpenseState extends EntityState<ReportExpenseItem> {
	isLoading: boolean;
	error: string | null;
	selectedItemId: number | null;
}

export interface ReportExpenseRootState extends RootState{
  reportExpense: ReportExpenseState
}

function selectReportId(reportExpenseItem: ReportExpenseItem): number {
	return reportExpenseItem.id;
}

function sortReportByDate(a: ReportExpenseItem, b: ReportExpenseItem): number {
	return a.date < b.date ? 1 : -1;
}

export const reportExpenseEntityAdapter: EntityAdapter<ReportExpenseItem> = createEntityAdapter<ReportExpenseItem>({
	selectId: selectReportId,
	sortComparer: sortReportByDate,
});

export const reportExpenseInitialState: ReportExpenseState = reportExpenseEntityAdapter.getInitialState({
	isLoading: true,
	error: null,
	selectedItemId: null,
});
