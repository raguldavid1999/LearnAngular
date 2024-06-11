import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample',
})
export class SamplePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value < 1) return '0 sec';
    // convert ms to seconds
    return `${Math.round(value / 1000)} sec`;
  }
}
