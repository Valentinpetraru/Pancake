import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'cake-ifo-main',
  templateUrl: './ifo-main.component.html',
  styleUrls: ['./ifo-main.component.css']
})
export class IfoMainComponent implements OnInit {

  
  innerWidth!: number;
  MobileView: boolean = false;


  @HostListener('window:resize', ['$event'])
  
  
  ngOnInit(): void {
    {
     this.innerWidth = window.innerWidth;
     console.log('window:resize', this.innerWidth);
   }
   if (this.innerWidth > 862) {
     this.MobileView = !this.MobileView;
     console.log("desktop version")
   }
 }

}
