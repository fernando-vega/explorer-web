import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/core/services/post/post.service';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post;
  image;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostService,
    private http: HttpClient
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const slug = params.slug;
      this.fetchPost(slug);
    });
  }

  fetchPost(slug: string) {
    this.postsService.getPost(slug)
    .subscribe(data => {
      this.post = data[0];
      const urlImg = this.post._links['wp:featuredmedia'][0].href;
      const dataImg = this.http.get(urlImg);
      dataImg.subscribe(imgData => {
        this.image = imgData;
      });
    });
  }

}
