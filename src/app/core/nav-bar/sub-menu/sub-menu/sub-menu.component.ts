import { Component, Input, OnInit } from '@angular/core';
import { SubMenu } from 'src/app/models/nav-bar/sub-menu';

@Component({
  selector: 'cake-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
})
export class SubMenuComponent implements OnInit {
  @Input() menuChoosen: SubMenu[] = [];

  constructor() {}

  ngOnInit(): void {}
}
