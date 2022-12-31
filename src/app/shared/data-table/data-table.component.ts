import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { UnsubscribeSubject } from '@app/utils/unsubscribe-subject';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { ColumnDef } from '@models/app-data-table/columnDef';
import { SelectDef } from '@models/app-data-table/select-def';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent<T> implements OnInit {
	// @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
	// @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
	// @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
	// @ContentChild(MatNoDataRow) noDataRow: MatNoDataRow;

	@ViewChild(MatTable)
	public table: MatTable<T>;
	@Input()
	public columnDefs: ColumnDef<T>[] = [];
	@Input()
	public dataSource: T[];
	@Input()
	public selectDef1: SelectDef;
	@Input()
	public selectedIndex1: number;
	@Input()
	public selectDef2: SelectDef;
	@Input()
	public selectedIndex2: number;
	@Input()
	public selectControl1: FormControl;
	@Input()
	public selectControl2: FormControl;

	@Output()
	public onAddButtonClickEvent = new EventEmitter<void>();

	@Output()
	public onRowClickEvent = new EventEmitter<ReportExpenseItem>();

	public displayedColumns: string[];

	private unsubscribe$: UnsubscribeSubject = new UnsubscribeSubject();

	public ngAfterContentInit() {
		// this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
		// this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
		// this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
		// this.table.setNoDataRow(this.noDataRow);
	}

	public ngOnInit(): void {
		this.displayedColumns = this.columnDefs.map((col) => col.columnDef);
	}

	get showSelect1(): boolean {
		return !!this.selectDef1;
	}

	get showSelect2(): boolean {
		return !!this.selectDef2;
	}

	public addButtonClick() {
		this.onAddButtonClickEvent.emit();
	}

	public onRowClick(row) {
		this.onRowClickEvent.emit(row);
	}
}
