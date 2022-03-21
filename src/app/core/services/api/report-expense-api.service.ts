import { Injectable } from '@angular/core';
import { CoreModule } from "@core/core.module";
import { ReportExpenseForm } from "@models/report-expense/report-expense-form";
import { ApiService } from "@services/api/api.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: CoreModule
})
export class ReportExpenseApiService {

  constructor(private apiService: ApiService) {
  }

  public getReportExpenseData(from: Date): Observable<ReportExpenseForm[]> {
    return of([]);
  }
}
