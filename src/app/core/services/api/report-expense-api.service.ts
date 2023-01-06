import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { DateRange } from '@models/api-forms/date-range';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { ExpenseType } from '@models/expense-type';
import { ApiService } from '@services/api/api.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: CoreModule,
})
export class ReportExpenseApiService {
	constructor(private apiService: ApiService) {}

	public getReportExpenseData(dateRange: DateRange, expenseType: ExpenseType): Observable<ReportExpenseItem[]> {
		const response: ReportExpenseItem[] = [];
		for (let i = 0; i < 15; i++) {
			response.push({
				id: i + 1,
				date: new Date(Date.now() + i * 1000 * 60 * 60 * 24),
				amount: Math.random() * 1000,
				account: i % 2 === 0 ? 'Shared' : 'Dor',
				type: 'Food',
				subtype: 'Grocery',
				comment: 'The brothers store',
			});
		}
		return of(response).pipe(delay(1000));
	}

	public createReportExpense(reportExpenseItem: ReportExpenseItem, expenseType: ExpenseType) {
		return of(reportExpenseItem);
	}

	public editReportExpense(reportExpenseItem: ReportExpenseItem, expenseType: ExpenseType) {
		return of(reportExpenseItem);
	}
}
