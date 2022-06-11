import { Component, OnInit } from '@angular/core';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'cake-watchlist-token',
  templateUrl: './watchlist-token.component.html',
  styleUrls: ['./watchlist-token.component.css']
})
export class WatchlistTokenComponent implements OnInit {
  public watchlistToken: any = [];
  constructor(private watchlistService: WatchlistService) { }

  ngOnInit(): void {
    this.watchlistService.getTokens().subscribe((data: any) => {
      this.watchlistToken = data;
    })
  }

}
