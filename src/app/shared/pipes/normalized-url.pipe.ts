import { Pipe, PipeTransform } from '@angular/core';
import { NormalizedUrlService } from '../../core/services/normalizedUrl/normalized-url.service';

@Pipe({
  name: 'normalizedUrl'
})
export class NormalizedUrlPipe implements PipeTransform {

  constructor(private normalizedUrl: NormalizedUrlService) {}

  transform(value: string): any {
    const arrayString = this.normalizedUrl.normalizedUrl(value);
    return arrayString;
  }

}
