import { Injectable } from '@angular/core';
import { IService } from '../../models/IService';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  constructor(private normalizedUrl: NormalizedUrlService,
              private httpClient: HttpClient,
              private utilService: UtilsService) {
  }

  private url = `${environment.url_api}`;

  async getServiceWordPressToModel(service: any): Promise<IService> {
    return {
      bannerImg: await this.utilService.getMedia(service.parallax) as string,
      description: service.content.rendered,
      icon: await this.utilService.getMedia(service.icono) as string,
      id: service.id,
      img: await this.utilService.getMedia(service.featured_media) as string,
      title: service.title.rendered,
      slug: service.slug,
    };
  }

  getAllServices(): Promise<IService[]> {
    const valueInStorage = this.utilService.getInfoLocalStorage('servicios');
    if (valueInStorage != null) {
      return Promise.resolve(valueInStorage);
    }
    return this.httpClient.get<IService[]>(`${this.url}servicios/?_embed`)
      .toPromise()
      .then((response: any) => {
        this.utilService.saveInStorage('servicios', response);
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
