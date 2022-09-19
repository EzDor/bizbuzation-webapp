import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-report-expense-create-or-edit-dialog',
	templateUrl: './report-expense-create-or-edit-dialog.component.html',
	styles: ['./report-expense-create-or-edit-dialog.component.scss'],
})
export class ReportExpenseCreateOrEditDialogComponent {
	constructor(public dialogRef: MatDialogRef<ReportExpenseCreateOrEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
