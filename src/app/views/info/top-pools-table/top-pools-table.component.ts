import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'cake-top-pools-table',
  templateUrl: './top-pools-table.component.html',
  styleUrls: ['./top-pools-table.component.css']
})
export class TopPoolsTableComponent implements OnInit {

  @Input() topPoolsTokenOrigin: any = [];

  @Input() titleTable: string = '';

  public topPoolsToken: any = [];


  public currentPage: number = 1;
  public totalPages: number = 1;
  public indexPage: number = 0;
  public arrowBack: boolean = false;
  public arrowAhead: boolean = true;

  public arrowString = ''
  public showArrowAscDesc = 0;
  public stateArrowSorted: any = [
    { volume24h: false },
    { volume7d: false },
    { lpFees: false },
    { lpApr: false },
    { liquidity: false }
  ]

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


  //SORT TABLE
  sort(value: string): void {
    this.stateArrowSorted.volume24h = false;
    this.stateArrowSorted.volume7d = false;
    this.stateArrowSorted.lpFees = false;
    this.stateArrowSorted.lpApr = false;
    this.stateArrowSorted.liquidity = false;


    if (!this.showArrowAscDesc) {
      console.log(0)
      this.stateArrowSorted[value] = true
      // this.topPoolsTokenOrigin = this.topPoolsTokenOrigin.sort((a: any, b: any) => parseFloat(a.time) - parseFloat(b.time));
      // this.topPoolsToken = this.topPoolsToken.sort((a: any, b: any) => parseFloat(a.time) - parseFloat(b.time));
      this.topPoolsTokenOrigin = this.topPoolsTokenOrigin.reverse();
      this.topPoolsToken = this.topPoolsToken.reverse();
      this.arrowString = '↓'

      this.showArrowAscDesc++;
    } else {
      console.log(1)
      this.stateArrowSorted[value] = true
      this.topPoolsTokenOrigin = this.topPoolsTokenOrigin.reverse();
      this.topPoolsToken = this.topPoolsToken.reverse();
      this.arrowString = '↑'
      this.showArrowAscDesc--;

    }


  }


}
