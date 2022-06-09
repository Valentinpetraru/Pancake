import { Component, OnInit } from '@angular/core';
import { ITeams } from 'src/app/models/Teams';
import { PrizeService } from 'src/app/services/prizes/prize.service';

@Component({
  selector: 'cake-table-prize-team',
  templateUrl: './table-prize-team.component.html',
  styleUrls: ['./table-prize-team.component.css']
})
export class TablePrizeTeamComponent implements OnInit {

  teamone: boolean = true;
  teamtwo: boolean = false;
  teamthree: boolean = false;



  constructor( private list: PrizeService) { }

  lest: any;
  a: any;
  b:any;
  c:any;

  ngOnInit(): void {
    this.list.getTeamOne().subscribe(response => {
    this.a = response.filter((i:any)=>{
      if (i.status === 'first'){
        return i
      }
    })
    this.b = response.filter((i:any)=>{
      if (i.status === 'second'){
        return i
      }
    })
    this.c = response.filter((i:any)=>{
      if (i.status === 'third'){
        return i
      }
    })
    })
  }




    teamOne(){
    this.teamtwo = false;
    this.teamone = true;
    this.teamthree = false;

  }

  teamTwo(){
    this.teamtwo = true;
    this.teamone = false;
    this.teamthree = false;

    console.log(this.b);
  }

  teamThree(){
    this.teamtwo = false;
    this.teamone = false;
    this.teamthree = true;

    console.log(this.c);
  }
}


