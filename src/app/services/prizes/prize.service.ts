import { Injectable } from '@angular/core';
import { ITeams } from 'src/app/models/Teams';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {

  constructor(private httpClient : HttpClient) { }



  getTeamOne(): Observable<any>{
  return this.httpClient.get('../assets/json/comp.json').pipe(
  )}


}
