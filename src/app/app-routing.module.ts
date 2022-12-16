import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NotFoundComponent } from 'src/app/shell/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'report-expense',
		loadChildren: () => import('@features/report-expense/report-expense.module').then((m) => m.ReportExpenseModule),
		canActivate: [AuthGuard],
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
