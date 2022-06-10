import { IfStmt } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix'
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let newValue = parseFloat(value)
    if (newValue < 1000) {
      return newValue.toFixed(2)
    }

    if (Math.abs(newValue) < 1000000) {
      return Math.sign(newValue) * Number((Math.abs(newValue) / 1000).toFixed(2)) + 'K'
    }

    if (Math.abs(newValue) < 1000000000) {
      return Math.sign(newValue) * Number((Math.abs(newValue) / 1000000).toFixed(2)) + 'M'
    }

    if (Math.abs(newValue) < 1000000000000) {
      return Math.sign(newValue) * Number((Math.abs(newValue) / 1000000000).toFixed(2)) + 'B'
    }

  }

}
