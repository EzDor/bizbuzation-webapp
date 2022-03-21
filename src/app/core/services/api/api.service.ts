import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';

@Injectable({ providedIn: CoreModule })
export class ApiService {
  constructor(private http: HttpClient) {}

  public get<T>(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${path}`, { params, headers });
  }

  public put<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl}${path}`, body);
  }

  public patch<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.patch<T>(`${environment.baseUrl}${path}`, body);
  }

  public post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.post<T>(`${environment.baseUrl}${path}`, body);
  }

  public delete<T>(path): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}${path}`);
  }
}
