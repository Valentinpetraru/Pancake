import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-lottery-timer',
  templateUrl: './lottery-timer.component.html',
  styleUrls: ['./lottery-timer.component.css']
})
export class LotteryTimerComponent implements OnInit {



  win: number = +(Math.random() * (250 - 200) + 200).toFixed(3)

  //time

  hour: number = 0;
  minut: number = 0;
  second: number = 0;




  constructor() {

    //valuta casuale win
    setInterval(() => {
      this.win = +(Math.random() * (250 - 200) + 200).toFixed(3)
    }, 10000)
    // fine valuta casuale


    //timer
    setInterval(() => {

let today = new Date().getTime()
let tomorrow = new Date('June 11 2022, 00:00:00:00').getTime()
let gap = tomorrow - today



      let secondi = 1000;
      let gapSecondi = gap / 1000

      let minuto = 60 * secondi;
      let gapMinuti = gap / minuto

      let ore = 60 * minuto;
      let gapOre = gap / ore;

      let giorni = ore * 24;
      let gapGiorni = gap / giorni


      // console.log('secondi:' + gapSecondi);
      // console.log('minuti:' + gapMinuti);
      // console.log('ore:' + gapOre);

      this.hour = Math.floor(gapOre % 24)
      this.minut = Math.floor((gapMinuti % 60))
      this.second = Math.floor((gapSecondi % 60))


    }, 1000)
    // fine timer

  }

  ngOnInit(): void {
  }







}
