import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';







@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public subject = webSocket('wss://stream.binance.com:9443/ws/cakeusdt@trade');




  constructor() { }


}
