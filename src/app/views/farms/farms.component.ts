import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  toggleColor: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeColorTogle() {
    this.toggleColor = (this.toggleColor) ? false : true;
  }

}
