import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FarmsPoolsFiltersToolbarService } from 'src/app/services/farms-pools-filters-toolbar.service';

import { findIndex, first, filter, distinctUntilChanged } from 'rxjs';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'cake-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css']
})
export class FiltersBarComponent implements OnInit {

  toggleColor: boolean = false;

  options: any = ['Hot', 'APR', 'Multiplier', 'Earned', 'Liquidity', 'Latest'];

  @Input() itemsOption: any = []
  @Output() optionEmitted = new EventEmitter<string>()

  @Output() showComponent = new EventEmitter<any>()

  activeCompNav: boolean = true;

  firstOption: string = ""
  showOptions: boolean = false;
  searchTerm: string = '';


  constructor(private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) {

  }



  ngOnInit(): void {

    this.setSortBy()
    if (sessionStorage.getItem('componentOpen') === 'table') {

      this.activeCompNav = false;
    }

    if (Boolean(sessionStorage.getItem('showStaked'))) {
      this.toggleColor = true
    }

  }

  setSortBy() {
    [this.firstOption] = this.options.splice(0, 1)
  }

  show(event: any): void {
    if (event.target === event.currentTarget || event.target === event.currentTarget.firstChild) {
      this.showOptions = !this.showOptions;
    }
  }

  changeColorTogle() {

    if (Boolean(sessionStorage.getItem('showStaked'))) {
      this.toggleColor = false;
      sessionStorage.removeItem('showStaked')
    } else {
      this.toggleColor = true;
      sessionStorage.setItem('showStaked', 'true')
    }


    // 



  }


  changeOption(opt: any): void {
    this.optionEmitted.emit(opt.toLowerCase())
    this.options.splice(this.options.indexOf(opt), 1)
    this.options.push(this.firstOption)
    this.firstOption = opt;
    this.showOptions = !this.showOptions
  }

  search(event: any): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.farmsPoolsFilters.search$.next(this.searchTerm)
  }


  showCard(comp: string): void {
    this.showComponent.emit(comp)
    this.activeCompNav = true;
  }

  showTable(comp: string): void {
    this.showComponent.emit(comp)
    this.activeCompNav = false;
  }


  showStaked(event: any): void {
    console.log(Boolean(event.target.value))
  }



}


