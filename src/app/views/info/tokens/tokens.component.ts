import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {


  cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 19, 20]
  constructor() { }

  ngOnInit(): void {
  }

}
