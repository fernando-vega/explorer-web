import { Injectable } from '@angular/core';
import { ICounter } from '../../models/items-counter.interface';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { IService } from '../../models/IService';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsCounterService {

  private url = `${environment.url_api}`;

  constructor(private httpClient: HttpClient, private utilService: UtilsService) { }

  getAllItems(): Promise<IService[]> {
    return this.httpClient.get<IService[]>(`${this.url}contador/?_embed`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  async getCounterItemWordPressToModel(counter: any): Promise<ICounter> {
    return {
      id: counter.id,
      img: await this.utilService.getMedia(counter.image) as string,
      num: Number(counter.numero),
      text: counter.texto,
    };
  }

}
