import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesService } from '../../../core/services/servicios/services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {

  data = {
    name: 'Servicios',
    bio: 'Servicios',
    image: 'avatar.png',
  };

  services;

  constructor(
    private title: Title,
    private servicioService: ServicesService,
    private meta: Meta) {
  }

  ngOnInit() {

    this.servicioService.getAllServices()
      .then((response: any[]) => {
        this.services = [];
        response.forEach(async (service) => {
          this.services.push(await this.servicioService.getServiceWordPressToModel(service));
        });
      });

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'servicios' },
      { name: 'og:url', content: '/#/servicios' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
  }
}
