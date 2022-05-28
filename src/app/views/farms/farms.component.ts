import { AfterViewInit, Component, OnInit, QueryList, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'cake-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {


  toggleColor: boolean = false;

  subMenuRowTableList: boolean = false;
  constructor(private el: ElementRef) { }

  // @HostListener('click') rotate(event: any) {
  //   let part = this.el.nativeElement.querySelectorAll('.grid-container');

  //   part.forEach((el: any, i: number) => {
  //     if (el.nextSibling.style.display === 'block') {
  //       el.nextSibling.style.display = 'none'
  //     } else {
  //       el.nextSibling.style.display = 'block'
  //     }
  //   })
  // }


  ngOnInit(): void {
  }

  changeColorTogle() {
    this.toggleColor = (this.toggleColor) ? false : true;
  }

  rotate(ev: any): any {

    let el = document.querySelectorAll('.grid-container');

    const nsibling = el[0]?.nextSibling as HTMLElement;
    // el.forEach((el: any, index: number) => {

    //   if (index === ev && el.nextSibling.style.display === 'none') {

    //     el.nextSibling.style.display = 'block';
    //     console.log('first if')

    //   }

    //   if (index === ev && el.nextSibling.style.display === 'block') {

    //     el.nextSibling.style.display = 'none';
    //     console.log('second if')

    //   }

    // })

    for (let index = 0; index < el.length; index++) {
      const nsibling = el[index]?.nextSibling as HTMLElement;
      if (index === ev && nsibling.style.display === 'none') {

        nsibling.style.display = 'block';
        console.log('first if')
        return true;

      }

      if (index === ev && nsibling.style.display === 'block') {

        nsibling.style.display = 'none';
        console.log('second if')
        return true;

      }

    }




    this.subMenuRowTableList = (this.subMenuRowTableList) ? false : true;
  }



}
