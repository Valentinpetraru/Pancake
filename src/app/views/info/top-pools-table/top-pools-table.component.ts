import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'cake-top-pools-table',
  templateUrl: './top-pools-table.component.html',
  styleUrls: ['./top-pools-table.component.css']
})
export class TopPoolsTableComponent implements OnInit {

  @Input() topPoolsTokenOrigin: any = [];
  public topPoolsToken: any = [];


  public currentPage: number = 1;
  public totalPages: number = 1;
  public indexPage: number = 0;
  public arrowBack: boolean = false;
  public arrowAhead: boolean = true;

  public constructor() { }

  ngOnInit(): void {
    this.setPagination()

  }

  /*SET PAGINATION */
  setPagination(): void {
    this.topPoolsToken = this.topPoolsTokenOrigin.slice(0, 10);
    this.totalPages = Math.round(this.topPoolsTokenOrigin.length / 10 + 0.4);
    if (this.currentPage === this.totalPages) {
      this.arrowAhead = false;
    }
  }
  /*GO TO NEXT PAGE*/
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.indexPage += this.topPoolsToken.length;
      this.topPoolsToken = this.topPoolsTokenOrigin.slice(this.indexPage, this.indexPage + 10)
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
      this.topPoolsToken = this.topPoolsTokenOrigin.slice(this.indexPage - 10, this.indexPage)
      this.indexPage -= 10;
      this.currentPage--;
      this.arrowAhead = true;
    }

    if (this.currentPage === 1) {
      this.arrowBack = false;

    }
  }

}
