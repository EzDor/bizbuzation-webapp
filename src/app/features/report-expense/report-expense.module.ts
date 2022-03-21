import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared/shared.module";

import { ReportExpenseRoutingModule } from './report-expense-routing.module';
import { ReportExpenseContainerComponent } from './report-expense-container/report-expense-container.component';


@NgModule({
  declarations: [
    ReportExpenseContainerComponent
  ],
  imports: [
    CommonModule,
    ReportExpenseRoutingModule,
    SharedModule
  ]
})
export class ReportExpenseModule { }
