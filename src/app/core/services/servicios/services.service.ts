import { Injectable } from '@angular/core';
import { IService } from '../../models/IService';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  constructor(private normalizedUrl: NormalizedUrlService,
              private httpClient: HttpClient) {
  }

  private url = `${environment.url_api}`;

  async getServiceWordPressToModel(service: any): Promise<IService> {
    return {
      bannerImg: await this.getMedia(service.parallax) as string,
      category: 'quemada',
      description: service.content.rendered,
      icon: await this.getMedia(service.icono) as string,
      id: service.id,
      img: await this.getMedia(service.featured_media) as string,
      title: service.title.rendered,
      slug: service.slug,
    };
  }

  async getMedia(id: any): Promise<string> {
    return await this.httpClient.get<IService>(`${this.url}media/${id}`)
      .toPromise()
      .then((media: any) => {
        return media.media_details.sizes.full.source_url;
      });
  }

  getAllServices(): Promise<IService[]> {
    return this.httpClient.get<IService[]>(`${this.url}servicios/?_embed`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  async getService(slug: string): Promise<IService> {
    return await this.httpClient.get<IService>(`${this.url}servicios?slug=${slug}`)
      .toPromise()
      .then(async (service: any) => {
        return await this.getServiceWordPressToModel(service[0]);
      });
  }

}
