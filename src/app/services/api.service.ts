import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private farmsApiPath: string = '../assets/json/farms/api.json';

  private transactionsApiPath: string = '../assets/json/farms/transactions.json'

  constructor(private http: HttpClient) { }

  getApiFarms(): Observable<any> {
    return this.http.get(this.farmsApiPath)
  }

  getTransactionsApi(): Observable<any> {
    return this.http.get(this.transactionsApiPath);
  }

}
