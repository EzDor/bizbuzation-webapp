import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ReportExpenseRoutingModule } from './report-expense-routing.module';
import { ReportExpenseContainerComponent } from './report-expense-container/report-expense-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromReportExpense from '@store/report-expense-store/report-expense.reducer';
import { ReportExpenseEffects } from '@store/report-expense-store/report-expense.effects';

@NgModule({
	declarations: [ReportExpenseContainerComponent],
	imports: [
		CommonModule,
		ReportExpenseRoutingModule,
		SharedModule,
		StoreModule.forFeature(fromReportExpense.reportExpenseFeatureKey, fromReportExpense.reducer),
		EffectsModule.forFeature([ReportExpenseEffects]),
	],
})
export class ReportExpenseModule {}
