import { Component } from '@angular/core';
import { ExpenseType } from '@models/expense-type';

@Component({
	templateUrl: './report-expense-data-container.component.html',
})
export class ReportExpenseDataContainerComponent {
	public expenseType = ExpenseType.expenseData;
	constructor() {}
}
