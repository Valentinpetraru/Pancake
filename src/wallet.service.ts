import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private displaySubject = new BehaviorSubject<boolean>(false);
  public display$= this.displaySubject.asObservable();

  connect(): void {
    this.displaySubject.next(true);
  }
  
  exit(): void {
    this.displaySubject.next(false);
  }

  getStatus(): Observable<boolean> {
    return this.display$;
  }

  constructor() { }
}
