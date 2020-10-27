import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IExperiencePage } from '../../models/IExperiencePage';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root',
})
export class PagesService {

  constructor(private httpClient: HttpClient, private utilService: UtilsService) { }

  private url = `${environment.url_api}`;

  async getExperiencePage(): Promise<IExperiencePage> {
    return await this.httpClient.get<IExperiencePage>(`${this.url}pages?slug=experiencia`)
      .toPromise()
      .then(async (page: any) => {
        return await this.getPageExperienceWordPressToModel(page[0]);
      });
  }

  async getPageExperienceWordPressToModel(page: any): Promise<IExperiencePage> {
    return {
      content: page.content.rendered,
      image: await this.utilService.getMedia(page.featured_media as number) as string,
      title: page.title.rendered,
      years: page.anos as number,
    };
  }
}
