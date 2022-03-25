import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ReportExpenseActions from './report-expense.actions';



@Injectable()
export class ReportExpenseEffects {

  loadReportExpenses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ReportExpenseActions.loadReportExpenses),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ReportExpenseActions.loadReportExpensesSuccess({ data })),
          catchError(error => of(ReportExpenseActions.loadReportExpensesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
