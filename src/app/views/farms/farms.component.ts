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

  showTableStyleComp: boolean = false;
  showCardStyleComp: boolean = true;

  subMenuRowTableList: boolean = false;

  farmsDataOriginal: any = [];

  farmsData: any = [];

  objSelected: any = [];

  searchKey: string = '';

  optionSelected: string = '';

  constructor(private farmsApiService: FarmsApiService, private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) {

  }



  ngOnInit(): void {
    this.farmsApiService.getApiFarms().subscribe(response => {

      this.farmsDataOriginal = response;

      this.farmsData = response.slice(0, 12);

    })

    this.farmsPoolsFilters.search$.subscribe((value: string) => {
      this.searchKey = value;
    })

    if (sessionStorage.getItem('componentOpen') === 'table') {
      this.showTableStyleComp = true;
      this.showCardStyleComp = false;
    }


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

    this.optionSelected = option;
  }

  showComponent(value: any): any {

    if (value === 'card') {
      this.showCardStyleComp = true;
      this.showTableStyleComp = false;
      sessionStorage.removeItem("componentOpen");
      return true
    }
    if (value === 'table') {
      this.showCardStyleComp = false;
      this.showTableStyleComp = true;
      sessionStorage.setItem("componentOpen", "table");
      return true
    }
  }

  onScroll() {
    let lenFd = this.farmsData.length;

    if (lenFd + 12 <= this.farmsDataOriginal.length) {

      for (let i = lenFd; i < lenFd + 12; i++) {
        this.farmsData.push(this.farmsDataOriginal[i]);
      }
    }

    if (lenFd + 12 > this.farmsDataOriginal.length && lenFd !== this.farmsDataOriginal.length) {

      for (let i = lenFd; i < this.farmsDataOriginal.length; i++) {
        this.farmsData.push(this.farmsDataOriginal[i]);
      }
    }

  }

}
