import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormalizedUrlService {

  normalizedUrl(url: string) {
    const re = / /gi;
    return url.replace(re, '-');
  }

}
