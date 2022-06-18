import { DataSource } from "@angular/cdk/collections";
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild
} from "@angular/core";
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable } from "@angular/material/table";
import { ColumnDef } from "@models/app-data-table/columnDef";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
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

  public displayedColumns: string[];

  public ngAfterContentInit() {
    // this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    // this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    // this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    // this.table.setNoDataRow(this.noDataRow);
  }

  public ngOnInit(): void {
    this.displayedColumns = this.columnDefs.map(col => col.columnDef);
  }

  public addButtonClicked(){
    // print to console that clicked

    console.log("Click me");


  }


  ranges = [
    {value: 'This Month', viewValue: 'This Month'},
    {value: 'Previous Mons', viewValue: 'Previous Mons'},
    {value: '2 Month Ago', viewValue: '2 Month Ago'},
    {value: '3 Month Ago', viewValue: '3 Month Ago'},
  ];

  Accounts = [
    {value: 'Account 1', viewValue: 'Account 1'},
    {value: 'Account 2', viewValue: 'Account 2'},

  ];
}
