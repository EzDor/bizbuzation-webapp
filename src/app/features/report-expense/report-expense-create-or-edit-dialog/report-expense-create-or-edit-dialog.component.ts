import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-report-expense-create-or-edit-dialog',
	templateUrl: './report-expense-create-or-edit-dialog.component.html',
	styleUrls: ['./report-expense-create-or-edit-dialog.component.scss'],
})
export class ReportExpenseCreateOrEditDialogComponent {
	constructor(public dialogRef: MatDialogRef<ReportExpenseCreateOrEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

  types = [
    {value: 'One-1', viewValue: 'One'},
    {value: 'Two-2', viewValue: 'Two'},
    {value: 'Three-3', viewValue: 'Three'},
  ];

  subtypes = [
    {value: 'One-1', viewValue: 'One'},
    {value: 'Two-2', viewValue: 'Two'},
    {value: 'Three-3', viewValue: 'Three'},
  ];

  accounts = [
    {value: 'One-1', viewValue: 'First Account'},
    {value: 'Two-2', viewValue: 'Second Account'},
    {value: 'Three-3', viewValue: 'Third Account'},
  ];
};


