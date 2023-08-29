import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, valueMax = 20): unknown {

    if(value.length >= 20) {
      value = value.slice(0, valueMax) + '...'
    }
    return value;
  }
}




