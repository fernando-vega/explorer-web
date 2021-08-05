import { Injectable } from '@angular/core';
import { EventsInterface } from '../../models/events.interface';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventsService {

  constructor(private normalizedUrl: NormalizedUrlService,
              private httpClient: HttpClient,
              private utilService: UtilsService) {
  }

  private url = `${environment.url_api}`;

  async getEventWordPressToModel(event: any): Promise<EventsInterface> {
    return {
      id: event.id,
      date_start: event.fecha_inicio,
      description: event.content.rendered,
      duration: this.utilService.diffTimeInHours(new Date(event.fecha_inicio), new Date(event.fecha_fin)) + ' Horas' ,
      image: await this.utilService.getMedia(event.featured_media),
      location: event.lugar,
      title: event.title.rendered,
    };
  }

  getAllEvents(): Promise<EventsInterface[]> {
    return this.httpClient.get<EventsInterface[]>(`${this.url}eventos/?_embed`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

  async getEvent(slug: string): Promise<EventsInterface> {
    return await this.httpClient.get<EventsInterface>(`${this.url}eventos?slug=${slug}`)
      .toPromise()
      .then(async (service: any) => {
        return await this.getEventWordPressToModel(service[0]);
      });
  }
}
