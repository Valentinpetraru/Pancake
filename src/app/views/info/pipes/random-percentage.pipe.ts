import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomPercentage'
})
export class RandomPercentagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Math.floor(Math.random() * 100) + 1 + '%';
  }

}
