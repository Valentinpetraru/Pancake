import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WalletService } from 'src/wallet.service';


@Component({
  selector: 'cake-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css']
})
export class ConnectWalletComponent implements OnInit {
  
  more: boolean = false;

  constructor(private walletService: WalletService) {}

  ngOnInit(): void {
  }
  exitWallet(): void {
    this.walletService.exit()
  }

  openMore(): void {
    this.more = true;
  }
}
