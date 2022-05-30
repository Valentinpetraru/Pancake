import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmsPoolsFiltersToolbarService {

  search: Observable<string> = new BehaviorSubject('');
  constructor() { }
}
