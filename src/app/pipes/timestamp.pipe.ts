import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let ts;
    if (typeof value === 'number') {
      ts = moment(value / 1000).utc();
    } else if (typeof value === 'string') {
      ts = moment.utc(new Date(value)).local().add(1, 'h');
    }
    return moment(ts).format('hh:mm:ss');
  }
}
