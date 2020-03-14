import { Injectable } from '@angular/core';
import { EventsInterface } from '../../models/events.interface';
import { NormalizedUrlService } from '../normalizedUrl/normalized-url.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: EventsInterface [] = [
    {
      id: '1',
      title: 'Evento 1',
      image: 'https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg',
      location: 'Duitama',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, perspiciatis nihil asperiores atque similique nobis laborum. Possimus repellat nisi, commodi ad fuga vero dolores saepe, modi consectetur tempora est? Autem?',
      date_start: '05/05/2020',
      hour_start: '2:00 PM'
    },
    {
      id: '2',
      title: 'Evento 2',
      image: 'https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg',
      location: 'Duitama',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, perspiciatis nihil asperiores atque similique nobis laborum. Possimus repellat nisi, commodi ad fuga vero dolores saepe, modi consectetur tempora est? Autem?',
      date_start: '05/05/2020',
      hour_start: '2:00 PM'
    },
    {
      id: '3',
      title: 'Evento 3',
      image: 'https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg',
      location: 'Duitama',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, perspiciatis nihil asperiores atque similique nobis laborum. Possimus repellat nisi, commodi ad fuga vero dolores saepe, modi consectetur tempora est? Autem?',
      date_start: '05/05/2020',
      hour_start: '2:00 PM'
    },
  ];

  constructor(private normalizedUrl: NormalizedUrlService) { }

  getAllEvents() {
    return this.events;
  }

  getEvent(title: string) {
    return this.events.find(item => title === (this.normalizedUrl.normalizedUrl(item.title)));
  }
}
