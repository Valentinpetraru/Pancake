import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchKey: string, nameToken: any): any {

    const result: any = [];
    if (!value || searchKey === "" || nameToken === "") {

      return value
    }

    value.forEach((el: any) => {
      if (el[nameToken].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(el)
      }
    });

    return result
  }

}
