import { AfterViewInit, Component, OnInit, QueryList, HostListener, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { FarmsApiService } from 'src/app/services/farms-api.service';
import { SubRowTableComponent } from './sub-row-table/sub-row-table.component';
import { FarmsDirective } from 'src/app/module-shared/directives/farms.directive';

@Component({
  selector: 'cake-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {



  subMenuRowTableList: boolean = false;

  farmsData: any = [];

  objSelected: any = [];

  numberrows: number = 12

  component = SubRowTableComponent;

  constructor(private el: ElementRef, private farmsApiService: FarmsApiService) { }

  // @HostListener('window:scroll', ['$event'])
  // checkScrollPosition(): void {
  //   const scrollable = window.innerHeight;
  //   const scrolled = window.scrollY;

  //   console.log(scrollable, 'scrolly')
  //   if (Math.ceil(scrolled) === scrollable) {
  //     console.log('hello')
  //     this.numberrows = this.numberrows + 12;
  //   }


  // }


  ngOnInit(): void {
    this.farmsApiService.getApiFarms().subscribe(data => {

      this.farmsData = data;
    })
  }


  rotate(ev: any): any {

    // this.objSelected.pop()
    // this.objSelected.push(this.farmsData[ev])


    let el = document.querySelectorAll('.grid-container');

    const nsibling = el[0]?.nextSibling as HTMLElement;


    for (let index = 0; index < el.length; index++) {
      const nsibling = el[index]?.nextSibling as HTMLElement;
      if (index === ev && nsibling.style.display === 'none') {

        nsibling.style.display = 'block';

        return true;

      }

      if (index === ev && nsibling.style.display === 'block') {

        nsibling.style.display = 'none';

        return true;

      }

    }




    this.subMenuRowTableList = (this.subMenuRowTableList) ? false : true;
  }



}
