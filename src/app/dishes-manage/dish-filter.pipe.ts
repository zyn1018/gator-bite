import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dishFilter'
})
export class DishFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    if (!field || !keyword) {
      return list;
    }
    return list.filter(item => {
      const itemFieldValue = item[field].toLowerCase();
      return itemFieldValue.indexOf(keyword) >= 0;
    });

  }

}
