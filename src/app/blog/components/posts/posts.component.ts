import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post/post.service';
import { PostsInteface } from '../../../core/models/posts.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  posts: Observable<PostsInteface[]>;

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
