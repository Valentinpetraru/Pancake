import { Directive, ViewContainerRef, Input, Type, ElementRef } from '@angular/core';


@Directive({
  selector: '[subLoader]'
})
export class FarmsDirective {

  @Input() appLoader!: Type<any>;

  constructor(private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit() {
    this.viewContainerRef.createComponent(this.appLoader);
  }

}
