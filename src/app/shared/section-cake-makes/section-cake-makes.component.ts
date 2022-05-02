import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'cake-section-cake-makes',
  templateUrl: './section-cake-makes.component.html',
  styleUrls: ['./section-cake-makes.component.css']
})
export class SectionCakeMakesComponent implements OnInit {
 
 
 
  number: number = 290853574;

  constructor() { }

  ngOnInit(): void {

    window.addEventListener('load', () => {
       const interval = setInterval(() =>{
          this.number = Math.floor(Math.random() + (this.number +2411)-800) ;
          console.log(this.number)
        },8000)
        
    })




  }

 prova:any = 123;

 provaAnimation:any = setInterval(() => {
  this.prova++;

  if (this.prova === 233) {
   clearInterval(this.provaAnimation);
  }
},10)

 }

  
