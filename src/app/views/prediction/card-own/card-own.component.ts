import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'cake-card-own',
  templateUrl: './card-own.component.html',
  styleUrls: ['./card-own.component.css']
})
export class CardOwnComponent implements OnInit {



  randomValue: number = +(Math.random() * (500 - 400) + 400).toFixed(3);
  randomValueo: number = +(Math.random() * (500 - 400) + 400).toFixed(3);
  randomValuet: number = +(Math.random() * (500 - 400) + 400).toFixed(3);
  randomValuett: number = +(Math.random() * (500 - 400) + 400).toFixed(3);
  idnumber: number = 6366;
  num!:number;





    users: User[] = [
    {
      id: this.randomValuet,
      status: 'expired'
    },
    {
      id: this.randomValueo,
      status: 'expired'
    },

    {
      id: this.randomValuett,
      status: 'expired'
    },
    {
      id: this.randomValue,
      status: 'live'
    },
    {
      id: this.randomValuet,
      status: 'next'
    }


  ]

  constructor() {
        setInterval(() => {


      this.users.forEach(item => {
        if(item.status === 'live'){
          item.id = +(Math.random() * (500 - 400) + 400).toFixed(3)
        }
        })
    }, 2000)
  }












  ngOnInit(): void {
  }



}


