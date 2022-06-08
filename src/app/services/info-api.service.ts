
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, pipe } from 'rxjs';




;





@Injectable({
  providedIn: 'root'
})
export class InfoApiService {


  obj3$ = new BehaviorSubject('[]')



  obs$ = new BehaviorSubject('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&sparkline=false')

  public search = ''
  public res: any;
  constructor(private http: HttpClient) { }


  getTopPoolsApi(): Observable<any> {
    return this.http.get<any[]>('https://api.pancakeswap.info/api/v2/pairs')
  }

  getInfoAPi(): Observable<any> {
    return this.http.get('https://api.pancakeswap.info/api/v2/pairs');
  }

  requestInfoApi(): any {
    this.obs$.subscribe((data: string) => {
      return this.http.get(data);
    })
  }

  requestInfoApi2(): any {


    return this.http.get(this.search)
      .pipe(

        delay(5000)
      )

    this.res = this.http.get(this.search)


  }
}

