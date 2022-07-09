import { DataSource } from '@angular/cdk/collections';
import {
	AfterContentInit,
	Component,
	ContentChild,
	ContentChildren,
	EventEmitter,
	Input,
	OnInit,
	Output,
	QueryList,
	ViewChild,
} from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable } from '@angular/material/table';
import { UnsubscribeSubject } from '@app/utils/unsubscribe-subject';
import { ColumnDef } from '@models/app-data-table/columnDef';
import { SelectDef } from '@models/app-data-table/select-def';
import { SelectItem } from '@models/app-data-table/select-item';
import { takeUntil } from 'rxjs/operators';

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

	@Output()
	public selectAction1: EventEmitter<SelectItem> = new EventEmitter<SelectItem>();
	@Output()
	public selectAction2: EventEmitter<SelectItem> = new EventEmitter<SelectItem>();

	public displayedColumns: string[];
	public selectControl1: FormControl;
	public selectControl2: FormControl;

	private unsubscribe$: UnsubscribeSubject = new UnsubscribeSubject();

	public ngAfterContentInit() {
		// this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
		// this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
		// this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
		// this.table.setNoDataRow(this.noDataRow);
	}

	public ngOnInit(): void {
		this.displayedColumns = this.columnDefs.map((col) => col.columnDef);
		this.initSelectControls();
	}

	get showSelect1(): boolean {
		return !!this.selectDef1;
	}

	get showSelect2(): boolean {
		return !!this.selectDef2;
	}

	private initSelectControls() {
		if (this.showSelect1) {
			this.selectControl1 = new FormControl(this.selectDef1.items[0]?.value || '', [Validators.required]);
			this.selectControl1.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
				this.selectAction1.emit(this.selectDef1.items.find((item) => item.value === value));
			});
		}
		if (this.showSelect2) {
			this.selectControl2 = new FormControl(this.selectDef2.items[0]?.value || '', [Validators.required]);
			this.selectControl2.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
				this.selectAction2.emit(this.selectDef2.items.find((item) => item.value === value));
			});
		}
	}

	public addButtonClicked() {
		console.log('Click me');
	}
}
