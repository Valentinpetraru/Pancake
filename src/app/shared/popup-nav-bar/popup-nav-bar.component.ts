import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-popup-nav-bar',
  templateUrl: './popup-nav-bar.component.html',
  styleUrls: ['./popup-nav-bar.component.css']
})
export class PopupNavBarComponent implements OnInit {


  check: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


      closed(){
   this.check = false 
   localStorage.setItem('showBanner', 'false')
  }
}
