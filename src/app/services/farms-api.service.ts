import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FarmsApiService {

  private farmsApiPath: string = '../assets/json/farms/api.json'

  constructor(private http: HttpClient) { }

  getApiFarms(): Observable<any> {
    return this.http.get(this.farmsApiPath)
  }

}
