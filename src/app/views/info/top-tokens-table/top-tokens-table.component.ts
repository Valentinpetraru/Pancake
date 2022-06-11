import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'cake-top-tokens-table',
  templateUrl: './top-tokens-table.component.html',
  styleUrls: ['./top-tokens-table.component.css']
})
export class TopTokensTableComponent implements OnInit {

  @Input() titleTable: string = '';

  constructor() { }

  ngOnInit(): void { }

}
