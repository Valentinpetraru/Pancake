import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.css']
})
export class FinishPageComponent implements OnInit {

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
