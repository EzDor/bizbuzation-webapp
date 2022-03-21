import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportExpenseContainerComponent } from "@features/report-expense/report-expense-container/report-expense-container.component";


const routes: Routes = [
  {
    path: '',
    component: ReportExpenseContainerComponent,
    children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportExpenseRoutingModule {
}
