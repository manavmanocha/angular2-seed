import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat',
  pure: false
})
export class DateFormat implements PipeTransform {
    
  transform(value, args?): String {
    let format = args;
    return moment(value).format(format);

  }
}