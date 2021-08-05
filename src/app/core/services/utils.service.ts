import { IService } from '../models/IService';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  private url = `${environment.url_api}`;

  constructor(private httpClient: HttpClient) {
  }

  async getMedia(id: any, imageSize: string = 'full'): Promise<string> {
    if (id && (id as string) !== '') {
      return await this.httpClient.get<IService>(`${this.url}media/${id}`)
        .toPromise()
        .then((media: any) => {
          return media.media_details.sizes[imageSize].source_url;
        });
    } else {
      return '';
    }

  }

  async getMediaFile(id: any): Promise<string> {
    return await this.httpClient.get<IService>(`${this.url}media/${id}`)
      .toPromise()
      .then((media: any) => {
        return media.source_url;
      });
  }

  diffTimeInHours(startDate: Date, endDate: Date): number {
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600);
  }

}
