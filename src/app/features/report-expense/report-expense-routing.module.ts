import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportExpenseConstantContainerComponent } from '@features/report-expense/report-expense-constant-container/report-expense-constant-container.component';
import { ReportExpenseDataContainerComponent } from '@features/report-expense/report-expense-data-container/report-expense-data-container.component';
import { RoutePathConstant } from '@models/route-path-constant';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: RoutePathConstant.REPORT_EXPENSE_DATA_ROUTE,
				component: ReportExpenseDataContainerComponent,
			},
			{
				path: RoutePathConstant.REPORT_EXPENSE_CONSTANT_ROUTE,
				component: ReportExpenseConstantContainerComponent,
			},
			{
				path: '**',
				redirectTo: RoutePathConstant.REPORT_EXPENSE_DATA_ROUTE,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ReportExpenseRoutingModule {}
