import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'cake-search-navigation',
  templateUrl: './search-navigation.component.html',
  styleUrls: ['./search-navigation.component.css']
})
export class SearchNavigationComponent implements OnInit {


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

    this.arr = this.infoApi.requestInfoApi2().pipe(debounceTime(1000))
    this.arr.subscribe((data: any) => {
      console.log(data)
    })

  }

}

