import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cake-connect-popup',
  templateUrl: './connect-popup.component.html',
  styleUrls: ['./connect-popup.component.css']
})
export class ConnectPopupComponent implements OnInit {


  @Output() closeWallet = new EventEmitter<boolean>();

  closeConnectWallet(): void {
    this.closeWallet.emit(false);
    document.body.style.overflow = 'visible';
  }


  showWallets: boolean = true;

  sw() {
    this.showWallets = !this.showWallets
  }
  constructor() { }

  ngOnInit(): void {
  }

}

