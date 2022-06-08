import { Component, OnInit } from '@angular/core';
import { IDetails } from 'src/app/models/details';

@Component({
  selector: 'cake-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  arrDet: IDetails[] = [

    {
      id: 1,
      title:'Eligible trading pairs',
      description: 'Only trades on DAR/BNB, CAKE/BNB, and CAKE/BUSD pairs will be included in volume calculations. Please note that the volume from limit orders will not be included.'
    },
    {
      id: 1,
      title:'Calculating team ranks and winners',
      description: 'Team ranks are calculated by the total combined volume of the top 500 members of each respective team. The final winning team will be the team with the highest total volume score at the end of the competition period.'
    }
  ]

  detStatus: boolean = false;

  

  mostra (id:number) {


    if (this.arrDet[id].id === 0){
      this.arrDet[id].id = 1
    } else{
      this.arrDet[id].id = 0;
    }
  }

  selectProject!: IDetails;


  constructor() { }

  ngOnInit(): void {
  }

}
