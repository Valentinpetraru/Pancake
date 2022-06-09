import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'cake-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input() transactionsOrigin: any;
  public transactions: any;

  public selectedTransactions: any;

  public currentPage: number = 1;
  public totalPages: number = 1;
  public indexPage: number = 0;
  public arrowBack: boolean = false;
  public arrowAhead: boolean = true;

  public arrowString = ''
  public showArrowAscDesc = 0;
  public stateArrowSorted: any = [
    { totalValue: false },
    { tokenAmountFirst: false },
    { tokenAmountSecond: false },
    { account: false },
    { time: false }
  ]

  constructor() { }

  ngOnInit(): void {


    this.setPagination()
  }

  /*SET PAGINATION */
  setPagination(value: string = 'all'): void {

    if (value === 'all') {

      this.transactions = [...this.transactionsOrigin.slice(0, 10)];
      this.totalPages = Math.round(this.transactionsOrigin.length / 10 + 0.4);
      this.arrowAhead = true;
      if (this.currentPage === this.totalPages) {
        this.arrowAhead = false;
      }
    } else {
      this.currentPage = 1;
      this.arrowBack = false;
      this.transactions = this.selectedTransactions.slice(0, 10);
      this.totalPages = Math.round(this.selectedTransactions.length / 10 + 0.4);
      if (this.currentPage === this.totalPages) {
        this.arrowAhead = false;
      } else {
        this.arrowBack = false;
        this.arrowAhead = true;
      }
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

  // SELECTE TYPE OF TRANSACTION
  selectTransactions(value: string): void {
    if (value === 'all') {
      this.setPagination()
      console.log(this.transactions);
    } else {
      this.selectedTransactions = this.transactionsOrigin.filter((item: any) => item.action.toLowerCase().includes(value));

      this.setPagination(value)
      console.log(this.selectedTransactions)
    }

  }


  sort(value: string): void {
    this.stateArrowSorted.totalValue = false;
    this.stateArrowSorted.tokenAmountFirst = false;
    this.stateArrowSorted.tokenAmountSecond = false;
    this.stateArrowSorted.account = false;
    this.stateArrowSorted.time = false;
    console.log(this.stateArrowSorted)

    if (!this.showArrowAscDesc) {
      this.stateArrowSorted[value] = true
      this.transactionsOrigin = this.transactionsOrigin.sort((a: any, b: any) => parseFloat(a.time) - parseFloat(b.time));
      this.transactions = this.transactions.sort((a: any, b: any) => parseFloat(a.time) - parseFloat(b.time));
      this.arrowString = '↓'

      this.showArrowAscDesc++;
    } else {
      this.stateArrowSorted[value] = true
      this.transactionsOrigin = this.transactionsOrigin.reverse();
      this.transactions = this.transactions.reverse();
      this.arrowString = '↑'
      this.showArrowAscDesc--;

    }


  }



}
