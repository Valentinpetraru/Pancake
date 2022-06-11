import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';
import { debounceTime, subscribeOn, takeLast } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'cake-search-navigation',
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.css']
})
export class SearchNavigationComponent implements OnInit {


  public tokenList: any;
  addedWatchlist: boolean = false;

  toggleModalTable: boolean = false;

  public watchList: any = [];

  public tabOpened = true;

  img: string = '';
  searhcToken = ''
  arr: any = []
  constructor(private infoApi: InfoApiService, private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    // this.infoApi.requestInfoApi().subscribe((data: any) => {
    //   console.log(data)
    // })



  }

  callApiTest(event: any) {
    this.searhcToken = event.value
    this.infoApi.search = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.searhcToken}&sparkline=false`

    this.arr = this.infoApi.requestInfoApi2()
    this.arr.subscribe((data: any) => {
      if (data.length != 0 && data.length <= 1) {
        console.log(data)
        if (this.watchList.some((item: any) => item.id === data[0].id)) {
          data[0].watchList = true;
          this.tokenList = data;

        } else {
          this.tokenList = data;

        }
      }

    })


  }



  openModalTable() {
    document.body.style.overflow = 'hidden';
    this.toggleModalTable = true;
  }

  closeModalTable(event: any) {

    if (event.target === event.currentTarget) {
      this.toggleModalTable = false;
      document.body.style.overflow = 'visible';
    }

  }


  addWatchlist(obj: any) {

    if (!this.watchList.some((item: any) => item.id === obj.id)) {

      obj.watchList = true;
      // this.watchList.push({ ...obj });

      this.watchlistService.addToTokensWatchlist(obj);
      this.watchlistService.getTokens().subscribe((data: any) => {
        this.watchList = data;
      })

    } else {
      // let index = this.watchList.findIndex((item: any) => item.id === obj.id);

      // obj.watchList = false;
      this.tokenList.forEach((item: any) => {
        if (item.id === obj.id) {
          item.watchList = false;
        }
      });

      // this.watchList.splice(index, 1);
      this.watchlistService.removeTokensWatchlist(obj)


    }
  }



  switchTab(value: string) {
    if (value === 'watchList') {
      this.tabOpened = false;

    } else {
      this.tabOpened = true;

    }
  }



}

