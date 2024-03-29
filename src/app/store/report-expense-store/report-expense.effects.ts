import { Injectable } from '@angular/core';
import { ReportExpenseItem } from '@models/api-forms/report-expense-item';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReportExpenseApiService } from '@services/api/report-expense-api.service';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { createReportExpensesSuccess, editReportExpensesSuccess } from './report-expense.actions';

import * as ReportExpenseActions from './report-expense.actions';

@Injectable()
export class ReportExpenseEffects {
	loadReportExpenses$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReportExpenseActions.loadReportExpenses),
			concatMap((action) =>
				this.reportExpenseApiService.getReportExpenseData(action.dateRange, action.expenseType).pipe(
					map((reportExpenseItems: ReportExpenseItem[]) => ReportExpenseActions.loadReportExpensesSuccess({ reportExpenseItems })),
					catchError((error) => of(ReportExpenseActions.loadReportExpensesFailure({ error })))
				)
			)
		);
	});

	createReportExpenses$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReportExpenseActions.createReportExpenses),
			concatMap((action) =>
				this.reportExpenseApiService.createReportExpense(action.reportExpenseItem, action.expenseType).pipe(
					map((reportExpenseItem: ReportExpenseItem) => createReportExpensesSuccess({ reportExpenseItem })),
					catchError((error) => of(ReportExpenseActions.createReportExpensesFailure({ error })))
				)
			)
		);
	});
	editReportExpenses$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(ReportExpenseActions.createReportExpenses),
			concatMap((action) =>
				this.reportExpenseApiService.createReportExpense(action.reportExpenseItem, action.expenseType).pipe(
					map((reportExpenseItem: ReportExpenseItem) =>
						editReportExpensesSuccess({
							update: {
								id: reportExpenseItem.id,
								changes: reportExpenseItem,
							},
						})
					),
					catchError((error) => of(ReportExpenseActions.editReportExpensesFailure({ error })))
				)
			)
		);
	});

	constructor(private actions$: Actions, private reportExpenseApiService: ReportExpenseApiService) {}
}
