import { Injectable } from '@angular/core';
import { ProductsInterface } from '../../models/products.interface';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  constructor(private normalizedUrl: NormalizedUrlService,
              private httpClient: HttpClient,
              private utilService: UtilsService) {
  }

  private url = `${environment.url_api}`;

  async getProductWordPressToModel(product: any): Promise<ProductsInterface> {
    return {
      id: product.id,
      // tslint:disable-next-line:triple-equals
      available: product.disponibilidad == 1,
      category: product.categories,
      description: product.content.rendered,
      characteristicOne: product.caracteristica_1,
      characteristicTwo: product.caracteristica_2,
      characteristicThree: product.caracteristica_3,
      characteristicFour: product.caracteristica_4,
      dataSheet: await this.utilService.getMediaFile(product.ficha_tecnica) as string,
      img: await this.utilService.getMedia(product.featured_media) as string,
      title: product.title.rendered,
      type: product.tipo,
      slug: product.slug,
      icons: [
        {
          id: '1',
          icon: '../../../../assets/images/icons/icon-warning-machine3.svg',
          text: product.caracteristica_1
        },
        {
          id: '2',
          icon: '../../../../assets/images/icons/icon-meter.svg',
          text: product.caracteristica_2
        },
        {
          id: '3',
          icon: '../../../../assets/images/icons/icon-ray-yellow.svg',
          text: product.caracteristica_3
        },
        {
          id: '4',
          icon: '../../../../assets/images/icons/icon-olct.svg',
          text: product.caracteristica_4
        }
      ]
    };
  }

  getAllProducts(): Promise<ProductsInterface[]> {
    return this.httpClient.get<ProductsInterface[]>(`${this.url}producto/?_embed`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  async getProduct(slug: string): Promise<ProductsInterface> {
    return await this.httpClient.get<ProductsInterface>(`${this.url}producto?slug=${slug}`)
      .toPromise()
      .then(async (service: any) => {
        return await this.getProductWordPressToModel(service[0]);
      });
  }

}
