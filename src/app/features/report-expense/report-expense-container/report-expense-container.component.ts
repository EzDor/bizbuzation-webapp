import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateUtils } from '@app/utils/date-utils';
import { UnsubscribeSubject } from '@app/utils/unsubscribe-subject';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { ColumnDef } from '@models/app-data-table/columnDef';
import { SelectDef } from '@models/app-data-table/select-def';
import { SelectItem } from '@models/app-data-table/select-item';
import { ReportExpenseConstants } from '@models/report-expense/report-expense-constants';
import { ReportExpenseDateRangeType } from '@models/report-expense/report-expense-date-range-type';
import { select, Store } from '@ngrx/store';
import { DataTableComponent } from '@shared/data-table/data-table.component';
import { loadReportExpenses } from '@store/report-expense-store/report-expense.actions';
import {
	selectAccountsReportExpense,
	selectAllReportExpense,
	selectIsLoadingReportExpense,
} from '@store/report-expense-store/report-expense.selectors';
import { RootState } from '@store/root-state';
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
	public displayedReportsData: ReportExpenseItem[] = [];
	public isLoading: boolean = true;
	public readonly columnDefs: ColumnDef<ReportExpenseItem>[] = ReportExpenseConstants.columnDefs;

	public readonly dateSelectDef: SelectDef = ReportExpenseConstants.dateSelect;
	public accountSelectDef: SelectDef;
	public dateSelectControl: FormControl;
	public accountSelectControl: FormControl;

	private reportsData: ReportExpenseItem[] = [];
	private unsubscribe$: UnsubscribeSubject = new UnsubscribeSubject();
	private readonly allAccountsKey = 'all';

	constructor(private store: Store<RootState>) {
		this.accountSelectDef = {
			title: 'Account',
			items: [{ value: this.allAccountsKey, displayName: 'All' }],
		};
		this.dateSelectControl = new FormControl(this.dateSelectDef.items[0].value, Validators.required);
		this.accountSelectControl = new FormControl(this.accountSelectDef.items[0].value, Validators.required);
	}

	ngOnInit(): void {
		this.store.dispatch(loadReportExpenses(DateUtils.getDateRangeByType(ReportExpenseDateRangeType.thisMonth)));
		this.subscribeStoreData();
		this.dateSelectControl.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
			this.onDateChange(value);
		});
		this.accountSelectControl.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
			this.onAccountChange(value);
		});
	}

	ngOnDestroy(): void {
		this.unsubscribe$.cleanup();
	}

	public onDateChange(selectItem: SelectItem): void {
		this.store.dispatch(loadReportExpenses(DateUtils.getDateRangeByType(ReportExpenseDateRangeType[selectItem.value])));
	}

	public onAccountChange(account: string): void {
		const isFilterRequired: boolean = account !== this.allAccountsKey;
		if (isFilterRequired) {
			this.displayedReportsData = this.reportsData.filter((report) => report.account === account);
		} else {
			this.displayedReportsData = this.reportsData.map((report) => report);
		}
	}

	public initTableData() {
		this.onAccountChange(this.accountSelectControl.value);
	}

	private initAccounts(accounts: string[]): void {
		const accountsForSelect: SelectItem[] = accounts.map((account) => ({ value: account, displayName: account }));
		this.accountSelectDef.items = [{ value: this.allAccountsKey, displayName: 'All' }, ...accountsForSelect];
	}

	private subscribeStoreData() {
		this.store.pipe(select(selectAllReportExpense), takeUntil(this.unsubscribe$)).subscribe((reports: ReportExpenseItem[]) => {
			this.reportsData = reports;
			this.initTableData();
		});
		this.store
			.pipe(select(selectIsLoadingReportExpense), takeUntil(this.unsubscribe$))
			.subscribe((isLoading) => (this.isLoading = isLoading));
		this.store.pipe(select(selectAccountsReportExpense), takeUntil(this.unsubscribe$)).subscribe((accounts: string[]) => {
			this.initAccounts(accounts);
		});
	}
}
