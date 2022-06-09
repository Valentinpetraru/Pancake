import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.css']
})
export class SelectBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  option = [
    'Hot', 'APR', 'Multiplier', 'Earned', 'Liquidity', 'Latest'
  ];


  listaItem:string = this.option[0];

  functionName(e:any){
    this.listaItem = e.target.textContent;
    };

    show:boolean = false;

    showDropdownList() {
      this.show = !this.show;
      console.log("dovrebbe darlo vero", this.show.toString());
    }



    elementi:any[] = ["prova1", "prova2", "prova3"];

    function() {
      const nuoviElementi = ["a2", "a3", "a4", "a5", "a1"];
      this.elementi.push(...nuoviElementi);
    }

}
