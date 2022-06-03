import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsDirective } from './directives/farms.directive';



@NgModule({
  declarations: [
    FarmsDirective
  ],
  exports: [FarmsDirective],
  imports: [
    CommonModule,

  ]
})
export class ModuleSharedModule { }
