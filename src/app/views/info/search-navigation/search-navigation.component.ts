import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';
import { debounceTime, takeLast } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

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
  constructor(private infoApi: InfoApiService) { }

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
      console.log('added', obj.id)
      obj.watchList = false;
      this.watchList.push({ ...obj });

      console.log(this.watchList.length)
    } else {
      console.log('removed', obj.id)
      let index = this.watchList.findIndex((item: any) => item.id === obj.id);
      this.watchList.splice(index, 1);
      obj.watchList = true;

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

