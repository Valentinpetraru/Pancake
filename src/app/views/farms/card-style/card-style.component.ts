import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FarmsPoolsFiltersToolbarService } from 'src/app/services/farms-pools-filters-toolbar.service';

@Component({
  selector: 'cake-card-style',
  templateUrl: './card-style.component.html',
  styleUrls: ['./card-style.component.css']
})
export class CardStyleComponent implements OnInit, OnChanges {


  @Input() farmsData: any = [];

  subMenuRowTableList: boolean = false;

  searchKey: string = ''

  @Input() optionFilter: string = '';



  constructor(private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) { }


  ngOnInit(): void {

    this.farmsPoolsFilters.search$.subscribe((value: string) => {
      this.searchKey = value;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filter()
  }


  rotate(ev: any): any {


    // this.objSelected.pop()
    // this.objSelected.push(this.farmsData[ev])

    let el = document.querySelector('.container-txt-detail');

    console.log(ev.target.nextSibling)

    if (ev.target.nextSibling.style.display === 'none') {
      console.log(ev.target.firstChild)
      ev.target.nextSibling.style.display = 'block';
      ev.target.firstChild.textContent = 'Hide'
      return true
    }

    if (ev.target.nextSibling.style.display === 'block') {
      ev.target.nextSibling.style.display = 'none';
      ev.target.firstChild.textContent = 'Details'
      return true
    }

    // for (let index = 0; index < el.length; index++) {
    //   const nsibling = el[index]?.nextSibling as HTMLElement;
    //   if (index === ev && nsibling.style.display === 'none') {
    //     nsibling.style.display = 'block';
    //     return true;
    //   }
    //   if (index === ev && nsibling.style.display === 'block') {
    //     nsibling.style.display = 'none';
    //     return true;
    //   }
    // }

    this.subMenuRowTableList = (this.subMenuRowTableList) ? false : true;
  }




  filter() {

    let sortArr = []

    let option = this.optionFilter;

    if (!option) {
      option = 'hot';
    }

    switch (option) {
      case 'latest':
        sortArr = this.farmsData.sort((a: any, b: any) => parseFloat(a.latest) - parseFloat(b.latest));
        break;
      case 'liquidity':/*Higest to lowest */
        sortArr = this.farmsData.sort((a: any, b: any) => parseFloat(b.liquidity) - parseFloat(a.liquidity));
        break;
      case 'earned':/*Higest to lowest */
        sortArr = this.farmsData.sort((a: any, b: any) => parseFloat(b.earned) - parseFloat(a.earned));
        break;
      case 'multiplier':/*Higest to lowest */
        sortArr = this.farmsData.sort((a: any, b: any) => parseFloat(b.liquidity) - parseFloat(a.liquidity));
        break;
      case 'apr': /*Higest to lowest */
        sortArr = this.farmsData.sort((a: any, b: any) => parseFloat(b.apr) - parseFloat(a.apr));
        break;
      case 'hot':
        sortArr = this.farmsData.sort(() => Math.random() - 0.5);
        break
    }

    this.farmsData = sortArr

  }

}
