import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UnsubscribeSubject } from '@app/utils/unsubscribe-subject';
import { ColumnDef } from '@models/app-data-table/columnDef';
import { ReportExpenseItem } from '@models/report-expense/report-expense-item';
import { select, Store } from '@ngrx/store';
import { DataTableComponent } from '@shared/data-table/data-table.component';
import { loadReportExpenses } from '@store/report-expense-store/report-expense.actions';
import { selectAllReportExpense, selectIsLoadingReportExpense } from '@store/report-expense-store/report-expense.selectors';
import { RootState } from '@store/root-state';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-report-expense-container',
	templateUrl: './report-expense-container.component.html',
	styleUrls: ['./report-expense-container.component.scss'],
})
export class ReportExpenseContainerComponent implements OnInit, OnDestroy {
	@ViewChild('dataTableComponent')
	public dataTableComponent: DataTableComponent<ReportExpenseItem>;

	public startDate: Date = new Date();
	public endDate: Date = new Date();
	public reportsData: ReportExpenseItem[] = [];
	public isLoading: boolean = true;
	public readonly columnDefs: ColumnDef<ReportExpenseItem>[] = [
		{ header: 'Date', columnDef: 'date', cell: (report) => report.date.toDateString() },
		{ header: 'Amount', columnDef: 'amount', cell: (report) => report.amount },
		{ header: 'Account', columnDef: 'account', cell: (report) => report.account },
		{ header: 'Type', columnDef: 'type', cell: (report) => report.type },
		{ header: 'Subtype', columnDef: 'subtype', cell: (report) => report.subtype },
		{ header: 'Comment', columnDef: 'comment', cell: (report) => report.comment },
	];

	private unsubscribe$: UnsubscribeSubject = new UnsubscribeSubject();

	constructor(private store: Store<RootState>) {}

	ngOnInit(): void {
		this.store.dispatch(loadReportExpenses({ startDate: this.startDate, endDate: this.endDate }));
		this.store.pipe(select(selectAllReportExpense), takeUntil(this.unsubscribe$)).subscribe((reports: ReportExpenseItem[]) => {
			this.reportsData = reports;
			console.log('Im here');
			console.log(reports);
		});
		this.store
			.pipe(select(selectIsLoadingReportExpense), takeUntil(this.unsubscribe$))
			.subscribe((isLoading) => (this.isLoading = isLoading));
	}

	ngOnDestroy(): void {
		this.unsubscribe$.cleanup();
	}
}
