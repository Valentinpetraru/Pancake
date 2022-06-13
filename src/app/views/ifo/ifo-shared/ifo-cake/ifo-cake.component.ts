import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cake-ifo-cake',
  templateUrl: './ifo-cake.component.html',
  styleUrls: ['./ifo-cake.component.css']
})
export class IfoCakeComponent implements OnInit {

  innerWidth!: number;

  ShowContent: boolean = false;

  MobileView:boolean = true;
  
  constructor(private router: ActivatedRoute) {
   let page = this.router.snapshot.paramMap.get('pools');
   }

   clickShow() {
    this.ShowContent = !this.ShowContent;
   }
 
   
   @HostListener('window:resize', ['$event'])
  
  
   ngOnInit(): void {
     {
      this.innerWidth = window.innerWidth;
      console.log('window:resize', this.innerWidth);
    }
    if (this.innerWidth <= 768) {
      this.MobileView = !this.MobileView;
    }
  }


}
