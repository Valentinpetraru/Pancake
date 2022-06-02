import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'cake-card-own',
  templateUrl: './card-own.component.html',
  styleUrls: ['./card-own.component.css']
})
export class CardOwnComponent implements OnInit {



  randomValue: number = +(Math.random() * (500 - 400) + 400).toFixed(3);
  idnumber: number = 6366;
  num!:number;





    users: User[] = [
    {
      id: this.randomValue
    },
    {
      id: this.randomValue
    }

  ]

  constructor() {
        setInterval(() => {


      this.users.forEach(item => item.id = +(Math.random() * (500 - 400) + 400).toFixed(3))
    }, 2000)
  }












  ngOnInit(): void {
  }



}


