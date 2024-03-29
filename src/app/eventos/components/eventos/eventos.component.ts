import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EventsService } from 'src/app/core/services/events/events.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  data = {
    name: 'Eventos',
    bio: 'Eventos',
    image: 'avatar.png'
  };

  events;

  constructor(private title: Title, private meta: Meta, private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getAllEvents()
      .then(value => {
        this.events = [];
        value.forEach(async (event) => {
          this.events.push(await this.eventsService.getEventWordPressToModel(event));
        });
      });
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'eventos' },
      { name: 'og:url', content: '/#/eventos' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
