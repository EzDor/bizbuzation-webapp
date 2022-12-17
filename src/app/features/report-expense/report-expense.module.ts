import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { reportExpenseFeatureKey } from '@store/report-expense-store/report-expense-state';
import { reportExpenseReducer } from '@store/report-expense-store/report-expense.reducer';

import { ReportExpenseRoutingModule } from './report-expense-routing.module';
import { ReportExpenseContainerComponent } from './report-expense-container/report-expense-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReportExpenseEffects } from '@store/report-expense-store/report-expense.effects';
import { ReportExpenseCreateOrEditDialogComponent } from './report-expense-create-or-edit-dialog/report-expense-create-or-edit-dialog.component';
import { ReportExpenseDataContainerComponent } from './report-expense-data-container/report-expense-data-container.component';
import { ReportExpenseConstantContainerComponent } from './report-expense-constant-container/report-expense-constant-container.component';

@NgModule({
	declarations: [
		ReportExpenseContainerComponent,
		ReportExpenseCreateOrEditDialogComponent,
		ReportExpenseDataContainerComponent,
		ReportExpenseConstantContainerComponent,
	],
	imports: [
		CommonModule,
		ReportExpenseRoutingModule,
		SharedModule,
		StoreModule.forFeature(reportExpenseFeatureKey, reportExpenseReducer),
		EffectsModule.forFeature([ReportExpenseEffects]),
	],
})
export class ReportExpenseModule {}
