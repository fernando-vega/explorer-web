import { Injectable } from '@angular/core';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { IService } from '../../models/IService';
import { environment } from '../../../../environments/environment';
import { ICategoryModel } from '../../models/ICategory.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private url = `${environment.url_api}`;

  constructor(private httpClient: HttpClient) {
  }

  async getAllCategories(): Promise<ICategoryModel[]> {
    return await this.httpClient.get<ICategoryModel[]>(`${this.url}categories`)
      .toPromise()
      .then(async (response: any) => {
        const categories: ICategoryModel[] = [];

        response.forEach(category => {
          // tslint:disable-next-line:triple-equals
          if (!category.parent || category.parent == 0) {
            categories.push(this.getWordPressCategory(response, category));
          }
        });

        return categories;
      });
  }

  getWordPressCategory(categories: any[], category: any): ICategoryModel {
    const categoryResponse: ICategoryModel = {
      id: category.id,
      name: category.name,
      statusClass: false
    };

    const parent: number = category.id;
    let subcategories;
    // tslint:disable-next-line:triple-equals
    subcategories = categories.filter(cat => cat.parent && cat.parent != 0 && cat.parent === parent)
      .map(cat => {
        return {
          id: cat.id,
          name: cat.name,
        };
      });
    categoryResponse.subcategories = subcategories;

    return categoryResponse;
  }

}
