import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'battery'
})
export class BatteryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + '%';
  }

}
