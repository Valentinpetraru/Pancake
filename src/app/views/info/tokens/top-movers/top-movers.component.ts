import { Component, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';

@Component({
  selector: 'cake-top-movers',
  templateUrl: './top-movers.component.html',
  styleUrls: ['./top-movers.component.css']
})
export class TopMoversComponent implements OnInit {

  public topMoversTokens: any = [];
  constructor(private http: InfoApiService) { }

  ngOnInit(): void {
    this.http.getAllTokensInfo().subscribe((response: any) => {
      this.topMoversTokens = response.slice(0, 20);
      this.topMoversTokens.forEach((item: any) => {
        item.percentage = Math.floor(Math.random() * 100) + 1;
      });
    })

  }
}
