import { Injectable } from '@angular/core';
import { ReportExpenseItem } from '@models/report-expense/report-expense-item';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '@services/api/api.service';
import { ReportExpenseApiService } from '@services/api/report-expense-api.service';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ReportExpenseActions from './report-expense.actions';

@Injectable()
export class ReportExpenseEffects {

	loadReportExpenses$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReportExpenseActions.loadReportExpenses),
			concatMap((action) =>
				/** An EMPTY observable only emits completion. Replace with your own observable API request */
				this.reportExpenseApiService.getReportExpenseData(action.startDate, action.endDate).pipe(
					map((reportExpenseItems: ReportExpenseItem[]) => ReportExpenseActions.loadReportExpensesSuccess({ reportExpenseItems })),
					catchError((error) => of(ReportExpenseActions.loadReportExpensesFailure({ error })))
				)
			)
		);
	});

	constructor(private actions$: Actions, private reportExpenseApiService: ReportExpenseApiService) {}
}
