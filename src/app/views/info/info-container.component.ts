import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-info-container',
  template: `
      <cake-search-navigation></cake-search-navigation>
      <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class InfoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
