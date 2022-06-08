import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'cake-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input() transactionsOrigin: any;
  public transactions: any;

  public currentPage: number = 1;
  public totalPages: number = 1;
  public indexPage: number = 0;
  public arrowBack: boolean = false;
  public arrowAhead: boolean = true;

  constructor() { }

  ngOnInit(): void {


    this.setPagination()
  }

  /*SET PAGINATION */
  setPagination(): void {
    this.transactions = this.transactionsOrigin.slice(0, 10);
    this.totalPages = Math.round(this.transactionsOrigin.length / 10 + 0.4);
    if (this.currentPage === this.totalPages) {
      this.arrowAhead = false;
    }
  }

  /*GO TO NEXT PAGE*/
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.indexPage += this.transactions.length;
      this.transactions = this.transactionsOrigin.slice(this.indexPage, this.indexPage + 10)
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
      this.transactions = this.transactionsOrigin.slice(this.indexPage - 10, this.indexPage)
      this.indexPage -= 10;
      this.currentPage--;
      this.arrowAhead = true;
    }

    if (this.currentPage === 1) {
      this.arrowBack = false;

    }
  }


}
