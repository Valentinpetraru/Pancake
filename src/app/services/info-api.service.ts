import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class InfoApiService {


  obs$ = new BehaviorSubject('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&sparkline=false')

  public search = ''
  public res: any;
  constructor(private http: HttpClient) { }

  getInfoAPi(): Observable<any> {
    return this.http.get('https://api.pancakeswap.info/api/v2/pairs');
  }

  requestInfoApi(): any {
    this.obs$.subscribe((data: string) => {
      return this.http.get(data);
    })
  }

  requestInfoApi2(): any {

    this.res = this.http.get(this.search)

  }

}