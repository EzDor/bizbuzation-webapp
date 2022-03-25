import { ReportExpenseItem } from '@models/report-expense/report-expense-item';
import { EntityState } from '@ngrx/entity';

export const reportExpenseFeatureKey = 'reportExpense';

export interface ReportExpenseState extends EntityState<ReportExpenseItem> {
	isLoading: boolean;
  error: string;
  selectedItemId: number;
}

export const

export const initialReportExpenseState: ReportExpenseState = {
	account: '',
	amount: 0,
	date: undefined,
	subtype: '',
	type: '',
	comment: '',
};
