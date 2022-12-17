import { Component } from '@angular/core';
import { ExpenseType } from '@models/expense-type';

@Component({
	templateUrl: './report-expense-constant-container.component.html',
})
export class ReportExpenseConstantContainerComponent {
	public expenseType = ExpenseType.constantData;

	constructor() {}
}
