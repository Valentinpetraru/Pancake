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
      description:  `- Team ranks are calculated by the total combined volume of the top 500 members of each respective team.\n
      - The final winning team will be the team with the highest total volume score at the end of the competition period.`
    },
    {
      id: 1,
      title:'Prize distribution',
      description: `- Prizes to be distributed in CAKE and DAR in a distribution of 1:5 and shared by all members of each respective tier.\n
- The price of token prizes ($CAKE and $DAR) in USD will be determined as per their BUSD pair price during the tally period. \n
- Every participant will win at least one prize at the end of the competition.`
    },
    {
      id: 1,
      title:'Fine print',
      description: `- In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.\n
      - PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to “cheat” in any way.`,
    },
    {
      id: 1,
      title:'Can I join the battle after it starts?',
      description: `Sorry, no. You need to register during the registration period, before the start of the event.`,
    },
    {
      id: 1,
      title:'How do I know if I successfully registered?',
      description:`At the top of the page, the text in the button “I Want to Battle” will change to “Registered”.`,
    },
    {
      id: 1,
      title:'How can I see my current rank?',
      description:`Check Your Score section on the event page. You’ll need to connect your wallet, of course.`,
    },
    {
      id: 1,
      title:'How do I claim my prize(s)?',
      description:`After the battle ends, visit the event page and click the “Claim Prizes” button in the top section or in “Your Score” section.
      Once you claim your prizes successfully, the button text will change to “Prizes Claimed”.`
    },
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
