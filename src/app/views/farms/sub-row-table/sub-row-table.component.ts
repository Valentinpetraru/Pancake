import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cake-sub-row-table',
  templateUrl: './sub-row-table.component.html',
  styleUrls: ['./sub-row-table.component.css']
})
export class SubRowTableComponent implements OnInit, OnChanges {

  @Input() subMenuRowTableList: boolean = false;

  @Input() formsData: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.formsData)
  }
  ngOnChanges(): void {

  }
}
