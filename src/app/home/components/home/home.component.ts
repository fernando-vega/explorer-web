import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PostService } from '../../../core/services/post/post.service';
import { PostsInteface } from '../../../core/models/posts.interface';
import { Observable } from 'rxjs';
import { PagesService } from '../../../core/services/pages/pages.service';
import { IExperiencePage } from '../../../core/models/IExperiencePage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService],
})
export class HomeComponent implements OnInit {

  data = {
    name: 'Inicio',
    bio: 'Industrias Explorer',
    image: 'avatar.png',
  };

  posts: Observable<PostsInteface[]>;
  experiencePage: IExperiencePage;

  constructor(
    private title: Title,
    private meta: Meta,
    private postsService: PostService,
    private pageServices: PagesService,
  ) {
  }

  ngOnInit() {

    this.posts = this.postsService.getPosts();

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/inicio' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
    this.getExperiencePage();
  }
  
  getExperiencePage() {
    this.pageServices.getExperiencePage()
    .then((experiencePage: IExperiencePage) => {
      this.experiencePage = experiencePage;
    });
  }

}
