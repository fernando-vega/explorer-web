import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ServiciosService } from '../../../services/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  data = {
    name: 'Servicios',
    bio: 'Servicios',
    image: 'avatar.png'
  };

  servicios;

  constructor(
    private title: Title,
    private servicioService: ServiciosService,
    private meta: Meta) {}

  ngOnInit() {
    this.servicios = this.servicioService.getAllServicios();

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/servicios' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }
}
