import { Injectable } from '@angular/core';
import { CustomersInterface } from '../../models/customers.interface';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { IService } from '../../models/IService';
import { ICounter } from '../../models/items-counter.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {

  private url = `${environment.url_api}`;

  constructor(private httpClient: HttpClient, private utilService: UtilsService) {
  }

  async getCustomer(slug: string): Promise<CustomersInterface> {
    return await this.httpClient.get<CustomersInterface>(`${this.url}clientes?slug=${slug}`)
      .toPromise()
      .then(async (customer: any) => {
        return await this.getClientesWordPressToModel(customer[0]);
      });
  }

  getAllCustomers(): Promise<CustomersInterface[]> {
    return this.httpClient.get<CustomersInterface[]>(`${this.url}clientes/?_embed`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  async getClientesWordPressToModel(customer: any): Promise<CustomersInterface> {
    return {
      id: customer.id,
      name: customer.title.rendered,
      image: await this.utilService.getMedia(customer.logo)
    };
  }

}
