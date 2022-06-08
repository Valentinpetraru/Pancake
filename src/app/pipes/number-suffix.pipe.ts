import { IfStmt } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let newValue = parseInt(value)
    if (newValue < 1000) {
      return newValue.toFixed(2)
    }

  }

}
