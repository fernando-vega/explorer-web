import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PostService } from '../../../core/services/post/post.service';
import { PostsInteface } from '../../../core/models/posts.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  data = {
    name: 'Inicio',
    bio: 'Industrias Explorer',
    image: 'avatar.png'
  };

  posts: Observable<PostsInteface[]>;

  constructor(
    private title: Title,
    private meta: Meta,
    private postsService: PostService
    ) {}

  ngOnInit() {

    this.posts = this.postsService.getPosts();

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/inicio' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
