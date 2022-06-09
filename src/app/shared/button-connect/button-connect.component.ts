import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cake-button-connect',
  templateUrl: './button-connect.component.html',
  styleUrls: ['./button-connect.component.css', './button-connect_B.component.css']
})
export class ButtonConnectComponent implements OnInit {
  connectWallet: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  // Funzione bottone connect wallet
  openWallet(): void {
    this.connectWallet = !this.connectWallet;
    document.body.style.overflow = 'hidden';
  }

  closeWallet(value: boolean): void {
    this.connectWallet = value
    document.body.style.overflow = 'visible';
  }

}
