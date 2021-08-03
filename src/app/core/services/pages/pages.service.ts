import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IExperiencePage } from '../../models/IExperiencePage';
import { UtilsService } from '../utils.service';
import { IPageModel } from '../../models/IPage.model';
import { IInstitutionalModel } from '../../models/IInstitutional.model';

@Injectable({
  providedIn: 'root',
})
export class PagesService {

  constructor(private httpClient: HttpClient, private utilService: UtilsService) {
  }

  private url = `${environment.url_api}`;

  async getExperiencePage(): Promise<IExperiencePage> {
    const valueInStorage = this.utilService.getInfoLocalStorage('pages?slug=experiencia');
    if (valueInStorage != null) {
      return Promise.resolve(valueInStorage);
    }
    return await this.httpClient.get<IExperiencePage>(`${this.url}pages?slug=experiencia`)
      .toPromise()
      .then(async (page: any) => {
        const response = await this.getPageExperienceWordPressToModel(page[0]);
        this.utilService.saveInStorage('pages?slug=experiencia', response);
        return response;
      });
  }

  async getInstitutionalPage(): Promise<IInstitutionalModel> {
    const valueInStorage = this.utilService.getInfoLocalStorage('plan-estrategico');
    if (valueInStorage != null) {
      return Promise.resolve(valueInStorage);
    }
    return await this.httpClient.get<IInstitutionalModel>(`${this.url}plan-estrategico`)
      .toPromise()
      .then(async (page: any) => {
        const response = await this.getInstitutionalModelWordPressToModel(page[0]);
        this.utilService.saveInStorage('plan-estrategico', response);
        return response;
      });
  }

  async getDefaultPage(slug: string): Promise<IPageModel> {
    const valueInStorage = this.utilService.getInfoLocalStorage(`pages?slug=${slug}`);
    if (valueInStorage != null) {
      return Promise.resolve(valueInStorage);
    }
    return await this.httpClient.get<IPageModel>(`${this.url}pages?slug=${slug}`)
      .toPromise()
      .then(async (page: any) => {
        const response = await this.getPageModelWordPressToModel(page[0]);
        this.utilService.saveInStorage(`pages?slug=${slug}`, response);
        return response;
      });
  }

  async getPageExperienceWordPressToModel(page: any): Promise<IExperiencePage> {
    return {
      content: page.content.rendered,
      image: await this.utilService.getMedia(page.featured_media as number) as string,
      title: page.titulo,
      years: page.anos as number,
    };
  }

  async getPageModelWordPressToModel(page: any): Promise<IPageModel> {
    return {
      title: page.title.rendered,
      mainImage: await this.utilService.getMedia(page.featured_media) as string,
      mainContent: page.content.rendered,
      content1: page.contenido,
      content2: page.contenido_2,
      imageParallax: await this.utilService.getMedia(page.imagen_parallax) as string,
      imageParallax2: await this.utilService.getMedia(page.imagen_parallax_2) as string,
    };
  }

  async getInstitutionalModelWordPressToModel(page: any): Promise<IInstitutionalModel> {
    return {
      mission: page.mision,
      corporateValues: page.valores_corporativos,
      title: page.title.rendered,
      vision: page.vision,
    };
  }
}
