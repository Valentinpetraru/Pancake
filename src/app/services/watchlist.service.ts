import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {


  public tokenList: any = []
  public poolList: any = []

  public watchlistTokens = new BehaviorSubject<any>([]);
  public watchlistPools = new BehaviorSubject<any>([]);

  constructor() { }

  getTokens(): any {
    return this.watchlistTokens.asObservable();
  }


  getPools(): any {
    return this.watchlistTokens.asObservable();
  }

  addToTokensWatchlist(item: any): void {
    this.tokenList.push({ ...item });
    this.watchlistTokens.next(this.tokenList)
  }

  addToPoolsWatchlist(item: any): void {
    this.poolList.push(...item);
    this.watchlistPools.next(this.tokenList)
  }

  removeTokensWatchlist(obj: any): void {
    let index = this.tokenList.findIndex((item: any) => item.id === obj.id);
    this.tokenList.splice(index, 1);

  }
}
