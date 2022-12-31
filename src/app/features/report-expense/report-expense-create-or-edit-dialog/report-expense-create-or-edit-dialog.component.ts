import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';

@Component({
	selector: 'app-report-expense-create-or-edit-dialog',
	templateUrl: './report-expense-create-or-edit-dialog.component.html',
	styleUrls: ['./report-expense-create-or-edit-dialog.component.scss'],
})
export class ReportExpenseCreateOrEditDialogComponent {
	public reportExpenseForm: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<ReportExpenseCreateOrEditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public reportExpenseData: ReportExpenseItem
	) {
		this.reportExpenseForm = new FormGroup({
			date: new FormControl(reportExpenseData.date, [Validators.required]),
			amount: new FormControl(reportExpenseData.amount, [Validators.required]),
			account: new FormControl(reportExpenseData.account, [Validators.required]),
			type: new FormControl(reportExpenseData.type, [Validators.required]),
			subtype: new FormControl(reportExpenseData.subtype, [Validators.required]),
			comment: new FormControl(reportExpenseData.comment),
		});
	}

	public closeDialog() {
		this.dialogRef.close();
	}

	public onSubmit() {
		this.dialogRef.close(this.reportExpenseForm.value);
	}

	types = [
		{ value: 'One-1', viewValue: 'One' },
		{ value: 'Two-2', viewValue: 'Two' },
		{ value: 'Three-3', viewValue: 'Three' },
	];

	subtypes = [
		{ value: 'One-1', viewValue: 'One' },
		{ value: 'Two-2', viewValue: 'Two' },
		{ value: 'Three-3', viewValue: 'Three' },
	];

	accounts = [
		{ value: 'One-1', viewValue: 'First Account' },
		{ value: 'Two-2', viewValue: 'Second Account' },
		{ value: 'Three-3', viewValue: 'Third Account' },
	];
}
