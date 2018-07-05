import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}


// note: Angular do not rerun the pipe the data whenever the filter data changes, so adding the
// a new server (update arrays or objects doesn't trigger the filter to re-calculate), otherwise it's just too much
// work which impedes the performance - how to force it to work? pure: false - this will slow you down!!!

