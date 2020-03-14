import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalText'
})
export class FinalTextPipe implements PipeTransform {

  transform(value: string): any {
    const arrayString = value.split(' ');
    const text = [];
    let finalText: string;
    for (const i of arrayString) {
      text.push(i);
    }
    finalText = text.join(' ');
    return finalText;
  }

}
