import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  title = 'Pancake';
  showBanner: string | null = 'true';

  constructor() { 

    this.showBanner = localStorage.getItem('showBanner') || 'true'
    console.log(this.showBanner);
  }

  ngOnInit(): void {
  }

}
