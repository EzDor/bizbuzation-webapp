import { ColumnDef } from '@models/app-data-table/columnDef';
import { SelectDef } from '@models/app-data-table/select-def';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { ReportExpenseDateRangeType } from '@models/report-expense/report-expense-date-range-type';

export class ReportExpenseConstants {
	public static readonly columnDefs: ColumnDef<ReportExpenseItem>[] = [
		{ header: 'Date', columnDef: 'date', cell: (report) => report.date.toDateString() },
		{ header: 'Amount', columnDef: 'amount', cell: (report) => report.amount },
		{ header: 'Account', columnDef: 'account', cell: (report) => report.account },
		{ header: 'Type', columnDef: 'type', cell: (report) => report.type },
		{ header: 'Subtype', columnDef: 'subtype', cell: (report) => report.subtype },
		{ header: 'Comment', columnDef: 'comment', cell: (report) => report.comment },
	];

	public static readonly dateSelect: SelectDef = {
		title: 'Date',
		items: [
			{ value: ReportExpenseDateRangeType.thisMonth, displayName: 'This Month' },
			{ value: ReportExpenseDateRangeType.lastMonth, displayName: 'Last Month' },
			{ value: ReportExpenseDateRangeType.twoMonthsAgo, displayName: '2 Months Ago' },
			{ value: ReportExpenseDateRangeType.threeMonthsAgo, displayName: '3 Months Ago' },
		],
	};
}
