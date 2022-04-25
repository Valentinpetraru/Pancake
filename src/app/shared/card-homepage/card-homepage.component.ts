import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cake-card-homepage',
  templateUrl: './card-homepage.component.html',
  styleUrls: ['./card-homepage.component.css']
})
export class CardHomepageComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    
  }

  homepageCard = {

    card1:{
    title:"3.1 milion",
    h2Title: "users",
    pFooter:"in the last 30 days",
  },

    card2:{     
      title:"40 milion",
      h2Title: "traders",
      pFooter:"made in the last 30 days",
    },

    card3:{
      title:"$6.7 bilion",
      h2Title: "staked",
      pFooter:"total Value Locked",
    }

  }
  

}


