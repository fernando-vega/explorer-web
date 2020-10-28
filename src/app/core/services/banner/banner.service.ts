import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { CustomersInterface } from '../../models/customers.interface';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private url = `${environment.url_api}`;

  constructor(private httpClient: HttpClient, private utilsService: UtilsService) {
  }

  async getBanner(slug: string): Promise<string> {
    return await this.httpClient.get<CustomersInterface>(`${this.url}banners`)
      .toPromise()
      .then(async (response: any) => {
        const banner = response.find(page => page.pagina.url === slug);
        if (banner) {
          const image = await this.utilsService.getMedia(banner.featured_media);
          return image;
        } else {
          return undefined;
        }
      });
  }

}
