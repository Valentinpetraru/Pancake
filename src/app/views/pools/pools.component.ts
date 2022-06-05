import { Component, OnInit } from '@angular/core';
import { FarmsApiService } from 'src/app/services/farms-api.service';
import { FarmsPoolsFiltersToolbarService } from 'src/app/services/farms-pools-filters-toolbar.service';

@Component({
  selector: 'cake-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {

  showTableStyleComp: boolean = false;
  showCardStyleComp: boolean = true;

  subMenuRowTableList: boolean = false;

  farmsDataOriginal: any = [];

  farmsData: any = [];

  objSelected: any = [];

  searchKey: string = '';

  optionSelected: string = '';

  constructor(private farmsApiService: FarmsApiService, private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) { }

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

  filter(option: string) {

    this.optionSelected = option;
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
