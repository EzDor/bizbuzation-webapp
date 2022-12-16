import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReportExpenseEffects } from './report-expense.effects';

xdescribe('ReportExpenseEffects', () => {
	let actions$: Observable<any>;
	let effects: ReportExpenseEffects;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ReportExpenseEffects, provideMockActions(() => actions$)],
		});

		effects = TestBed.inject(ReportExpenseEffects);
	});

	it('should be created', () => {
		expect(effects).toBeTruthy();
	});
});
