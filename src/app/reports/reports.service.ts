import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


export class ReportsService {
    constructor(private http: HttpClient) { }

    getAllReports(): Observable<any> {
        const httpParams = new HttpParams()
        return  this.http.get('/runreports/FullReportList?genericResultSet=false&parameterType=true');
    }
    getClientsReports():Observable<any>{
        const httpParams = new HttpParams()
        return this.http.get('/runreports/reportCategoryList?R_reportCategory=Client&genericResultSet=false&parameterType=true');
    }
    getLoansReports():Observable<any>{
        const httpParams = new HttpParams()
        return this.http.get('/runreports/reportCategoryList?R_reportCategory=Loan&genericResultSet=false&parameterType=true');
    }
    getSavingsReports():Observable<any>{
        const httpParams = new HttpParams()
        return this.http.get('/runreports/reportCategoryList?R_reportCategory=Savings&genericResultSet=false&parameterType=true');
    }
    getFundsReports():Observable<any>{
        const httpParams = new HttpParams()
        return this.http.get('/runreports/reportCategoryList?R_reportCategory=Fund&genericResultSet=false&parameterType=true');
    }
    getAccountingReports():Observable<any>{
        const httpParams = new HttpParams()
        return this.http.get('/runreports/reportCategoryList?R_reportCategory=Accounting&genericResultSet=false&parameterType=true');
    }


}