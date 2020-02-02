import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class FirstWordPipe implements PipeTransform {

  transform(value: string): any {
    const arrayString = value.split(' ')[0];
    return arrayString;
  }

}
