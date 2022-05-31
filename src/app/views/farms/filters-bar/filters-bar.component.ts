import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FarmsPoolsFiltersToolbarService } from 'src/app/services/farms-pools-filters-toolbar.service';

import { findIndex, first, filter, distinctUntilChanged } from 'rxjs';



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
  firstOption: string = ""

  showOptions: boolean = false;
  searchTerm: string = '';


  constructor(private farmsPoolsFilters: FarmsPoolsFiltersToolbarService) {

  }



  changeColorTogle() {
    this.toggleColor = (this.toggleColor) ? false : true;


  }


  ngOnInit(): void {




    this.setSortBy()

  }



  setSortBy() {
    this.firstOption = this.options[0]
  }


  show(event: any): void {
    if (event.target === event.currentTarget || event.target === event.currentTarget.firstChild) {

      this.showOptions = !this.showOptions;
    }
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




}
