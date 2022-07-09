import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { selectAllReportExpense, selectIsLoadingReportExpense } from '@store/report-expense-store/report-expense.selectors';
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
  public accountSelectDef: SelectDef = {
    title: 'Account',
    items: [
      { value: 'all', displayName: 'All' },
    ],
  };

  private reportsData: ReportExpenseItem[] = [];
	private unsubscribe$: UnsubscribeSubject = new UnsubscribeSubject();

	constructor(private store: Store<RootState>) {}

	ngOnInit(): void {
		this.store.dispatch(loadReportExpenses(DateUtils.getDateRangeByType(ReportExpenseDateRangeType.thisMonth)));
		this.store.pipe(select(selectAllReportExpense), takeUntil(this.unsubscribe$)).subscribe((reports: ReportExpenseItem[]) => {
			this.reportsData = reports;
      this.displayedReportsData = reports;
		});
		this.store
			.pipe(select(selectIsLoadingReportExpense), takeUntil(this.unsubscribe$))
			.subscribe((isLoading) => (this.isLoading = isLoading));
	}

	ngOnDestroy(): void {
		this.unsubscribe$.cleanup();
	}

	public onDateChange(selectItem: SelectItem): void {
		this.store.dispatch(loadReportExpenses(DateUtils.getDateRangeByType(ReportExpenseDateRangeType[selectItem.value])));
	}

  public onAccountChange(selectItem: SelectItem): void {
    if(selectItem.value === 'all') {
      this.displayedReportsData = this.reportsData;
    }else {
      this.displayedReportsData = this.reportsData.filter((report) => report.account === selectItem.value);
    }

  }

  private initAccounts(): void {

  }
}
