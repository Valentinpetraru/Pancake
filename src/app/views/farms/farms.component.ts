import { AfterViewInit, Component, OnInit, QueryList, HostListener, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FarmsApiService } from 'src/app/services/farms-api.service';
import { SubRowTableComponent } from './sub-row-table/sub-row-table.component';
import { FarmsDirective } from 'src/app/module-shared/directives/farms.directive';
import { FarmsPoolsFiltersToolbarService } from 'src/app/services/farms-pools-filters-toolbar.service';

import { delay } from 'rxjs';


@Component({
  selector: 'cake-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {


  subMenuRowTableList: boolean = false;

  farmsData: any = [];

  objSelected: any = [];

  searchKey: string = ''

  constructor(private el: ElementRef, private farmsApiService: FarmsApiService, private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) {

  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition(): void {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrollable === Math.ceil(scrolled)) {
      console.log("you've reached scrollable")
    }




  }


  ngOnInit(): void {
    this.farmsApiService.getApiFarms().subscribe(data => {
      this.farmsData = data;

    })

    this.farmsPoolsFilters.search$.subscribe((value: string) => {
      this.searchKey = value;
    })



  }


  rotate(ev: any): any {

    // this.objSelected.pop()
    // this.objSelected.push(this.farmsData[ev])


    let el = document.querySelectorAll('.grid-container');

    const nsibling = el[0]?.nextSibling as HTMLElement;

    for (let index = 0; index < el.length; index++) {
      const nsibling = el[index]?.nextSibling as HTMLElement;
      if (index === ev && nsibling.style.display === 'none') {
        nsibling.style.display = 'block';
        return true;
      }
      if (index === ev && nsibling.style.display === 'block') {
        nsibling.style.display = 'none';
        return true;
      }
    }

    this.subMenuRowTableList = (this.subMenuRowTableList) ? false : true;
  }

  filter(option: string) {
    /*Sorted by latest minus to higher */
    let sortArr = []
    console.log(option)
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

    // this.farmsPoolsFilters.selectedOptionsFilter.next(sortArr)

    // this.farmsPoolsFilters.selectedOptionsFilter.subscribe((data: any) => {
    //   this.farmsData = data;
    // })


  }

}
