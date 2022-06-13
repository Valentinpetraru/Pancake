import { Component, Input, OnInit } from '@angular/core';
import { InfoApiService } from 'src/app/services/info-api.service';


@Component({
  selector: 'cake-top-tokens-table',
  templateUrl: './top-tokens-table.component.html',
  styleUrls: ['./top-tokens-table.component.css']
})
export class TopTokensTableComponent implements OnInit {

  @Input() titleTable: string = '';

  public allTokensOrigin: any = [];
  public allTokens: any = [];

  public currentPage: number = 1;
  public totalPages: number = 1;
  public indexPage: number = 0;
  public arrowBack: boolean = false;
  public arrowAhead: boolean = true;

  constructor(private infoApi: InfoApiService) { }

  ngOnInit(): void {
    this.infoApi.getAllTokensInfo().subscribe(
      (data: any) => {
        this.allTokensOrigin = data;
        this.setPagination()
      }
    )
  }

  /*SET PAGINATION */
  setPagination(): void {

    this.allTokens = this.allTokensOrigin.slice(0, 10);
    this.totalPages = Math.round(this.allTokensOrigin.length / 10 + 0.4);
    if (this.currentPage === this.totalPages) {
      this.arrowAhead = false;
    }
  }
  /*GO TO NEXT PAGE*/
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.indexPage += this.allTokens.length;
      this.allTokens = this.allTokensOrigin.slice(this.indexPage, this.indexPage + 10)
      this.currentPage++;
      this.arrowBack = true;
      this.arrowBack = true;
    }

    if (this.currentPage === this.totalPages) {
      this.arrowAhead = false;
    }

  }

  /*GO TO PREVIOUS PAGE*/
  previousPage(): void {
    if (this.currentPage != 1) {
      this.allTokens = this.allTokensOrigin.slice(this.indexPage - 10, this.indexPage)
      this.indexPage -= 10;
      this.currentPage--;
      this.arrowAhead = true;
    }

    if (this.currentPage === 1) {
      this.arrowBack = false;

    }
  }

}
