import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/events/events.service';
import { NormalizedUrlService } from '../../../core/services/normalizedUrl/normalized-url.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
})
export class EventoComponent implements OnInit {

  event;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private normalizedUrl: NormalizedUrlService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const url = this.normalizedUrl.normalizedUrl(params.title);
      this.eventsService.getEvent(url).then(event => {
        this.event = event;
      });
    });

  }

}
