import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css']
})
export class FiltersBarComponent implements OnInit {

  toggleColor: boolean = false;

  constructor() { }

  changeColorTogle() {
    this.toggleColor = (this.toggleColor) ? false : true;
  }


  ngOnInit(): void {
  }


}
