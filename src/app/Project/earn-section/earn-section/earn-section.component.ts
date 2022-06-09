import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Farm, SyrupPool, Trade } from "../../../models/earn-section/trades";

@Component({
  selector: 'cake-earn-section',
  templateUrl: './earn-section.component.html',
  styleUrls: ['./earn-section.component.css']
})
export class EarnSectionComponent implements OnInit {

  trades: Trade[] = [
    {
      id: 0,

      syrupPools: [
        {
          token: 'Happy-Bnb',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
      ],
    },

    {
      id: 1,
      farms: [
        {
          token: 'Happy-Bnb',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
        {
          token: 'Happy',
          percentage: 322.865,
          rate: 'APR'
        },
      ]

    }

  ];




  arrEarn: string[] = ['Syrupul Pools', 'Farms']
  index: number = 0;
  tokenSelected: string = this.arrEarn[0];
  timeOut: any;
  constructor() {
    this.timeOut = setInterval(() => {
      this.index = this.index ? this.index - 1 : this.index + 1;
      this.changeMarket()

    }, 6000)



  }

  ngOnInit(): void {
  }
  changeMarket(): void {

    let index = this.arrEarn.indexOf(this.tokenSelected) + 1
    let arrLengh = this.arrEarn.length
    if (index < arrLengh) {

      this.tokenSelected = this.arrEarn[index]
    } else {
      index = 0;
      this.tokenSelected = this.arrEarn[index]
    }
  }

  arrowClicked() {
    this.changeMarket();
    clearInterval(this.timeOut);
    this.index = this.index ? this.index - 1 : this.index + 1;
    this.timeOut = setInterval(() => {
      this.index = this.index ? this.index - 1 : this.index + 1;

      this.changeMarket()
    }, 6000)
  }

}
