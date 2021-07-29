import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PagesService } from '../../../core/services/pages/pages.service';
import { IPageModel } from '../../../core/models/IPage.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data = {
    name: 'Nosotros',
    bio: 'Nuestra empresa',
    image: 'avatar.png'
  };

  aboutModel: IPageModel;

  constructor(private title: Title, private meta: Meta, private pageServices: PagesService) {}

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'nosotros' },
      { name: 'og:url', content: '/#/nosotros' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
    this.pageServices.getDefaultPage('quienes-somos')
      .then((response) => {
        this.aboutModel = response;
      });
  }
}
