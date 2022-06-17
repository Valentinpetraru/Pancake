import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmsPoolsFiltersToolbarService {

  public search$: any = new BehaviorSubject('');
  public selectedOptionsFilter: any = new BehaviorSubject([]);


  constructor() {

  }
}
