import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'cake-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {

  titleTokensTable: string = 'All Tokens';

  constructor() { }

  ngOnInit(): void { }
}
